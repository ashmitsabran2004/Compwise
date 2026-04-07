'use client';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="bg-ink py-[120px] px-12 text-center relative overflow-hidden">
      <div className="cta-bg-grid absolute inset-0 z-0"></div>
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <h2 className="font-serif text-[clamp(36px,5vw,68px)] font-normal text-white leading-[1.1] tracking-[-0.03em] mb-6 max-w-[700px] mx-auto">
          Ready to build <em className="text-gold-light italic">smarter</em>?
        </h2>
        <p className="text-[16px] font-light text-white/50 mb-12">
          Join thousands of developers who let Compwise do the component research.
        </p>
        <a href="/get-started" className="bg-gold text-ink px-9 py-3.5 rounded-full text-[14px] font-medium tracking-[0.02em] inline-flex items-center gap-2 cursor-none transition-all hover:bg-gold-light hover:-translate-y-px">
          Start for free — no card needed →
        </a>
      </motion.div>
    </section>
  );
}
