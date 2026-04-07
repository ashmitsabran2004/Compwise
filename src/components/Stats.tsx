'use client';
import { Reveal } from './Reveal';

export function Stats() {
  return (
    <Reveal className="bg-paper-2 border-t border-paper-3 border-b py-[28px] px-12 flex justify-center gap-[72px]">
      <div className="text-center">
        <div className="font-serif text-[32px] font-normal text-ink tracking-[-0.03em]">48+</div>
        <div className="text-[12px] text-ink-3 font-light mt-1">Component libraries indexed</div>
      </div>
      <div className="text-center">
        <div className="font-serif text-[32px] font-normal text-ink tracking-[-0.03em]">2,400+</div>
        <div className="text-[12px] text-ink-3 font-light mt-1">Components catalogued</div>
      </div>
      <div className="text-center">
        <div className="font-serif text-[32px] font-normal text-ink tracking-[-0.03em]">3</div>
        <div className="text-[12px] text-ink-3 font-light mt-1">Input methods supported</div>
      </div>
      <div className="text-center">
        <div className="font-serif text-[32px] font-normal text-ink tracking-[-0.03em]">~4s</div>
        <div className="text-[12px] text-ink-3 font-light mt-1">Average analysis time</div>
      </div>
    </Reveal>
  );
}
