/*
  NotesApp — macOS Notes-style About Me viewer
  Left: list of note topics
  Right: note content with warm yellow background
*/
import { useState } from "react";

const NOTES_BG = "#FAF3D0";
const NOTES_LINE = "#E8D88A";
const SIDEBAR_BG = "#F5EDB0";
const ACCENT = "#C4603A";

interface Note {
  id: string;
  title: string;
  preview: string;
  content: React.ReactNode;
}

const NOTES: Note[] = [
  {
    id: "intro",
    title: "👋 自我介绍",
    preview: "嗨，我是庞茗元...",
    content: (
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#2A2A28", marginBottom: "12px" }}>
          嗨，我是庞茗元 👋
        </h2>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          我是一名就读于康奈尔大学信息科学硕士项目的学生，专注于人机交互（HCI）和产品设计方向。
          我热衷于探索技术与人之间的关系——如何让复杂的系统变得直观、有温度、真正有用。
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          在加入康奈尔之前，我在纽约大学完成了本科学业，主修媒体、文化与传播。
          这段跨学科的学习经历让我在产品思维之外，还保有对叙事、视觉美学和创意表达的持续热情。
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38" }}>
          我相信好的设计不只是"好看"——它是在正确的时刻，以正确的方式，传递正确的信息。
        </p>
      </div>
    ),
  },
  {
    id: "education",
    title: "🎓 教育经历",
    preview: "康奈尔大学 信息科学硕士...",
    content: (
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#2A2A28", marginBottom: "16px" }}>
          教育经历 🎓
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#2A2A28" }}>康奈尔大学工学院</div>
          <div style={{ fontSize: "13px", color: ACCENT, marginBottom: "4px" }}>信息科学硕士 · 人机交互方向</div>
          <div style={{ fontSize: "12px", color: "#888" }}>2025 — 2027 · 纽约</div>
          <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, marginTop: "8px" }}>
            核心课程涵盖用户体验研究、交互设计、信息架构与产品管理。
            参与多个跨学科项目，将技术实现与以人为中心的设计方法相结合。
          </p>
        </div>
        <div style={{ borderTop: "1px solid #E8D88A", paddingTop: "16px" }}>
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#2A2A28" }}>纽约大学</div>
          <div style={{ fontSize: "13px", color: ACCENT, marginBottom: "4px" }}>媒体、文化与传播学士</div>
          <div style={{ fontSize: "12px", color: "#888" }}>2021 — 2025 · 纽约</div>
          <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, marginTop: "8px" }}>
            系统学习媒体理论、视觉传播与数字叙事。培养了对视觉美学与用户体验的深层理解，
            并在纽约多元的文化环境中拓宽了全球化视野。
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "skills",
    title: "🛠 技能清单",
    preview: "设计工具、编程语言...",
    content: (
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#2A2A28", marginBottom: "16px" }}>
          技能清单 🛠
        </h2>
        {[
          {
            category: "设计工具",
            items: ["Figma", "MasterGo", "Adobe Premiere Pro", "Midjourney", "Runway"],
          },
          {
            category: "开发技能",
            items: ["React / TypeScript", "HTML / CSS / JavaScript", "Node.js", "Python", "Git"],
          },
          {
            category: "研究方法",
            items: ["用户访谈", "可用性测试", "竞品分析", "信息架构", "原型设计"],
          },
          {
            category: "AI 工具",
            items: ["ChatGPT / Claude", "DeepSeek API", "Midjourney v6", "Runway Gen-2"],
          },
        ].map((group) => (
          <div key={group.category} style={{ marginBottom: "16px" }}>
            <div style={{
              fontSize: "11px", fontWeight: 700, color: ACCENT,
              textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px",
            }}>
              {group.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {group.items.map((item) => (
                <span key={item} style={{
                  fontSize: "12px", color: "#3A3A38",
                  background: "rgba(196,96,58,0.1)", border: "1px solid rgba(196,96,58,0.25)",
                  borderRadius: "12px", padding: "3px 10px",
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "interests",
    title: "✨ 兴趣爱好",
    preview: "电影、城市漫步、咖啡...",
    content: (
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#2A2A28", marginBottom: "16px" }}>
          兴趣爱好 ✨
        </h2>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          我热爱电影，尤其是那些在视觉语言上有独特表达的作品——侯孝贤的长镜头、
          韦斯·安德森的对称美学，都让我着迷。这也是为什么我会做 CineRoute 这个项目：
          把电影取景地变成可以实地探访的旅行路线。
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          我喜欢在城市里漫步，观察人与空间的关系。纽约的地铁、北京的胡同、
          上海的弄堂——每个城市都有自己独特的叙事逻辑，等待被发现。
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          咖啡是我的日常仪式。我会为了一杯好咖啡走很远的路，
          顺便观察那家咖啡馆的空间设计和用户体验。
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38" }}>
          我也在学习摄影，试图用镜头捕捉那些转瞬即逝的光线和情绪。
          好的照片和好的设计一样——都是关于如何在有限的空间里，讲一个完整的故事。
        </p>
      </div>
    ),
  },
];

export default function NotesApp() {
  const [selected, setSelected] = useState<string>("intro");
  const note = NOTES.find((n) => n.id === selected)!;

  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}>
      {/* ── Left Sidebar ── */}
      <div style={{
        width: "200px",
        flexShrink: 0,
        background: SIDEBAR_BG,
        borderRight: "1px solid #D8C870",
        overflowY: "auto",
      }}>
        <div style={{ padding: "12px 14px 8px", fontSize: "11px", fontWeight: 600, color: "#A08020", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          笔记
        </div>
        {NOTES.map((n) => {
          const isActive = n.id === selected;
          return (
            <div
              key={n.id}
              onClick={() => setSelected(n.id)}
              style={{
                padding: "10px 14px",
                cursor: "pointer",
                background: isActive ? "rgba(196,96,58,0.15)" : "transparent",
                borderLeft: isActive ? `3px solid ${ACCENT}` : "3px solid transparent",
                transition: "all 0.15s",
              }}
            >
              <div style={{ fontSize: "13px", fontWeight: isActive ? 600 : 400, color: "#2A2A28", marginBottom: "3px" }}>
                {n.title}
              </div>
              <div style={{ fontSize: "11px", color: "#888", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {n.preview}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Right Note Content ── */}
      <div style={{
        flex: 1,
        background: NOTES_BG,
        overflowY: "auto",
        position: "relative",
      }}>
        {/* Ruled lines background */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(transparent, transparent 27px, ${NOTES_LINE} 28px)`,
          backgroundPositionY: "48px",
          opacity: 0.5,
        }}/>

        {/* Red margin line */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: "48px",
          width: "1px", background: "rgba(196,96,58,0.3)",
          pointerEvents: "none",
        }}/>

        {/* Content */}
        <div style={{ position: "relative", padding: "24px 28px 24px 64px", lineHeight: "28px" }}>
          {note.content}
        </div>
      </div>
    </div>
  );
}
