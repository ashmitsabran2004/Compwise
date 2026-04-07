'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    import('@/lib/supabase').then(({ supabase }) => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setIsAuthenticated(!!session);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(!!session);
      });

      return () => subscription.unsubscribe();
    });
  }, []);

  const handleLogout = async () => {
    const { supabase } = await import('@/lib/supabase');
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-5 bg-[rgba(245,242,237,0.85)] backdrop-blur-[20px] border-b border-[rgba(10,10,10,0.06)]">
      <Link href="/" className="font-serif text-xl tracking-[-0.02em] text-ink no-underline flex items-center gap-2.5">
        <span className="w-2 h-2 bg-gold rounded-full inline-block"></span>
        Compwise
      </Link>
      <ul className="flex items-center gap-9 list-none m-0 p-0">
        <li><Link href="/#how" className="text-[13px] font-normal text-ink-2 tracking-[0.02em] transition-colors hover:text-ink">How it works</Link></li>
        <li><Link href="/#features" className="text-[13px] font-normal text-ink-2 tracking-[0.02em] transition-colors hover:text-ink">Features</Link></li>
        <li><Link href="/#libraries" className="text-[13px] font-normal text-ink-2 tracking-[0.02em] transition-colors hover:text-ink">Libraries</Link></li>
        
        {isAuthenticated ? (
          <>
            <li><Link href="/get-started" className="text-[13px] font-medium text-ink tracking-[0.02em] transition-colors hover:text-gold-dark ml-4">Workplace</Link></li>
            <li>
              <button onClick={handleLogout} className="bg-white border border-paper-3 text-ink px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors hover:bg-paper-2">
                Log out
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link href="/login" className="text-[13px] font-medium text-ink tracking-[0.02em] transition-colors hover:text-gold-dark ml-4">Log in</Link></li>
            <li>
              <Link href="/signup" className="bg-ink text-white px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors hover:bg-ink-2">
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
