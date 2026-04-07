export function Footer() {
  return (
    <footer className="mt-auto bg-ink border-t border-white/5 py-10 px-12 flex items-center justify-between">
      <div className="font-serif text-[17px] text-white/60">Compwise</div>
      <div className="text-[12px] text-white/25">© 2026 Compwise. All rights reserved.</div>
      <div className="flex gap-6">
        {['Privacy', 'Terms', 'Docs', 'Twitter'].map(link => (
          <a key={link} href="#" className="text-[12px] text-white/35 no-underline transition-colors hover:text-white/60">{link}</a>
        ))}
      </div>
    </footer>
  );
}
