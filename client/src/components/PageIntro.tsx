/*
  Page Intro Animation
  On first load: full-screen dark overlay shows "MP" initials,
  then slides upward to reveal the site.
  Uses sessionStorage so it only plays once per browser session.
*/
import { useEffect, useState } from "react";

export default function PageIntro() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "exit" | "done">("hidden");

  useEffect(() => {
    // Only play once per session
    const played = sessionStorage.getItem("intro-played");
    if (played) {
      setPhase("done");
      return;
    }

    // Sequence: hidden → visible (fade in) → exit (slide up) → done
    const t1 = setTimeout(() => setPhase("visible"), 50);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("intro-played", "1");
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "#1A1A18",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        // Fade in
        opacity: phase === "visible" || phase === "exit" ? 1 : 0,
        // Slide up on exit
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
        transition:
          phase === "exit"
            ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)"
            : "opacity 0.5s ease",
        pointerEvents: phase === "done" ? "none" : "all",
      }}
    >
      {/* Thin terracotta top bar that grows */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          backgroundColor: "#C4603A",
          width: phase === "visible" || phase === "exit" ? "100%" : "0%",
          transition: "width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* MP initials */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: "clamp(5rem, 18vw, 14rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "rgba(247,245,240,0.92)",
          opacity: phase === "visible" || phase === "exit" ? 1 : 0,
          transform: phase === "visible" || phase === "exit" ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          userSelect: "none",
        }}
      >
        MP
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(155,149,144,0.8)",
          opacity: phase === "visible" || phase === "exit" ? 1 : 0,
          transform: phase === "visible" || phase === "exit" ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          userSelect: "none",
        }}
      >
        Mingyuan Pang · 作品集
      </div>

      {/* Bottom loading bar */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#C4603A",
            width: phase === "visible" || phase === "exit" ? "100%" : "0%",
            transition: "width 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
          }}
        />
      </div>
    </div>
  );
}
