'use client';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function GetStarted() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  // States for handling the logic
  const [manualContext, setManualContext] = useState('');
  const [selectedRepo, setSelectedRepo] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [activeIframe, setActiveIframe] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResponse, setAiResponse] = useState<any>(null);

  const isManualActive = manualContext.trim() !== '' || targetUrl.trim() !== '';

  useEffect(() => {
    async function fetchRepos() {
      const { data: { session } } = await supabase.auth.getSession();
      
      // Redirect if not logged in
      if (!session) {
        window.location.href = '/login';
        return;
      }
      
      // Attempt to load repos if a GitHub token is present in the session
      if (session?.provider_token) {
        try {
          const res = await fetch('https://api.github.com/user/repos?sort=updated&per_page=20', {
            headers: {
              Authorization: `Bearer ${session.provider_token}`,
              Accept: 'application/vnd.github.v3+json'
            }
          });
          if (res.ok) {
            const data = await res.json();
            setRepos(data);
            if (data.length > 0) setSelectedRepo(data[0].full_name);
          }
        } catch (err) {
          console.error("Failed to fetch Github repos:", err);
        }
      }
      setLoadingRepos(false);
    }
    fetchRepos();
  }, []);

  const handleAnalyze = async (type: 'github' | 'manual') => {
    setIsAnalyzing(true);
    setAiResponse(null);
    
    if (type === 'github') {
      setActiveIframe(''); // Clear iframe when scanning a repo so it disappears
    } else {
      // Only set activeIframe if the user provided a different URL,
      // to prevent reloading the iframe back to landing page if they navigated inside.
      if (!activeIframe || targetUrl !== activeIframe) {
        setActiveIframe(targetUrl); // This will naturally clear if targetUrl is empty
      }
    }

    const { data: { session } } = await supabase.auth.getSession();

    const payload = {
      type,
      context: manualContext, // always pass context if it exists
      repoName: selectedRepo,
      targetUrl: targetUrl,
      githubToken: session?.provider_token
    };

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Analysis request failed');

      const data = await res.json();
      setAiResponse(data);
    } catch (err) {
      console.error(err);
      alert("Failed to get intelligent component analysis from AI.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-paper pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-12 flex-1 w-full pb-20">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">
            Intelligent Component <span className="text-gold italic">Analysis</span>
          </h1>
          <p className="text-ink-2 text-lg font-light">
            Describe your interface context below. Our AI will analyze your requirements and recommend the exact components from your preferred libraries, complete with integration instructions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-32">
            
            <div className="bg-[#181717] p-6 rounded-xl shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-24 h-24 fill-current">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                </svg>
              </div>
              <h2 className="font-serif text-xl mb-2 relative z-10">Analyze Repository</h2>
              <p className="text-white/70 text-[13px] mb-5 relative z-10 leading-relaxed text-balance">
                Connect your codebase to let AI scan your files and recommend UI components specifically tailored to your existing architecture.
              </p>
              <div className="relative z-10">
                <label className="block text-[11px] font-medium text-white/50 mb-2 uppercase tracking-[0.08em]">Select Repository</label>
                <div className="relative">
                  <select 
                    value={selectedRepo}
                    onChange={(e) => setSelectedRepo(e.target.value)}
                    className="w-full bg-[#2b2a2a] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-none"
                  >
                    {loadingRepos ? (
                      <option>Loading repositories...</option>
                    ) : repos.length > 0 ? (
                      repos.map(repo => (
                        <option key={repo.id} value={repo.full_name}>{repo.full_name}</option>
                      ))
                    ) : (
                      <>
                        <option>No repositories found. Sign in via GitHub?</option>
                        <option value="compwise/frontend-app">compwise/frontend-app (Mock)</option>
                        <option value="compwise/saas-dashboard">compwise/saas-dashboard (Mock)</option>
                      </>
                    )}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-white/50 text-[10px]">▼</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleAnalyze('github')}
                  disabled={isAnalyzing}
                  className="mt-4 w-full bg-white text-ink py-2.5 rounded-lg text-[13px] font-medium hover:bg-paper transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Scanning Codebase...' : isManualActive ? 'Scan Codebase with context' : 'Scan Codebase'}
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-ink/10 shadow-sm opacity-60 hover:opacity-100 transition-opacity duration-300 w-full relative z-[20]">
              <h2 className="font-serif text-xl text-ink mb-4">Manual Context</h2>
              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-[11px] font-medium text-ink-3 mb-2 uppercase tracking-[0.08em]">UI Description</label>
                  <textarea 
                    rows={2}
                    value={manualContext}
                    onChange={(e) => setManualContext(e.target.value)}
                    placeholder="e.g. A multi-step form with validation..." 
                    className="w-full bg-paper-2 border border-ink/10 rounded-sm px-4 py-2 text-[13px] text-ink focus:outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-ink-3 mb-2 uppercase tracking-[0.08em]">Live Preview URL (Optional)</label>
                  <input 
                    type="url"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    placeholder="https://yourdesign.com" 
                    className="w-full bg-paper-2 border border-ink/10 rounded-sm px-4 py-2 text-[13px] text-ink focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <button 
                  type="button"
                  onClick={() => handleAnalyze('manual')}
                  disabled={isAnalyzing || !manualContext.trim()}
                  className="mt-2 bg-paper-2 text-ink py-2.5 border border-ink/10 rounded-lg text-[13px] font-medium hover:bg-paper-3 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Generating...' : 'Generate Recommendations'}
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {activeIframe && (
              <div className={`bg-white p-6 rounded-xl border border-ink/10 shadow-sm mb-6 relative z-10 transition-opacity duration-300 ${isAnalyzing ? 'opacity-60 pointer-events-none' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl text-ink">Architectural Map</h3>
                  <span className="text-[10px] uppercase tracking-wider text-ink-3">
                    {isAnalyzing ? 'Analyzing Layout...' : 'Hover over markers'}
                  </span>
                </div>
                <div className="w-full h-[1000px] bg-paper-2 rounded-lg shadow-inner border border-ink/5 relative overflow-hidden flex flex-col pointer-events-auto">
                  {/* Fake Browser Window Header */}
                  <div className="h-8 bg-[#e8e6e1] border-b border-ink/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/10"></div>
                  </div>
                  
                  {/* Interactive Iframe */}
                  <div className="flex-1 w-full h-full relative z-0 pointer-events-auto">
                    <iframe src={activeIframe} scrolling="no" className="w-full h-full absolute inset-0 border-none" />
                  </div>

                  {/* Interactive Canvas Area for Markers */}
                  {!isAnalyzing && aiResponse && Array.isArray(aiResponse.preview_markers) && (
                    <div className="absolute inset-x-0 bottom-0 top-8 pointer-events-none">
                      {aiResponse.preview_markers.map((marker: any, index: number) => (
                        <div 
                          key={index}
                          className="absolute z-20 cursor-crosshair pointer-events-auto group w-8 h-8 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                          style={{ top: marker.top, left: marker.left }}
                        >
                          {/* Pulsing Hotspot Layer */}
                          <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-gold opacity-40"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-dark shadow shadow-gold/50 border-[2px] border-white box-content"></span>

                          {/* Tooltip on hover */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-48 bg-ink text-white text-[11px] p-3 rounded-lg shadow-xl z-50 pointer-events-none transform transition-all duration-200 mt-2">
                            <div className="font-medium mb-1 text-gold tracking-wide uppercase">{marker.title}</div>
                            <div className="text-white/80 leading-relaxed font-light">{marker.description}</div>
                            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 border-x-[6px] border-b-[6px] border-transparent border-b-ink"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-white/20 flex flex-col items-center justify-center z-30">
                      <div className="w-8 h-8 border-[3px] border-gold border-t-white/20 rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {isAnalyzing && !activeIframe && (
              <div className="bg-white p-8 rounded-xl border border-ink/10 shadow-sm flex items-center justify-center min-h-[300px]">
                <div className="flex flex-col items-center gap-4 text-ink-2">
                  <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                  <p className="font-medium">Connecting to AI Intelligence...</p>
                </div>
              </div>
            )}

            {!isAnalyzing && aiResponse && (
              <>
                <div className="bg-white p-8 rounded-xl border border-ink/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="inline-block text-[10px] px-3 py-1.5 rounded-full font-medium bg-[#d1fae5] text-[#065f46] uppercase tracking-wider">{aiResponse.match_level || 'High Match'}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 bg-gold rounded-full"></span>
                    <h3 className="font-serif text-2xl text-ink">{aiResponse.component_name} <span className="text-ink-3">({aiResponse.library_name})</span></h3>
                  </div>
                  <p className="text-ink-2 mb-6 leading-relaxed text-[15px]">
                    {aiResponse.recommendation_reason}
                  </p>
                  
                  <div className="bg-paper-2 p-6 rounded-sm border border-paper-3 mb-6">
                    <h4 className="font-medium text-ink text-[13px] uppercase tracking-wider mb-3">Why Consider This UI?</h4>
                    <ul className="list-disc pl-5 text-ink-2 space-y-2 text-[14px]">
                      {Array.isArray(aiResponse.benefits) && aiResponse.benefits.map((benefit: string, i: number) => (
                        <li key={i}><span className="text-ink">{benefit}</span></li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#0a0a0a] p-4 rounded-lg flex items-center justify-between">
                    <code className="text-gold-light text-sm font-mono">{aiResponse.installation_command}</code>
                    <button className="text-[11px] text-white/70 hover:text-white uppercase tracking-wider font-medium cursor-none">Copy</button>
                  </div>
                </div>

                {aiResponse.alternative && (
                  <div className="bg-white p-8 rounded-xl border border-ink/10 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="inline-block text-[10px] px-3 py-1.5 rounded-full font-medium bg-[#fef9c3] text-[#713f12] uppercase tracking-wider">Alternative</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-3 h-3 bg-ink-3 rounded-full"></span>
                      <h3 className="font-serif text-2xl text-ink">{aiResponse.alternative.component_name} <span className="text-ink-3">({aiResponse.alternative.library_name})</span></h3>
                    </div>
                    <p className="text-ink-2 mb-6 leading-relaxed text-[15px]">
                      {aiResponse.alternative.reason}
                    </p>

                    <div className="bg-paper-2 p-6 rounded-sm border border-paper-3 mb-6">
                      <h4 className="font-medium text-ink text-[13px] uppercase tracking-wider mb-3">UI Recommendation Details</h4>
                      <ul className="list-disc pl-5 text-ink-2 space-y-2 text-[14px]">
                        {Array.isArray(aiResponse.alternative.benefits) && aiResponse.alternative.benefits.map((benefit: string, i: number) => (
                          <li key={i}><span className="text-ink">{benefit}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </>
            )}

            {!isAnalyzing && !aiResponse && (
              <div className="bg-paper-2 p-8 rounded-xl border border-paper-3 border-dashed flex flex-col items-center justify-center text-center py-20 min-h-[300px]">
                <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center mb-4 border border-ink/5 relative group">
                  <span className="text-gold text-xl group-hover:scale-110 transition-transform">+</span>
                </div>
                <h4 className="font-medium text-ink mb-2">Connect to AI Analysis</h4>
                <p className="text-ink-3 text-sm max-w-[280px]">Select a repository or manually describe a UI to discover the optimal component integration.</p>
              </div>
            )}

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
