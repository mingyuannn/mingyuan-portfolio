/* 
  Design: Editorial Minimalism — Navbar
  Fixed top nav, transparent → white on scroll, mono labels, terracotta accent
*/
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#E8E4DC] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col leading-none group"
        >
          <span
            className="font-['Playfair_Display'] font-bold text-[#1A1A18] text-lg tracking-tight transition-colors group-hover:text-[#C4603A]"
          >
            Mingyuan Pang
          </span>
          <span
            className="font-['DM_Mono'] text-[10px] tracking-[0.12em] uppercase text-[#9B9590] mt-0.5"
          >
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:mp2335@cornell.edu"
            className="ml-2 px-5 py-2.5 bg-[#1A1A18] text-[#F7F5F0] font-['DM_Mono'] text-[0.7rem] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#C4603A]"
          >
            Say Hello
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#1A1A18] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1A1A18] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1A1A18] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F7F5F0] border-t border-[#E8E4DC]`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left font-['DM_Mono'] text-sm tracking-[0.08em] uppercase text-[#1A1A18] py-2 border-b border-[#E8E4DC] last:border-0"
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:mp2335@cornell.edu"
            className="mt-2 px-5 py-3 bg-[#1A1A18] text-[#F7F5F0] font-['DM_Mono'] text-[0.7rem] tracking-[0.1em] uppercase text-center"
          >
            Say Hello
          </a>
        </nav>
      </div>
    </header>
  );
}
