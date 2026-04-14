/*
  MailApp — macOS Mail-style contact info viewer
  Left: inbox list
  Right: email content with contact details
*/
import { useState } from "react";

const ACCENT = "#C4603A";
const SIDEBAR_BG = "#F2F2F7";
const CONTENT_BG = "#FFFFFF";

interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  time: string;
  isUnread: boolean;
  content: React.ReactNode;
}

const EMAILS: Email[] = [
  {
    id: "hello",
    from: "庞茗元",
    fromEmail: "mp2335@cornell.edu",
    subject: "一封来自我的信 👋",
    preview: "感谢你来到这里，很高兴认识你...",
    time: "今天",
    isUnread: true,
    content: (
      <div>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          你好，
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          感谢你来到这里，很高兴认识你。
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          我是庞茗元，目前在康奈尔大学攻读信息科学硕士，专注于人机交互与产品设计。
          如果你对我的项目感兴趣，或者想聊聊设计、技术、AI，甚至只是想打个招呼——
          我都非常乐意！
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "20px" }}>
          以下是我的联系方式，期待与你交流。
        </p>

        {/* Contact cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { icon: "✉️", label: "邮件", value: "mp2335@cornell.edu", href: "mailto:mp2335@cornell.edu" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                background: "#F8F6F2",
                borderRadius: "8px",
                border: "1px solid #E8E4DC",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFF3EE";
                (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#F8F6F2";
                (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DC";
              }}
            >
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "#888", marginBottom: "2px" }}>{item.label}</div>
                <div style={{ fontSize: "13px", color: ACCENT, fontWeight: 500 }}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginTop: "20px" }}>
          期待你的来信，
        </p>
        <p style={{ lineHeight: 1.8, color: "#2A2A28", fontWeight: 600 }}>
          庞茗元
        </p>
      </div>
    ),
  },
  {
    id: "collab",
    from: "合作邀请",
    fromEmail: "collaboration@portfolio.com",
    subject: "想一起做点有意思的东西？",
    preview: "我对以下类型的合作感兴趣...",
    time: "昨天",
    isUnread: false,
    content: (
      <div>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          你好，
        </p>
        <p style={{ lineHeight: 1.8, color: "#3A3A38", marginBottom: "14px" }}>
          我对以下类型的合作感兴趣：
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
          {[
            { emoji: "🎨", title: "产品设计合作", desc: "UX 研究、交互设计、原型制作" },
            { emoji: "🤖", title: "AI 产品探索", desc: "将 AI 能力转化为真实用户价值" },
            { emoji: "🎬", title: "创意项目", desc: "AI 生成内容、数字叙事、实验性媒体" },
            { emoji: "💡", title: "实习 / 全职机会", desc: "产品经理、UX 设计师、产品研究员" },
          ].map((item) => (
            <div key={item.title} style={{
              display: "flex", gap: "12px", padding: "10px 14px",
              background: "#F8F6F2", borderRadius: "8px", border: "1px solid #E8E4DC",
            }}>
              <span style={{ fontSize: "18px" }}>{item.emoji}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#2A2A28" }}>{item.title}</div>
                <div style={{ fontSize: "12px", color: "#888" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, color: "#3A3A38" }}>
          如果你有好的想法，欢迎随时联系我！
        </p>
      </div>
    ),
  },
];

export default function MailApp() {
  const [selected, setSelected] = useState<string>("hello");
  const email = EMAILS.find((e) => e.id === selected)!;

  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}>
      {/* ── Left Sidebar (Inbox) ── */}
      <div style={{
        width: "240px",
        flexShrink: 0,
        background: SIDEBAR_BG,
        borderRight: "1px solid #D8D8D8",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}>
        {/* Inbox header */}
        <div style={{
          padding: "12px 14px",
          borderBottom: "1px solid #D8D8D8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#1A1A1A" }}>收件箱</div>
          <div style={{
            fontSize: "11px", color: "#fff", background: ACCENT,
            borderRadius: "10px", padding: "1px 7px", minWidth: "18px", textAlign: "center",
          }}>
            {EMAILS.filter((e) => e.isUnread).length}
          </div>
        </div>

        {/* Email list */}
        {EMAILS.map((e) => {
          const isActive = e.id === selected;
          return (
            <div
              key={e.id}
              onClick={() => setSelected(e.id)}
              style={{
                padding: "12px 14px",
                cursor: "pointer",
                background: isActive ? "#E8E0F0" : "transparent",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                transition: "background 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                <div style={{
                  fontSize: "13px", fontWeight: e.isUnread ? 700 : 400,
                  color: "#1A1A1A",
                }}>
                  {e.from}
                </div>
                <div style={{ fontSize: "11px", color: "#888" }}>{e.time}</div>
              </div>
              <div style={{ fontSize: "12.5px", fontWeight: e.isUnread ? 600 : 400, color: "#2A2A28", marginBottom: "3px" }}>
                {e.subject}
              </div>
              <div style={{ fontSize: "11.5px", color: "#888", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {e.preview}
              </div>
              {e.isUnread && (
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#007AFF", float: "left", marginTop: "-42px", marginLeft: "-8px",
                }}/>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Right Email Content ── */}
      <div style={{ flex: 1, background: CONTENT_BG, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        {/* Email header */}
        <div style={{
          padding: "20px 24px 16px",
          borderBottom: "1px solid #F0F0F0",
          flexShrink: 0,
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
            {email.subject}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Avatar */}
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: `linear-gradient(135deg, ${ACCENT}, #E8845A)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "14px", fontWeight: 700, flexShrink: 0,
            }}>
              {email.from.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A" }}>{email.from}</div>
              <div style={{ fontSize: "11.5px", color: "#888" }}>发件人：{email.fromEmail}</div>
            </div>
            <div style={{ marginLeft: "auto", fontSize: "12px", color: "#AAA" }}>{email.time}</div>
          </div>
        </div>

        {/* Email body */}
        <div style={{ padding: "20px 24px", flex: 1, fontSize: "14px" }}>
          {email.content}
        </div>

        {/* Reply bar */}
        <div style={{
          padding: "12px 24px",
          borderTop: "1px solid #F0F0F0",
          background: "#FAFAFA",
          flexShrink: 0,
        }}>
          <a
            href="mailto:mp2335@cornell.edu"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "13px", color: "#fff", background: ACCENT,
              borderRadius: "6px", padding: "7px 16px", textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ✉️ 回复
          </a>
        </div>
      </div>
    </div>
  );
}
