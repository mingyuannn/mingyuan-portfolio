/*
  BootScreen — macOS-style boot animation
  Sequence:
    0-600ms   : black screen
    600-1400ms: Apple logo fades in
    1400-3200ms: progress bar fills (with slight random pauses like real macOS)
    3200-3800ms: screen fades out → desktop appears
*/
import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

// Apple logo SVG path (official apple silhouette)
const APPLE_PATH =
  "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z";

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [phase, setPhase] = useState<"black" | "logo" | "progress" | "fadeout">("black");
  const [progress, setProgress] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [screenOpacity, setScreenOpacity] = useState(1);

  useEffect(() => {
    // Phase 1: black → logo fade in
    const t1 = setTimeout(() => {
      setPhase("logo");
      // Fade in logo over 600ms
      let op = 0;
      const logoInterval = setInterval(() => {
        op += 0.05;
        setLogoOpacity(Math.min(op, 1));
        if (op >= 1) clearInterval(logoInterval);
      }, 30);
    }, 600);

    // Phase 2: start progress bar
    const t2 = setTimeout(() => {
      setPhase("progress");

      // Simulate macOS-style progress: fast start, brief pauses, then finish
      const steps = [
        { target: 15, duration: 200 },
        { target: 30, duration: 300 },
        { target: 45, duration: 180 },
        { target: 55, duration: 400 }, // slight pause
        { target: 70, duration: 250 },
        { target: 82, duration: 200 },
        { target: 90, duration: 350 }, // another pause
        { target: 100, duration: 250 },
      ];

      let currentStep = 0;
      let currentProgress = 0;
      let elapsed = 0;

      const runStep = () => {
        if (currentStep >= steps.length) return;
        const step = steps[currentStep];
        const startVal = currentProgress;
        const endVal = step.target;
        const stepDuration = step.duration;
        const startTime = Date.now();

        const animate = () => {
          const now = Date.now();
          const t = Math.min((now - startTime) / stepDuration, 1);
          // ease-out
          const eased = 1 - Math.pow(1 - t, 2);
          const val = startVal + (endVal - startVal) * eased;
          setProgress(val);
          if (t < 1) {
            requestAnimationFrame(animate);
          } else {
            currentProgress = endVal;
            elapsed += stepDuration;
            currentStep++;
            if (currentStep < steps.length) {
              // small random pause between steps (0-80ms)
              setTimeout(runStep, Math.random() * 80);
            }
          }
        };
        requestAnimationFrame(animate);
      };

      runStep();
    }, 1400);

    // Phase 3: fade out screen
    const t3 = setTimeout(() => {
      setPhase("fadeout");
      let op = 1;
      const fadeInterval = setInterval(() => {
        op -= 0.04;
        setScreenOpacity(Math.max(op, 0));
        if (op <= 0) {
          clearInterval(fadeInterval);
          onComplete();
        }
      }, 20);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        opacity: screenOpacity,
        transition: phase === "fadeout" ? "none" : undefined,
      }}
    >
      {/* Apple Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transition: "opacity 0.1s",
          marginBottom: "52px",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="72"
          height="72"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={APPLE_PATH} />
        </svg>
      </div>

      {/* Progress bar — only shown during progress phase */}
      <div
        style={{
          opacity: phase === "progress" || phase === "fadeout" ? 1 : 0,
          transition: "opacity 0.3s",
          width: "200px",
        }}
      >
        {/* Track */}
        <div
          style={{
            width: "100%",
            height: "4px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {/* Fill */}
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "rgba(255,255,255,0.85)",
              borderRadius: "2px",
              transition: "width 0.05s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
