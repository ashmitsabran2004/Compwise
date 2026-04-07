'use client';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section className="bg-paper py-[100px] px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold-dark mb-4">What developers say</div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-ink max-w-[600px] mb-5">
            Trusted by engineers who care about craft
          </h2>
        </Reveal>
        
        <Reveal className="grid grid-cols-3 gap-4 mt-14">
          <div className="bg-white border border-paper-3 rounded-[20px] p-7">
            <p className="font-serif text-[15px] font-normal text-ink leading-[1.65] mb-6 italic">&quot;Compwise saved me hours of digging through docs. I pasted my dashboard layout and got six perfect recommendations in under five seconds.&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0 bg-[#3B6D11]">AR</div>
              <div>
                <div className="text-[13px] font-medium text-ink mb-0.5">Arjun Rao</div>
                <div className="text-[12px] text-ink-3">Senior Frontend Engineer, Stripe</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-paper-3 rounded-[20px] p-7">
            <p className="font-serif text-[15px] font-normal text-ink leading-[1.65] mb-6 italic">&quot;The placement guidance is what sets it apart. It doesn&apos;t just say &apos;use a modal&apos; — it tells you exactly where, why, and with which props.&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0 bg-[#185FA5]">LM</div>
              <div>
                <div className="text-[13px] font-medium text-ink mb-0.5">Léa Martin</div>
                <div className="text-[12px] text-ink-3">Product Designer, Linear</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-paper-3 rounded-[20px] p-7">
            <p className="font-serif text-[15px] font-normal text-ink leading-[1.65] mb-6 italic">&quot;We use this in every design review now. It&apos;s like having a component library expert in the room who&apos;s read every changelog.&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium text-white shrink-0 bg-[#854F0B]">TK</div>
              <div>
                <div className="text-[13px] font-medium text-ink mb-0.5">Tae-yang Kim</div>
                <div className="text-[12px] text-ink-3">Tech Lead, Vercel</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
