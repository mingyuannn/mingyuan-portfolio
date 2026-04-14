/*
  FinderApp — macOS Finder-style project browser
  Left sidebar: project list as folders
  Right panel: project details preview
*/
import { useState } from "react";
import { projects } from "../../data/projectsData";

const SIDEBAR_BG = "#F0EEE8";
const CONTENT_BG = "#FAFAF8";
const ACCENT = "#C4603A";

export default function FinderApp() {
  const [selected, setSelected] = useState<string>(projects[0].id);
  const project = projects.find((p) => p.id === selected)!;

  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}>
      {/* ── Left Sidebar ── */}
      <div style={{
        width: "200px",
        flexShrink: 0,
        background: SIDEBAR_BG,
        borderRight: "1px solid #D8D4CC",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}>
        {/* Sidebar header */}
        <div style={{
          padding: "12px 14px 8px",
          fontSize: "11px",
          fontWeight: 600,
          color: "#888",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}>
          项目文件夹
        </div>

        {/* Project list */}
        {projects.map((p) => {
          const isActive = p.id === selected;
          return (
            <div
              key={p.id}
              onClick={() => setSelected(p.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                cursor: "pointer",
                background: isActive ? ACCENT : "transparent",
                borderRadius: "6px",
                margin: "1px 6px",
                transition: "background 0.15s",
              }}
            >
              {/* Folder icon */}
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path
                  d="M0 3C0 1.9 0.9 1 2 1H6.5L8 3H16C17.1 3 18 3.9 18 5V13C18 14.1 17.1 15 16 15H2C0.9 15 0 14.1 0 13V3Z"
                  fill={isActive ? "rgba(255,255,255,0.7)" : "#F5C518"}
                />
                <path
                  d="M0 5H18V13C18 14.1 17.1 15 16 15H2C0.9 15 0 14.1 0 13V5Z"
                  fill={isActive ? "rgba(255,255,255,0.9)" : "#FFD966"}
                />
              </svg>
              <div>
                <div style={{
                  fontSize: "12.5px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#fff" : "#2A2A28",
                  lineHeight: 1.3,
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontSize: "10.5px",
                  color: isActive ? "rgba(255,255,255,0.75)" : "#888",
                }}>
                  {p.subtitle}
                </div>
              </div>
            </div>
          );
        })}

        {/* Divider */}
        <div style={{ borderTop: "1px solid #D8D4CC", margin: "8px 0" }} />

        {/* Tags section */}
        <div style={{ padding: "4px 14px 8px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
            标签
          </div>
          {["AI · 叙事", "UX 设计", "Vibe Coding", "产品设计"].map((tag) => (
            <div key={tag} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "3px 0", fontSize: "12px", color: "#555" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: ACCENT, opacity: 0.6 }} />
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Content Panel ── */}
      <div style={{ flex: 1, background: CONTENT_BG, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        {/* Toolbar */}
        <div style={{
          height: "38px",
          borderBottom: "1px solid #E0DDD8",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: "8px",
          background: "#F5F3EE",
          flexShrink: 0,
        }}>
          <button style={{
            fontSize: "11px", color: "#555", background: "rgba(0,0,0,0.06)",
            border: "none", borderRadius: "4px", padding: "3px 8px", cursor: "pointer",
          }}>
            ← 返回
          </button>
          <div style={{ flex: 1, textAlign: "center", fontSize: "12px", color: "#888" }}>
            {project.category}
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} style={{
                fontSize: "10px", color: ACCENT, border: `1px solid ${ACCENT}`,
                borderRadius: "10px", padding: "1px 7px",
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Cover image */}
        <div style={{ width: "100%", height: "180px", overflow: "hidden", flexShrink: 0 }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Project info */}
        <div style={{ padding: "20px 24px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px" }}>
            <div>
              <div style={{ fontSize: "10px", color: "#AAA", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                {project.number}
              </div>
              <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#2A2A28", margin: 0, lineHeight: 1.2 }}>
                {project.title}
              </h2>
              <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>{project.subtitle}</div>
            </div>
            {/* Action links */}
            <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
              {project.videoUrl && (
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "11px", color: "#fff", background: ACCENT,
                  borderRadius: "5px", padding: "4px 10px", textDecoration: "none",
                }}>
                  ▶ 视频
                </a>
              )}
              {project.figmaUrl && (
                <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "11px", color: ACCENT, border: `1px solid ${ACCENT}`,
                  borderRadius: "5px", padding: "4px 10px", textDecoration: "none",
                }}>
                  Figma
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "11px", color: ACCENT, border: `1px solid ${ACCENT}`,
                  borderRadius: "5px", padding: "4px 10px", textDecoration: "none",
                }}>
                  访问
                </a>
              )}
            </div>
          </div>

          {/* Summary */}
          <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, margin: "12px 0 20px" }}>
            {project.summary}
          </p>

          {/* Details */}
          {project.details.map((d, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <div style={{
                fontSize: "11px", fontWeight: 700, color: ACCENT,
                textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px",
              }}>
                {d.heading}
              </div>
              {Array.isArray(d.content) ? (
                <ul style={{ margin: 0, paddingLeft: "16px" }}>
                  {d.content.map((c, j) => (
                    <li key={j} style={{ fontSize: "12.5px", color: "#444", lineHeight: 1.65, marginBottom: "4px" }}>
                      {c}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: "12.5px", color: "#444", lineHeight: 1.65, margin: 0 }}>
                  {d.content}
                </p>
              )}
              {d.pdfAttachments && (
                <div style={{ marginTop: "8px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {d.pdfAttachments.map((pdf) => (
                    <a key={pdf.url} href={pdf.url} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: "11px", color: "#fff", background: "#888",
                      borderRadius: "4px", padding: "3px 8px", textDecoration: "none",
                    }}>
                      📄 {pdf.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
