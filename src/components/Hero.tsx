'use client';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-12 pt-[120px] pb-20 relative overflow-hidden">
      <div className="hero-bg-grid absolute inset-0 z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase text-gold-dark bg-gradient-to-br from-gold-light to-[#f5ead0] border border-gold-light px-4 py-1.5 rounded-full mb-8 relative z-10"
      >
        <span className="w-[5px] h-[5px] bg-gold rounded-full"></span>
        Intelligent Component Discovery
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-[clamp(52px,8vw,96px)] font-normal leading-none tracking-[-0.03em] text-ink max-w-[900px] mb-7 relative z-10"
      >
        Find the <em className="italic text-gold-dark">perfect</em> component for every part of your UI
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[17px] font-light text-ink-3 max-w-[480px] leading-[1.7] mb-12 relative z-10"
      >
        Describe your interface, paste your code, or upload a screenshot — Compwise recommends the exact component, from the right library, with precise placement guidance.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center gap-4 relative z-10"
      >
        <a href="/get-started" className="bg-ink text-white px-8 py-3.5 rounded-full text-[14px] font-medium tracking-[0.02em] inline-flex items-center gap-2 transition-all hover:-translate-y-px hover:bg-[#1a1a1a] cursor-none">
          Start analyzing free <span>→</span>
        </a>
        <a href="#how" className="text-ink-2 text-[14px] font-normal inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          See how it works <span>↓</span>
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-[72px] w-full max-w-[1000px] bg-white rounded-[24px] border border-paper-3 overflow-hidden shadow-[0_2px_0_rgba(10,10,10,0.04),0_40px_80px_rgba(10,10,10,0.08)] relative z-10"
      >
        <div className="bg-paper-2 px-5 py-3.5 flex items-center gap-2 border-b border-paper-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e74c3c]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#f39c12]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]"></div>
          <div className="flex-1 bg-paper rounded-[6px] px-3 py-1.5 text-[11px] text-ink-3 font-mono mx-3 text-left">compwise.io/analyze</div>
        </div>
        <div className="p-8 grid grid-cols-2 gap-5 min-h-[300px] items-start text-left">
          <div className="bg-paper rounded-[14px] p-5 border border-paper-3">
            <div className="text-[11px] font-medium text-ink-3 uppercase tracking-[0.08em] mb-3">Describe your UI</div>
            <textarea className="w-full h-[80px] bg-white border border-paper-3 rounded-[10px] p-3 text-[12px] font-sans text-ink-2 resize-none mb-3.5 outline-none" readOnly value="I'm building an e-commerce site with a product grid, cart drawer, and multi-step checkout flow..."></textarea>
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-white font-medium">shadcn/ui</span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-white font-medium">Material UI</span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-white font-medium">Chakra UI</span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-paper-3 text-ink-2 font-medium">Ant Design</span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-white font-medium">Tailwind UI</span>
            </div>
            <button className="w-full bg-ink text-white border-none rounded-[10px] p-2.5 text-[12px] font-medium font-sans cursor-none">Analyze & recommend →</button>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="bg-white border border-paper-3 rounded-[12px] px-4 py-3.5 flex gap-3 items-start transition-colors hover:border-paper-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium shrink-0 bg-[#18181B15] text-[#18181B]">PC</div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium mb-[3px] text-ink">Product Card</div>
                <div className="text-[11px] text-ink-3 mb-1.5">shadcn/ui · Card</div>
                <span className="inline-block text-[10px] px-[7px] py-[2px] rounded-full font-medium bg-[#d1fae5] text-[#065f46]">Must have</span>
              </div>
            </div>
            <div className="bg-white border border-paper-3 rounded-[12px] px-4 py-3.5 flex gap-3 items-start transition-colors hover:border-paper-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium shrink-0 bg-[#e0f2fe] text-[#0c4a6e]">CD</div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium mb-[3px] text-ink">Cart Drawer</div>
                <div className="text-[11px] text-ink-3 mb-1.5">shadcn/ui · Sheet</div>
                <span className="inline-block text-[10px] px-[7px] py-[2px] rounded-full font-medium bg-[#d1fae5] text-[#065f46]">Must have</span>
              </div>
            </div>
            <div className="bg-white border border-paper-3 rounded-[12px] px-4 py-3.5 flex gap-3 items-start transition-colors hover:border-paper-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium shrink-0 bg-[#fef3c7] text-[#78350f]">CS</div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium mb-[3px] text-ink">Checkout Stepper</div>
                <div className="text-[11px] text-ink-3 mb-1.5">Material UI · Stepper</div>
                <span className="inline-block text-[10px] px-[7px] py-[2px] rounded-full font-medium bg-[#fef9c3] text-[#713f12]">Nice to have</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
