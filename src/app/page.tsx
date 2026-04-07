import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Libraries } from '@/components/Libraries';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Libraries />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
