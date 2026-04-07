'use client';
import { Reveal } from './Reveal';

export function HowItWorks() {
  return (
    <section id="how" className="bg-white py-[100px] px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="text-center mb-[72px]">
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold-dark mb-4">How it works</div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-w-[600px] mb-5 mx-auto">
            Three steps from idea to implementation
          </h2>
          <p className="text-[16px] font-light text-ink-3 max-w-[460px] leading-[1.7] mx-auto">
            No more digging through docs. Compwise reads your UI and thinks like a senior engineer.
          </p>
        </Reveal>
        
        <Reveal className="grid grid-cols-3 gap-[2px] bg-paper-3 rounded-[20px] overflow-hidden">
          <div className="bg-white py-10 px-9 relative">
            <div className="font-serif text-[64px] font-normal text-paper-2 leading-none mb-5 tracking-[-0.04em]">01</div>
            <div className="w-10 h-10 bg-paper rounded-[10px] flex items-center justify-center mb-5 text-[18px]">✦</div>
            <h3 className="text-[18px] font-medium text-ink mb-2.5 tracking-[-0.01em]">Describe your UI</h3>
            <p className="text-[14px] font-light text-ink-3 leading-[1.7]">Type a description, paste your JSX or HTML, or drag and drop a screenshot of your current interface.</p>
          </div>
          <div className="bg-white py-10 px-9 relative">
            <div className="font-serif text-[64px] font-normal text-paper-2 leading-none mb-5 tracking-[-0.04em]">02</div>
            <div className="w-10 h-10 bg-paper rounded-[10px] flex items-center justify-center mb-5 text-[18px]">◈</div>
            <h3 className="text-[18px] font-medium text-ink mb-2.5 tracking-[-0.01em]">AI analyses the context</h3>
            <p className="text-[14px] font-light text-ink-3 leading-[1.7]">Compwise reads your UI holistically — understanding layout, intent, user flow, and what's missing.</p>
          </div>
          <div className="bg-white py-10 px-9 relative">
            <div className="font-serif text-[64px] font-normal text-paper-2 leading-none mb-5 tracking-[-0.04em]">03</div>
            <div className="w-10 h-10 bg-paper rounded-[10px] flex items-center justify-center mb-5 text-[18px]">⬡</div>
            <h3 className="text-[18px] font-medium text-ink mb-2.5 tracking-[-0.01em]">Get exact recommendations</h3>
            <p className="text-[14px] font-light text-ink-3 leading-[1.7]">Receive ranked suggestions with placement guides, prop configurations, and ready-to-paste code snippets.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
