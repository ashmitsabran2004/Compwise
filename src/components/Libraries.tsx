'use client';
import { Reveal } from './Reveal';

export function Libraries() {
  return (
    <section id="libraries" className="bg-ink py-20 px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold-light mb-4">Supported libraries</div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.02em] text-white max-w-[600px] mb-5">
            Every major library.<br/>One interface.
          </h2>
          <p className="text-[16px] font-light text-white/45 max-w-[460px] leading-[1.7]">
            Compwise has deep knowledge of the entire component ecosystem — and we&apos;re always adding more.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-2.5 mt-12">
          {['shadcn/ui', 'Material UI', 'Chakra UI'].map((lib) => (
            <span key={lib} className="px-5 py-2.5 border border-gold rounded-full text-[13px] font-normal text-gold-light bg-[rgba(201,168,76,0.08)] cursor-none transition-all hover:border-white/30 hover:text-white hover:bg-white/10">{lib}</span>
          ))}
          {['Ant Design', 'Tailwind UI', 'Radix UI', 'Headless UI', 'Mantine', 'NextUI', 'DaisyUI', 'Ariakit', 'Reach UI', 'React Aria', 'Park UI', '+ more'].map((lib) => (
            <span key={lib} className="px-5 py-2.5 border border-white/10 rounded-full text-[13px] font-normal text-white/60 bg-white/5 cursor-none transition-all hover:border-white/30 hover:text-white hover:bg-white/10">{lib}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
