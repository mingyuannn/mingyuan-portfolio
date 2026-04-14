/*
  MacDesktop — macOS-style portfolio desktop
  Route: /desktop
*/
import { useState, useEffect } from "react";
import { WindowManagerProvider, useWindowManager, AppId } from "../contexts/WindowManager";
import DraggableWindow from "../components/mac/DraggableWindow";
import FinderApp from "../components/mac/FinderApp";
import NotesApp from "../components/mac/NotesApp";
import MailApp from "../components/mac/MailApp";
import PreviewApp from "../components/mac/PreviewApp";

// ─── Dock App definitions ────────────────────────────────────────────────────
const DOCK_APPS: { id: AppId; label: string; icon: React.ReactNode }[] = [
  {
    id: "finder",
    label: "Finder",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="60" height="60" rx="13" fill="url(#finderGrad)"/>
        <defs>
          <linearGradient id="finderGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5EB5F7"/>
            <stop offset="1" stopColor="#1A7FD4"/>
          </linearGradient>
        </defs>
        {/* Finder face */}
        <circle cx="22" cy="28" r="5" fill="#fff" opacity="0.9"/>
        <circle cx="38" cy="28" r="5" fill="#fff" opacity="0.9"/>
        <circle cx="23.5" cy="27" r="2" fill="#1A7FD4"/>
        <circle cx="39.5" cy="27" r="2" fill="#1A7FD4"/>
        <path d="M22 36 Q30 42 38 36" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
        <path d="M15 20 Q30 14 45 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: "notes",
    label: "Notes",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="60" height="60" rx="13" fill="url(#notesGrad)"/>
        <defs>
          <linearGradient id="notesGrad" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE066"/>
            <stop offset="1" stopColor="#F5C518"/>
          </linearGradient>
        </defs>
        <rect x="12" y="16" width="36" height="30" rx="3" fill="#fff" opacity="0.95"/>
        <rect x="12" y="16" width="36" height="7" rx="3" fill="#F5C518" opacity="0.7"/>
        <line x1="18" y1="30" x2="42" y2="30" stroke="#C8A800" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="35" x2="36" y2="35" stroke="#C8A800" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="40" x2="30" y2="40" stroke="#C8A800" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "mail",
    label: "Mail",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="60" height="60" rx="13" fill="url(#mailGrad)"/>
        <defs>
          <linearGradient id="mailGrad" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5AC8FA"/>
            <stop offset="1" stopColor="#007AFF"/>
          </linearGradient>
        </defs>
        <rect x="10" y="18" width="40" height="26" rx="4" fill="#fff" opacity="0.95"/>
        <path d="M10 22 L30 34 L50 22" stroke="#007AFF" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "preview",
    label: "Preview",
    icon: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect width="60" height="60" rx="13" fill="url(#previewGrad)"/>
        <defs>
          <linearGradient id="previewGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9F0A"/>
            <stop offset="1" stopColor="#FF6B00"/>
          </linearGradient>
        </defs>
        <rect x="14" y="10" width="24" height="32" rx="3" fill="#fff" opacity="0.95"/>
        <rect x="22" y="18" width="24" height="32" rx="3" fill="#fff" opacity="0.8" stroke="#FF9F0A" strokeWidth="1"/>
        <line x1="26" y1="26" x2="40" y2="26" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="31" x2="40" y2="31" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="36" x2="34" y2="36" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const APP_SIZES: Record<AppId, { width: number; height: number }> = {
  finder:  { width: 860, height: 560 },
  notes:   { width: 680, height: 500 },
  mail:    { width: 760, height: 520 },
  preview: { width: 700, height: 560 },
};

const APP_TITLES: Record<AppId, string> = {
  finder:  "Finder — 项目",
  notes:   "Notes — 关于我",
  mail:    "Mail",
  preview: "Preview — 简历",
};

// ─── Clock ───────────────────────────────────────────────────────────────────
function MenuClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = time.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  const dateFmt = time.toLocaleDateString("zh-CN", { month: "short", day: "numeric", weekday: "short" });
  return (
    <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif", fontSize: "13px", fontWeight: 400, color: "rgba(210, 218, 255, 0.88)", letterSpacing: "0.01em" }}>
      {dateFmt} {fmt}
    </span>
  );
}

// ─── Desktop inner (needs WindowManager context) ─────────────────────────────
function DesktopInner() {
  const { windows, openWindow } = useWindowManager();
  const [hoveredDock, setHoveredDock] = useState<AppId | null>(null);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "url('/wallpaper.jpg') center/cover no-repeat",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }}/>

      {/* ── Top Menu Bar ── */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "36px",
        background: "rgba(12, 14, 28, 0.72)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        borderBottom: "1px solid rgba(120, 140, 200, 0.15)",
        display: "flex", alignItems: "center",
        padding: "0 20px",
        zIndex: 9999,
      }}>
        {/* MP logo */}
        <span style={{
          fontSize: "15px", fontWeight: 700,
          color: "rgba(220, 225, 255, 0.95)",
          marginRight: "24px",
          letterSpacing: "-0.02em",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          cursor: "default",
        }}>
          MP
        </span>

        {/* Menu items — click to open corresponding window */}
        {([
          { label: "关于我", appId: "notes" as AppId },
          { label: "项目",   appId: "finder" as AppId },
          { label: "技能",   appId: "notes" as AppId },
          { label: "联系",   appId: "mail" as AppId },
        ] as { label: string; appId: AppId }[]).map((item) => (
          <span
            key={item.label}
            onClick={() => openWindow(item.appId)}
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(210, 218, 255, 0.88)",
              marginRight: "4px",
              cursor: "default",
              padding: "3px 9px",
              borderRadius: "5px",
              letterSpacing: "0.01em",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
              transition: "background 0.12s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(180, 200, 255, 0.14)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            {item.label}
          </span>
        ))}

        {/* Right side */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "14px" }}>
          <a
            href="/home"
            style={{
              fontSize: "12px",
              color: "rgba(180, 195, 255, 0.75)",
              textDecoration: "none",
              padding: "2px 10px",
              borderRadius: "5px",
              border: "1px solid rgba(140, 160, 255, 0.25)",
              background: "rgba(100, 120, 200, 0.12)",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
              letterSpacing: "0.02em",
              lineHeight: "22px",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(140, 160, 255, 0.22)";
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(210, 220, 255, 0.95)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(100, 120, 200, 0.12)";
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(180, 195, 255, 0.75)";
            }}
          >
            传统版
          </a>

          {/* Wi-Fi icon */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" style={{ opacity: 0.7 }}>
            <path d="M8 10.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="rgba(200,215,255,0.9)"/>
            <path d="M5.2 8.1a4 4 0 0 1 5.6 0" stroke="rgba(200,215,255,0.9)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
            <path d="M2.8 5.7a7 7 0 0 1 10.4 0" stroke="rgba(200,215,255,0.7)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
            <path d="M0.5 3.3A10 10 0 0 1 15.5 3.3" stroke="rgba(200,215,255,0.45)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
          </svg>

          {/* Battery icon */}
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" style={{ opacity: 0.7 }}>
            <rect x="0.5" y="1.5" width="18" height="9" rx="2.5" stroke="rgba(200,215,255,0.8)" strokeWidth="1"/>
            <rect x="2" y="3" width="13" height="6" rx="1.5" fill="rgba(120,220,140,0.9)"/>
            <path d="M19.5 4.5v3a1.5 1.5 0 0 0 0-3z" fill="rgba(200,215,255,0.6)"/>
          </svg>

          <MenuClock />
        </div>
      </div>

      {/* ── Desktop icons (minimized apps) ── */}
      <div style={{ position: "fixed", bottom: "90px", right: "20px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 100 }}>
        {DOCK_APPS.filter((a) => windows[a.id].isOpen && windows[a.id].isMinimized).map((app) => (
          <div
            key={app.id}
            onClick={() => openWindow(app.id)}
            title={`恢复 ${app.label}`}
            style={{
              width: "48px", height: "48px", cursor: "pointer",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
              transition: "transform 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            {app.icon}
          </div>
        ))}
      </div>

      {/* ── Windows ── */}
      {DOCK_APPS.map((app) => (
        <DraggableWindow
          key={app.id}
          id={app.id}
          title={APP_TITLES[app.id]}
          width={APP_SIZES[app.id].width}
          height={APP_SIZES[app.id].height}
        >
          {app.id === "finder"  && <FinderApp />}
          {app.id === "notes"   && <NotesApp />}
          {app.id === "mail"    && <MailApp />}
          {app.id === "preview" && <PreviewApp />}
        </DraggableWindow>
      ))}

      {/* ── Dock ── */}
      <div style={{
        position: "fixed", bottom: "12px", left: "50%", transform: "translateX(-50%)",
        display: "flex", alignItems: "flex-end", gap: "10px",
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "18px",
        padding: "8px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
        zIndex: 9998,
      }}>
        {DOCK_APPS.map((app) => {
          const isOpen = windows[app.id].isOpen;
          const isHovered = hoveredDock === app.id;
          const size = isHovered ? 62 : 52;
          return (
            <div
              key={app.id}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", position: "relative" }}
              onMouseEnter={() => setHoveredDock(app.id)}
              onMouseLeave={() => setHoveredDock(null)}
            >
              {/* Tooltip */}
              {isHovered && (
                <div style={{
                  position: "absolute", bottom: "calc(100% + 8px)",
                  background: "rgba(30,30,30,0.85)", color: "#fff",
                  fontSize: "11px", padding: "3px 8px", borderRadius: "5px",
                  whiteSpace: "nowrap", pointerEvents: "none",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                }}>
                  {app.label}
                </div>
              )}
              {/* Icon */}
              <div
                onClick={() => openWindow(app.id)}
                style={{
                  width: size, height: size,
                  transition: "width 0.15s ease, height 0.15s ease",
                  cursor: "pointer",
                  filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
                }}
              >
                {app.icon}
              </div>
              {/* Open indicator dot */}
              <div style={{
                width: "4px", height: "4px", borderRadius: "50%",
                background: isOpen ? "rgba(255,255,255,0.8)" : "transparent",
                transition: "background 0.2s",
              }}/>
            </div>
          );
        })}

        {/* ── Dock Separator ── */}
        <div style={{
          width: "1px",
          height: "42px",
          background: "rgba(255,255,255,0.25)",
          margin: "0 4px 8px",
          alignSelf: "flex-end",
          flexShrink: 0,
        }} />

        {/* ── Traditional version shortcut ── */}
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", position: "relative" }}
          onMouseEnter={() => setHoveredDock("__home__" as AppId)}
          onMouseLeave={() => setHoveredDock(null)}
        >
          {hoveredDock === ("__home__" as AppId) && (
            <div style={{
              position: "absolute", bottom: "calc(100% + 8px)",
              background: "rgba(30,30,30,0.85)", color: "#fff",
              fontSize: "11px", padding: "3px 8px", borderRadius: "5px",
              whiteSpace: "nowrap", pointerEvents: "none",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
            }}>
              传统版
            </div>
          )}
          <a
            href="/home"
            style={{
              width: hoveredDock === ("__home__" as AppId) ? 62 : 52,
              height: hoveredDock === ("__home__" as AppId) ? 62 : 52,
              transition: "width 0.15s ease, height 0.15s ease",
              cursor: "pointer",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
              display: "block",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="60" height="60" rx="13" fill="url(#safariGrad)"/>
              <defs>
                <linearGradient id="safariGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34C8E8"/>
                  <stop offset="1" stopColor="#0A84FF"/>
                </linearGradient>
              </defs>
              {/* Compass circle */}
              <circle cx="30" cy="30" r="16" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none"/>
              {/* Compass needle N */}
              <polygon points="30,16 27,30 30,28 33,30" fill="#FF3B30"/>
              {/* Compass needle S */}
              <polygon points="30,44 27,30 30,32 33,30" fill="rgba(255,255,255,0.85)"/>
              {/* Center dot */}
              <circle cx="30" cy="30" r="2" fill="#fff"/>
            </svg>
          </a>
          {/* No dot for home link */}
          <div style={{ width: "4px", height: "4px" }} />
        </div>
      </div>
    </div>
  );
}

// ─── MacDesktop (wraps with WindowManager provider) ──────────────────────────
export default function MacDesktop() {
  return (
    <WindowManagerProvider>
      <DesktopInner />
    </WindowManagerProvider>
  );
}
