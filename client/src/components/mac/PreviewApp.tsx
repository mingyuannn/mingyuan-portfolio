/*
  PreviewApp — macOS Preview-style PDF resume viewer
  Embeds /resume.pdf in an iframe with toolbar
*/

const ACCENT = "#C4603A";

export default function PreviewApp() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "#3C3C3C",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
    }}>
      {/* Toolbar */}
      <div style={{
        height: "40px",
        background: "#4A4A4A",
        borderBottom: "1px solid #2A2A2A",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: "10px",
        flexShrink: 0,
      }}>
        {/* Page controls */}
        <button style={{
          fontSize: "16px", background: "transparent", border: "none",
          color: "#CCC", cursor: "pointer", padding: "2px 6px",
        }}>‹</button>
        <button style={{
          fontSize: "16px", background: "transparent", border: "none",
          color: "#CCC", cursor: "pointer", padding: "2px 6px",
        }}>›</button>

        <div style={{ width: "1px", height: "20px", background: "#666" }}/>

        {/* Zoom controls */}
        <button style={{
          fontSize: "13px", background: "rgba(255,255,255,0.1)", border: "none",
          color: "#DDD", cursor: "pointer", padding: "3px 8px", borderRadius: "4px",
        }}>−</button>
        <span style={{ fontSize: "12px", color: "#CCC", minWidth: "40px", textAlign: "center" }}>100%</span>
        <button style={{
          fontSize: "13px", background: "rgba(255,255,255,0.1)", border: "none",
          color: "#DDD", cursor: "pointer", padding: "3px 8px", borderRadius: "4px",
        }}>+</button>

        <div style={{ flex: 1 }}/>

        {/* File name */}
        <span style={{ fontSize: "12px", color: "#AAA" }}>庞茗元_简历.pdf</span>

        <div style={{ width: "1px", height: "20px", background: "#666" }}/>

        {/* Download button */}
        <a
          href="/resume.pdf"
          download="庞茗元_简历.pdf"
          style={{
            fontSize: "12px", color: "#fff", background: ACCENT,
            borderRadius: "5px", padding: "4px 10px", textDecoration: "none",
            fontWeight: 500,
          }}
        >
          ↓ 下载
        </a>
      </div>

      {/* PDF viewer */}
      <div style={{ flex: 1, overflow: "hidden", background: "#525252", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
