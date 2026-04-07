'use client';
import { Reveal } from './Reveal';

export function Features() {
  return (
    <section id="features" className="bg-paper py-[100px] px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold-dark mb-4">What makes it different</div>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-w-[600px] mb-5">
            Not just search.<br/>Genuine understanding.
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] items-center mt-[60px]">
          <Reveal className="flex flex-col">
            <div className="py-7 border-b border-t border-paper-3 cursor-none transition-[padding] duration-300 hover:pl-2 group">
              <div className="font-mono text-[11px] text-gold-dark mb-2 font-medium">01 /</div>
              <h3 className="text-[17px] font-medium text-ink mb-2 tracking-[-0.01em]">Placement-aware recommendations</h3>
              <p className="text-[14px] font-light text-ink-3 leading-[1.65]">Every suggestion includes exact placement guidance — not just &quot;use a card&quot; but &quot;use this card here, in this slot, for this reason.&quot;</p>
            </div>
            <div className="py-7 border-b border-paper-3 cursor-none transition-[padding] duration-300 hover:pl-2 group">
              <div className="font-mono text-[11px] text-gold-dark mb-2 font-medium">02 /</div>
              <h3 className="text-[17px] font-medium text-ink mb-2 tracking-[-0.01em]">Priority-ranked output</h3>
              <p className="text-[14px] font-light text-ink-3 leading-[1.65]">Recommendations are sorted into must-have, nice-to-have, and optional — so you always know where to start.</p>
            </div>
            <div className="py-7 border-b border-paper-3 cursor-none transition-[padding] duration-300 hover:pl-2 group">
              <div className="font-mono text-[11px] text-gold-dark mb-2 font-medium">03 /</div>
              <h3 className="text-[17px] font-medium text-ink mb-2 tracking-[-0.01em]">Ready-to-paste code snippets</h3>
              <p className="text-[14px] font-light text-ink-3 leading-[1.65]">Each recommendation ships with real import statements and usage examples. Copy, paste, customize.</p>
            </div>
            <div className="py-7 border-b border-paper-3 cursor-none transition-[padding] duration-300 hover:pl-2 group">
              <div className="font-mono text-[11px] text-gold-dark mb-2 font-medium">04 /</div>
              <h3 className="text-[17px] font-medium text-ink mb-2 tracking-[-0.01em]">Multi-library intelligence</h3>
              <p className="text-[14px] font-light text-ink-3 leading-[1.65]">Pick from 10+ component libraries and get cross-library alternatives — Compwise doesn&apos;t lock you in to one ecosystem.</p>
            </div>
          </Reveal>
          
          <Reveal className="bg-white rounded-[20px] border border-paper-3 p-7 relative overflow-hidden">
            <div className="text-[11px] font-medium text-ink-3 uppercase tracking-[0.08em] mb-5">Live recommendation preview</div>
            
            <div className="bg-paper rounded-xl p-4 mb-2.5 border border-paper-3 relative">
              <div className="absolute top-3.5 right-3.5 text-[10px] px-2 py-[3px] rounded-full font-medium bg-[#d1fae5] text-[#065f46]">Must have</div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-semibold bg-[#18181B12] text-[#18181B]">DT</div>
                <div>
                  <div className="text-[13px] font-medium text-ink">Data Table</div>
                  <div className="text-[11px] text-ink-3">shadcn/ui · Table</div>
                </div>
              </div>
              <div className="h-1 bg-paper-3 rounded-full overflow-hidden"><div className="h-full rounded-full bg-ink w-[95%]"></div></div>
              <div className="flex gap-[5px] flex-wrap mt-2.5">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">Main content area</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">sortable</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">pagination</span>
              </div>
            </div>

            <div className="bg-paper rounded-xl p-4 mb-2.5 border border-paper-3 relative">
              <div className="absolute top-3.5 right-3.5 text-[10px] px-2 py-[3px] rounded-full font-medium bg-[#d1fae5] text-[#065f46]">Must have</div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-semibold bg-[#e0f2fe] text-[#0c4a6e]">CM</div>
                <div>
                  <div className="text-[13px] font-medium text-ink">Command Menu</div>
                  <div className="text-[11px] text-ink-3">shadcn/ui · Command</div>
                </div>
              </div>
              <div className="h-1 bg-paper-3 rounded-full overflow-hidden"><div className="h-full rounded-full bg-ink w-[88%]"></div></div>
              <div className="flex gap-[5px] flex-wrap mt-2.5">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">Top search bar</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">⌘K trigger</span>
              </div>
            </div>

            <div className="bg-paper rounded-xl p-4 mb-2.5 border border-paper-3 relative">
              <div className="absolute top-3.5 right-3.5 text-[10px] px-2 py-[3px] rounded-full font-medium bg-[#fef9c3] text-[#713f12]">Nice to have</div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-semibold bg-[#fce7f3] text-[#831843]">SB</div>
                <div>
                  <div className="text-[13px] font-medium text-ink">Sidebar Nav</div>
                  <div className="text-[11px] text-ink-3">Radix UI · NavigationMenu</div>
                </div>
              </div>
              <div className="h-1 bg-paper-3 rounded-full overflow-hidden"><div className="h-full rounded-full bg-ink w-[72%]"></div></div>
              <div className="flex gap-[5px] flex-wrap mt-2.5">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">Left panel</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-3 text-ink-2 font-medium">collapsible</span>
              </div>
            </div>
            
          </Reveal>
        </div>
      </div>
    </section>
  );
}
