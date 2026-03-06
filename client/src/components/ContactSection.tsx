/*
  Design: Editorial Minimalism — Contact Section + Footer
  Large typographic CTA, minimal contact info, editorial footer
*/
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mp2335@cornell.edu").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="py-32 bg-[#F7F5F0] relative overflow-hidden"
      >
        {/* Section number watermark */}
        <div className="absolute -left-8 top-16 select-none pointer-events-none">
          <span className="section-number">04</span>
        </div>

        <div className="container relative z-10">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6 reveal">
            <div className="accent-line" />
            <span className="mono-label text-[#9B9590]">Contact</span>
          </div>

          {/* Large CTA headline */}
          <h2
            className="display-headline text-[#1A1A18] mb-12 reveal"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Let's build
            <br />
            something{" "}
            <span className="italic text-[#C4603A]">together.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Description */}
            <div className="reveal">
              <p className="font-['DM_Sans'] text-[#52504A] leading-[1.85] text-base mb-8 max-w-md">
                I'm always open to conversations about design, technology, research
                collaborations, and new opportunities. Whether you have a project in
                mind or just want to connect — I'd love to hear from you.
              </p>

              {/* Email */}
              <div className="mb-8">
                <p className="mono-label text-[#9B9590] mb-3">Email</p>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:mp2335@cornell.edu"
                    className="font-['DM_Sans'] font-medium text-[#1A1A18] text-lg hover:text-[#C4603A] transition-colors duration-300"
                  >
                    mp2335@cornell.edu
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="font-['DM_Mono'] text-[0.65rem] tracking-[0.08em] uppercase px-3 py-1.5 border border-[#E8E4DC] text-[#9B9590] hover:border-[#C4603A] hover:text-[#C4603A] transition-all duration-300"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="mono-label text-[#9B9590] mb-3">Location</p>
                <p className="font-['DM_Sans'] text-[#1A1A18] text-base">
                  New York City, New York
                  <br />
                  <span className="text-[#9B9590] text-sm">Cornell University</span>
                </p>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="reveal">
              <div className="bg-[#1A1A18] p-10 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4603A]/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                <p className="font-['Playfair_Display'] font-bold text-white text-2xl mb-4 relative z-10">
                  Open to opportunities
                </p>
                <p className="font-['DM_Sans'] text-white/60 text-sm leading-relaxed mb-8 relative z-10">
                  Currently exploring full-time roles and research collaborations in
                  AI product design, UX research, and creative technology.
                </p>

                <div className="space-y-3 mb-10 relative z-10">
                  {[
                    "AI Product Design",
                    "UX / HCI Research",
                    "Creative Technology",
                    "Human-Centered AI",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C4603A]" />
                      <span className="font-['DM_Sans'] text-white/70 text-sm">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:mp2335@cornell.edu"
                  className="group relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-[#C4603A] text-white font-['DM_Mono'] text-xs tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#A84E2E]"
                >
                  Send a Message
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A18] py-10">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-['Playfair_Display'] font-bold text-white text-lg mb-1">
                Mingyuan Pang
              </p>
              <p className="font-['DM_Mono'] text-[0.65rem] tracking-[0.1em] uppercase text-white/30">
                AI Product &amp; Creative Technology Designer
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <p className="font-['DM_Mono'] text-[0.65rem] tracking-[0.08em] uppercase text-white/30">
                Cornell University · M.S. Information Science
              </p>
              <p className="font-['DM_Mono'] text-[0.65rem] tracking-[0.08em] uppercase text-white/20">
                © {new Date().getFullYear()} Mingyuan Pang
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C4603A]" />
              <span className="font-['DM_Mono'] text-[0.6rem] tracking-[0.1em] uppercase text-white/20">
                Designed &amp; built with care
              </span>
            </div>
            <a
              href="mailto:mp2335@cornell.edu"
              className="font-['DM_Mono'] text-[0.65rem] tracking-[0.08em] uppercase text-white/30 hover:text-[#C4603A] transition-colors duration-300"
            >
              mp2335@cornell.edu
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
