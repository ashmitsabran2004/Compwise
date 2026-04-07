'use client';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function Signup() {

  const handleGithubSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { 
          scopes: 'repo',
          redirectTo: `${window.location.origin}/get-started` 
        }
      });
      if (error) throw error;
    } catch (error: any) {
      alert(`Signup failed: ${error.message}. Make sure GitHub is enabled in your Supabase Auth Providers.`);
    }
  };


  const handleEmailSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Email signup will be implemented soon!");
  };

  return (
    <main className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-24 px-6 md:px-12 w-full pt-32">
        <div className="w-full max-w-[440px] bg-white p-10 rounded-2xl border border-ink/10 shadow-sm text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-bg-grid opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 w-full">
            <h1 className="font-serif text-4xl text-ink tracking-tight mb-2">
              Create your <span className="text-gold italic">account</span>
            </h1>
            <p className="text-ink-3 text-[14px] mb-8 font-light">
              Connect your repository and get UI recommendations in seconds.
            </p>

            <div className="flex flex-col gap-4">
              <button onClick={handleGithubSignup} className="w-full flex items-center justify-center gap-3 bg-[#181717] hover:bg-[#2b2a2a] text-white py-3.5 px-6 rounded-xl font-medium transition-colors text-[14px] shadow-sm relative overflow-hidden group">
                <span className="absolute inset-0 bg-gold/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current relative z-10">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                </svg>
                <span className="relative z-10">Sign up with GitHub</span>
              </button>
              

            </div>

            <div className="mt-8 flex items-center gap-4 text-ink-3">
              <hr className="flex-1 border-ink/5" />
              <span className="text-[12px] uppercase tracking-wider font-medium">Or</span>
              <hr className="flex-1 border-ink/5" />
            </div>

            <form className="mt-8 flex flex-col gap-4 text-left">
              <div>
                <label className="block text-[12px] font-medium text-ink-2 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="you@company.com" className="w-full bg-paper-2 border border-ink/10 rounded-lg px-4 py-3.5 text-[14px] text-ink focus:outline-none focus:border-gold transition-colors" />
              </div>
              <button type="button" onClick={handleEmailSignup} className="w-full bg-ink text-white py-3.5 rounded-lg text-[14px] font-medium hover:bg-ink-2 transition-colors">
                Sign up with Email
              </button>
            </form>

            <div className="mt-8 text-[13px] text-ink-3">
              Already have an account?{' '}
              <Link href="/login" className="text-gold-dark hover:text-gold font-medium transition-colors">
                Log in
              </Link>
            </div>
            
            <p className="mt-6 text-[11px] text-ink-3/60 px-4 leading-relaxed tracking-wide">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
