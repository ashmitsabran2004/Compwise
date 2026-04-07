import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { context, type, repoName, targetUrl, githubToken } = await req.json();

    const mistralApiKey = process.env.MISTRAL_API_KEY;
    
    if (!mistralApiKey) {
      return NextResponse.json({ error: 'Mistral API key is not configured' }, { status: 500 });
    }

    let htmlContext = "";
    if (targetUrl) {
      try {
        const fetchUrl = targetUrl.startsWith('http') ? targetUrl : `http://localhost:3000${targetUrl.startsWith('/') ? '' : '/'}${targetUrl}`;
        const res = await fetch(fetchUrl);
        if (res.ok) {
          const html = await res.text();
          // Remove scripts, styles, and large SVGs to keep the payload size manageable
          const cleanHtml = html
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
            .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '<svg>...</svg>')
            .replace(/<!--[\s\S]*?-->/g, '');
            
          htmlContext = `\n\n[LIVE PREVIEW HTML]: The user is currently previewing the URL: ${targetUrl}. Here is the actual HTML structure of front-end page:\n\n${cleanHtml.substring(0, 15000)}\n\nBased on this ACTUAL HTML content, locate the real components and derive highly accurate 'top' and 'left' percentage coordinates.`;
        }
      } catch (err) {
        console.error("Could not fetch HTML for context:", err);
      }
    }

    let repoContextInfo = "";
    if (repoName && githubToken && (type === 'github' || type === 'manual')) {
        try {
            const filesRes = await fetch(`https://api.github.com/repos/${repoName}/contents`, {
                headers: { 
                  Authorization: `Bearer ${githubToken}`,
                  Accept: 'application/vnd.github.v3+json'
                }
            });
            if (filesRes.ok) {
                const files = await filesRes.json();
                if (Array.isArray(files)) {
                  const fileNames = files.map((f: any) => f.name).join(', ');
                  repoContextInfo += `\n\n[REPOSITORY ARCHITECTURE SCAN]: I scanned the root of their repository "${repoName}". It contains these folders and files: ${fileNames}.`;
                }
            }
            
            const pkgRes = await fetch(`https://api.github.com/repos/${repoName}/contents/package.json`, {
                headers: { 
                  Authorization: `Bearer ${githubToken}`,
                  Accept: 'application/vnd.github.v3.raw'
                }
            });
            if (pkgRes.ok) {
                const pkgText = await pkgRes.text();
                repoContextInfo += `\n\n[PACKAGE.JSON SCAN]: Here is their package.json:\n${pkgText.substring(0, 1500)}`;
            }
        } catch (e) {
            console.error("Repo read error", e);
        }
    }

    const repoInstructions = repoContextInfo ? `\n\nMake sure your recommendation is based heavily on their CURRENT codebase architecture inferred from the scan above. In your "recommendation_reason", you MUST specify exactly WHICH DIRECTORIES OR FILES they need to modify (e.g. 'Since you have a src/components/ folder, place it there', or 'You need to update your app/page.tsx'). Be extremely conscious and specific about where the code goes so they know exactly what to change.` : "";

    const combinedContext = context ? `\n\nThe user also provided this manual description / questions: "${context}". Please address this in your recommendation.` : "";

    const urlContext = targetUrl ? ` The user is previewing this specific URL/Page: "${targetUrl}". ` : "";

    const promptMessage = type === 'github' 
      ? `Act as an expert frontend UI engineer. The user is connecting a GitHub repository named "${repoName}".${repoContextInfo}${combinedContext}${urlContext}\nAnalyze the context and recommend the absolute best UI Component from a popular React UI library.${repoInstructions}`
      : `Act as an expert frontend UI engineer. The user has provided this UI logic description: "${context}".${urlContext}Recommend the absolute best UI Component from a popular React UI library.${repoContextInfo}${htmlContext}${repoInstructions}`;

    const systemInstructions = `
You must respond strictly in valid JSON format matching this structure:
{
  "component_name": "Name of Component",
  "library_name": "Name of Recommended Library",
  "match_level": "High Match | Perfect Match",
  "recommendation_reason": "Detailed paragraph explaining exactly why this component fits their need based on modern standards.",
  "benefits": [
    "Benefit 1",
    "Benefit 2"
  ],
  "installation_command": "npx shadcn@latest add ...",
  "alternative": {
    "component_name": "Alternative Component Name",
    "library_name": "Alternative Library",
    "reason": "Why they might pick this instead",
    "benefits": ["Alternative benefit"]
  },
  "preview_markers": [
    {
      "top": "15%",
      "left": "20%",
      "title": "Header Area",
      "description": "Short tip about component placement"
    }
  ]
}
The preview_markers array should contain 2-4 items mapping the logical UI layout over a generic 16:9 1080p dashboard canvas. Ensure that if a specific targetUrl or page type (e.g. login, dashboard, setting) is mentioned, you logically infer where those elements normally sit and return highly accurate coordinates. For instance, if the user context is a login page, the markers should be horizontally centered (left: ~50%) instead of placed randomly. Use percentage strings for top and left so they can be absolutely positioned (e.g., top: '50%', left: '30%').
Do not include any raw markdown or text outside the curly braces. Just the valid JSON representation.`;

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${mistralApiKey}`
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          { role: 'system', content: systemInstructions },
          { role: 'user', content: promptMessage }
        ],
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mistral API Error:", errorText);
      return NextResponse.json({ error: 'Failed to fetch recommendation from AI' }, { status: 502 });
    }

    const data = await response.json();
    const resultJsonStr = data.choices[0].message.content;
    const jsonResult = JSON.parse(resultJsonStr);

    return NextResponse.json(jsonResult);
  } catch (error: any) {
    console.error("Analysis route error:", error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
