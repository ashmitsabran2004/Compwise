import type { Metadata } from 'next';
import './globals.css';
import { Cursor } from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Compwise — Component Intelligence',
  description: 'Intelligent Component Discovery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased text-ink bg-paper selection:bg-gold-light selection:text-ink">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
