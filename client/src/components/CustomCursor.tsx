/*
  Custom cursor: small dot that follows the mouse.
  On hoverable elements (a, button, [data-cursor="pointer"]) it expands
  into a terracotta ring, creating a subtle but distinctive interaction cue.
*/
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide the native cursor site-wide
    document.documentElement.style.cursor = "none";

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterInteractive = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "44px";
      ringRef.current.style.height = "44px";
      ringRef.current.style.borderColor = "#C4603A";
      ringRef.current.style.opacity = "0.7";
      ringRef.current.style.backgroundColor = "rgba(196,96,58,0.08)";
    };

    const onMouseLeaveInteractive = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "28px";
      ringRef.current.style.height = "28px";
      ringRef.current.style.borderColor = "rgba(26,26,24,0.35)";
      ringRef.current.style.opacity = "1";
      ringRef.current.style.backgroundColor = "transparent";
    };

    // Attach listeners to all interactive elements
    const attachListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], [data-cursor='pointer']")
        .forEach((el) => {
          el.addEventListener("mouseenter", onMouseEnterInteractive);
          el.addEventListener("mouseleave", onMouseLeaveInteractive);
        });
    };

    attachListeners();

    // Re-attach when DOM changes (e.g. project panels expand)
    const mutationObserver = new MutationObserver(attachListeners);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Smooth ring follow via lerp
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#C4603A",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          border: "1px solid rgba(26,26,24,0.35)",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, opacity 0.25s ease",
        }}
      />
    </>
  );
}
