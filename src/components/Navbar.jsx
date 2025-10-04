import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#design", label: "Designs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        shadow ? "bg-neutral-950/70 border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide">
          <span className="text-[#ff4ecd]">Stephanie</span> Pham
        </a>
        <button
          className="md:hidden p-2 rounded border border-white/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="text-white/80 hover:text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ff4ecd] after:transition-all"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="px-4 py-2 rounded-md bg-[#ff4ecd] hover:bg-[#ff4ecd]/90 transition shadow-[0_0_40px_rgba(255,78,205,0.35)]"
              href="#contact"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden px-5 pb-4 space-y-2 border-t border-neutral-800 bg-neutral-950/80">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                className="block py-2 text-white/90"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}