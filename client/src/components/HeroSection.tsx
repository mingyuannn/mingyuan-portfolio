/*
  Design: Editorial Minimalism meets Japanese Wabi-Sabi — Hero Section
  Full-viewport hero with animated text reveal, editorial asymmetric layout,
  terracotta accent, background texture image (right side)
*/
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409787492/7mPcQcem2UYFzT3RtPotqe/hero-bg-4WzmcTnCLEkWn9mg33amP7.webp";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll(".animate-in");
    elements?.forEach((el, i) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(28px)";
      setTimeout(() => {
        elem.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0)";
      }, 150 + i * 140);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#F7F5F0]"
    >
      {/* Right-side background image */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.35,
          maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
        }}
      />
      {/* Subtle warm overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, #F7F5F0 50%, rgba(247,245,240,0.85) 70%, rgba(240,235,227,0.6) 100%)",
        }}
      />

      {/* Decorative "MP" watermark */}
      <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(8rem, 22vw, 22rem)",
            lineHeight: 0.85,
            color: "rgba(26,26,24,0.04)",
            letterSpacing: "-0.04em",
            display: "block",
          }}
        >
          MP
        </span>
      </div>

      {/* Thin vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C4603A]/30 to-transparent" />

      {/* Main content */}
      <div ref={contentRef} className="container relative z-10 flex flex-col justify-end flex-1 pb-20 pt-36">
        <div className="max-w-3xl">
          {/* Meta label */}
          <div className="animate-in flex items-center gap-4 mb-10">
            <div className="w-10 h-0.5 bg-[#C4603A]" />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9B9590",
              }}
            >
              Cornell University &nbsp;·&nbsp; Information Science &nbsp;·&nbsp; HCI
            </span>
          </div>

          {/* Main name */}
          <h1
            className="animate-in"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#1A1A18",
              marginBottom: "1rem",
            }}
          >
            Mingyuan
            <br />
            <span style={{ fontStyle: "italic", color: "#C4603A" }}>Pang.</span>
          </h1>

          {/* Title */}
          <p
            className="animate-in"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
              letterSpacing: "-0.01em",
              color: "#1A1A18",
              marginBottom: "1.75rem",
            }}
          >
            AI Product &amp; Creative Technology Designer
          </p>

          {/* Thin divider */}
          <div className="animate-in w-full h-px bg-[#E8E4DC] mb-7" />

          {/* Description */}
          <p
            className="animate-in"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              lineHeight: 1.85,
              color: "#52504A",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            I explore how artificial intelligence can enhance storytelling,
            accessibility, and urban experiences through thoughtful product design.
          </p>

          {/* CTA buttons */}
          <div className="animate-in flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 px-8 py-4 bg-[#1A1A18] text-[#F7F5F0] transition-all duration-300 hover:bg-[#C4603A]"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 px-8 py-4 border border-[#1A1A18] text-[#1A1A18] transition-all duration-300 hover:border-[#C4603A] hover:text-[#C4603A]"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              About Me
            </button>
          </div>
        </div>

        {/* Scroll indicator — bottom right */}
        <div
          className="animate-in absolute bottom-8 right-8 flex flex-col items-center gap-3"
          style={{ opacity: 0.45 }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#9B9590",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, #9B9590, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
