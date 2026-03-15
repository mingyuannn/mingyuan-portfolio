/*
  Design: Editorial Minimalism — Projects Section
  Large project cards with image, editorial layout, tabbed detail panels
  Terracotta accent, section number watermark
*/
import { useState, useEffect, useRef } from "react";

const DAYU_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663409787492/icMMOoDLKrLYXtbJ.jpg?Expires=1804358120&Signature=E7TcgKCXnshOWjDZ5wa3u6hPSd5mtUG9w2V6ItOhWjeHT7CytHO1Fg1j~B3BMvk90OKhRMgn2pIYummhVFo-4IerdOJKLinveSjLhM4zcCgfqde8npB7exffP-FYyvnhrXKYHQ5EghcJ5YY8Uo8bh5rdB37v-VCd6VltHh86KTe8tzAWsytydBBvB~7OpNoiQjUrn1nQEbSMYVOGCdmzvlAC43yEBIop1O2FLrCWhQ5IE2Esggw5J~x92-ovhS31rdlwqTuzSf5A8WsO6YU-nGGGyFyQQMqLg6kTLUNAC~ZXKEN7X0AUX3wDEQHtJc0JsiFa3j0HCcL8u6VX4fNsiw__&Key-Pair-Id=K2HSFNDJXOU9YS";
const AR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409787492/7mPcQcem2UYFzT3RtPotqe/project-ar-glasses-YRV9yH3xbmHv354X6ZLB9t.webp";
const SUBWAY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409787492/7mPcQcem2UYFzT3RtPotqe/project-subway-kGsaGMdF3bSKKVmVbWvXxz.webp";

interface ProjectDetail {
  heading: string;
  content: string | string[];
  pdfAttachments?: { label: string; url: string }[];
}

interface TabGroup {
  label: string;
  sections: ProjectDetail[];
}

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  summary: string;
  videoUrl?: string;
  figmaUrl?: string;
  infoCards: { label: string; value: string }[];
  tabs: TabGroup[];
}

const projects: Project[] = [
  {
    id: "dayu",
    number: "01",
    title: "Dayu Controls the Flood",
    subtitle: "AI Short Film",
    category: "AI · Storytelling · Generative Media",
    tags: ["Midjourney", "Premiere Pro", "AI Storytelling"],
    image: DAYU_IMG,
    videoUrl: "https://www.bilibili.com/video/BV1bU411d7vK/",
    summary:
      "An experimental AI-generated short film reinterpreting the Chinese myth 'Dayu Controls the Flood.' The project explores how generative AI tools can assist in visual storytelling and narrative design.",
    infoCards: [
      { label: "Type", value: "AI Short Film" },
      { label: "Medium", value: "Generative Video" },
      { label: "Tools", value: "Midjourney · Runway · Premiere" },
      { label: "Duration", value: "~5 minutes" },
    ],
    tabs: [
      {
        label: "Overview",
        sections: [
          {
            heading: "Project Overview",
            content:
              "This experimental short film reimagines one of China's most enduring myths — the story of Dayu, the legendary figure who tamed catastrophic floods through perseverance, engineering, and collective knowledge. Rather than presenting the myth as a traditional historical narrative, the film reconstructs it through a speculative visual world that blends ancient cosmology, environmental struggle, and exploration.",
          },
          {
            heading: "Story Structure",
            content: [
              "Act I — The Deep Call: Establishing the ritual of the 'Deep Sea Gift' and the bond between mentor and apprentice in a world of maritime peril.",
              "Act II — The Discovery: The recovery of the mysterious giant egg, sparking a conflict between scientific curiosity and the looming threat of the unknown.",
              "Act III — The Intrusion: The boundary between the mythic ocean and global reality thins as political chaos and 'fake news' distort the mission's purpose.",
            ],
          },
        ],
      },
      {
        label: "Process",
        sections: [
          {
            heading: "Creative Process",
            content:
              "The production workflow began with a detailed narrative script, followed by storyboarding using Midjourney to generate keyframe concepts. Each scene was iterated through multiple prompt variations to achieve stylistic consistency — a blend of traditional Chinese ink painting aesthetics with cinematic AI imagery. Motion sequences were generated and extended using Runway's Gen-2 model, then assembled and color-graded in Premiere Pro.",
          },
          {
            heading: "AI Tools Used",
            content: [
              "Midjourney v6 — Visual concept generation, keyframe illustration, style consistency",
              "Runway Gen-2 — Motion generation and scene extension",
              "Adobe Premiere Pro — Final edit, color grading, audio synchronization",
            ],
          },
        ],
      },
      {
        label: "Reflection",
        sections: [
          {
            heading: "Key Reflections",
            content:
              "The project revealed both the extraordinary potential and the inherent limitations of AI as a storytelling medium. Generative tools excel at producing evocative imagery but require significant human curation to maintain narrative coherence. The most successful sequences emerged from a dialogue between human creative intent and machine interpretation.",
          },
        ],
      },
    ],
  },
  {
    id: "ar-glasses",
    number: "02",
    title: "AR Smart Glasses for Accessible Communication",
    subtitle: "Product Design · Accessibility",
    category: "UX Design · AR · Accessibility",
    tags: ["Figma", "AR Design", "Accessibility", "HCI", "User Research"],
    image: AR_IMG,
    figmaUrl:
      "https://www.figma.com/design/c1eWMiGvEb4mGvNKIipsMO/SignBridge-Duo?node-id=2029-194&t=12jiwQPy3RzOWFAj-1",
    videoUrl:
      "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663409787492/FepmhXmgiSgBpmVC.mov?Expires=1804362333&Signature=czjh9gLDj4tX5-XxYAcLmx7Zz9IkCA35RJaeN6ChyoCXyfl~JhUEVE2Ij~uvIIx2ZoFyfxDz9odPsqhX5WUKDMefVCw5eONTiXnx6kAhMS8HknJANnPY9ghwD5h1bYSWsG4MaF5ZhyqxZopVric6KW4qeK1kHC36KqDTqwun1bOHV-URuz5Q3~ZDfmFd-75kePR7ONKr0Azs40LUtpYoYLTXp7QO9e4jXtmxBI7xzJr8T-AVVVugNYvU--15U~4tzYRCEf3a4SJaARVjMpJrnmjyKB7AOhIUQNL2tNUXadqnUPA06cJVfe~-yOX9tIS-JMbamu-lwqgtfLEBaGX9Bg__&Key-Pair-Id=K2HSFNDJXOU9YS",
    summary:
      "A product design project focused on improving real-time communication for hearing-impaired users through AR smart glasses with live transcription and gesture interaction.",
    infoCards: [
      { label: "Category", value: "UX Design · AR · Accessibility" },
      { label: "Tools", value: "Figma · User Research · HCI" },
      { label: "Primary Users", value: "Deaf & Hard-of-Hearing" },
      { label: "Deliverable", value: "Interactive Figma Prototype" },
    ],
    tabs: [
      {
        label: "Overview",
        sections: [
          {
            heading: "Problem Definition",
            content:
              "Deaf and hard-of-hearing individuals face persistent communication barriers when interacting with hearing people in everyday environments such as workplaces, classrooms, and public services. Existing assistive technologies also tend to focus on one-directional accessibility. This project explores whether AR-assisted tools can enable seamless, bidirectional interaction without requiring interpreters or specialized environments.",
          },
          {
            heading: "Product Concept",
            content:
              "AR Glasses is a pair of lightweight AR smart glasses designed to bridge communication between sign language users and spoken language users in real time. The system combines speech recognition, sign language recognition, and AR subtitle display — connecting to a companion smartphone app that processes AI models and manages system settings.",
          },
        ],
      },
      {
        label: "Features",
        sections: [
          {
            heading: "Key Features",
            content: [
              "Bidirectional communication — Speech → real-time subtitles in AR view; Sign language → text or synthesized speech",
              "Contextual subtitle placement — Captions positioned near the speaker's face, reducing gaze shifting",
              "Speaker identification — Color-coded subtitles distinguish multiple speakers in group conversations",
              "Hands-free interaction — Gesture controls to replay, pause, or adjust settings without a phone",
              "Environmental awareness — Visual indicators for alarms, doorbells, or approaching vehicles",
            ],
          },
        ],
      },
      {
        label: "Process",
        sections: [
          {
            heading: "User Scenario",
            content:
              "Sarah, 28, is attending a team meeting. As colleagues speak, their words appear as floating subtitles in her AR view, positioned near each speaker's face. When her manager asks a question, Sarah uses a subtle pinch gesture to replay the last sentence. Color-coded subtitles make multi-person conversations easy to follow.",
          },
          {
            heading: "Figma Prototype Flows",
            content: [
              "Initial setup & calibration — pairing the glasses with the mobile app and configuring subtitle preferences",
              "Real-time conversation mode — displaying subtitles and sign translations during live interactions",
              "Settings & accessibility customization — adjusting text size, subtitle placement, and notification preferences",
            ],
          },
          {
            heading: "Process Documentation",
            content:
              "Full design process documentation including low-fidelity prototype exploration and updated vertical prototype with new features.",
            pdfAttachments: [
              { label: "HW4 — Developing Low-Fidelity Prototypes", url: "/HW4.pdf" },
              { label: "HW5 — Updated Vertical Prototype (SignBridge Duo)", url: "/HW5.pdf" },
            ],
          },
        ],
      },
      {
        label: "Reflection",
        sections: [
          {
            heading: "Design Reflection",
            content:
              "This project reinforced the importance of designing for dignity alongside functionality. Early prototypes prioritized technical capability but felt clinical and othering. Subsequent iterations focused on making the glasses visually indistinguishable from regular eyewear — respecting the user's desire to participate in social situations without drawing attention to their assistive technology.",
          },
        ],
      },
    ],
  },
  {
    id: "subwaypose",
    number: "03",
    title: "SubwayPose",
    subtitle: "Urban Safety · Product Concept",
    category: "Product Design · Urban Tech · User Research",
    tags: ["User Research", "Figma", "MasterGo", "Urban Design", "Safety"],
    image: SUBWAY_IMG,
    summary:
      "A concept product designed to improve safety awareness and information clarity in the NYC subway system, grounded in user interviews and commuter research.",
    infoCards: [
      { label: "Category", value: "Product Design · Urban Tech" },
      { label: "Tools", value: "Figma · MasterGo · User Research" },
      { label: "Research", value: "12 In-depth Interviews" },
      { label: "Context", value: "NYC Subway System" },
    ],
    tabs: [
      {
        label: "Overview",
        sections: [
          {
            heading: "Research Background",
            content:
              "New York City's subway system carries over 3.5 million passengers daily, yet remains plagued by unclear announcements, unpredictable service disruptions, and persistent safety anxieties — particularly for new residents, tourists, and vulnerable populations. This project began with a question: why does one of the world's most extensive transit systems still feel so opaque to its users?",
          },
          {
            heading: "Product Concept",
            content:
              "SubwayPose is a mobile application and platform screen door integration that provides commuters with real-time, contextual safety and service information. The name references the act of positioning oneself safely on a platform — a small but significant moment of urban navigation that the product aims to support.",
          },
        ],
      },
      {
        label: "Research",
        sections: [
          {
            heading: "User Interviews & Insights",
            content:
              "Twelve in-depth interviews were conducted with daily subway commuters across diverse demographics — recent immigrants, elderly riders, young professionals, and tourists. Key themes emerged consistently: anxiety about personal safety, frustration with inaudible announcements, and difficulty gauging crowd levels before boarding. Participants described a persistent sense of information asymmetry — the system knew things they didn't.",
          },
          {
            heading: "Key Problems Identified",
            content: [
              "Unclear announcements — over 70% of interviewees reported regularly missing or misunderstanding PA announcements",
              "Safety anxiety — particularly acute for solo travelers and women commuting late at night",
              "Crowd uncertainty — inability to predict car crowding leads to poor boarding decisions",
              "Service disruption opacity — delays announced too late, with insufficient context or alternatives",
            ],
          },
        ],
      },
      {
        label: "Features",
        sections: [
          {
            heading: "Core Features",
            content: [
              "Real-time safety alerts — crowd-sourced and sensor-based incident reporting with severity indicators",
              "Crowd level visualization — car-by-car occupancy display updated in real time via computer vision",
              "Announcement transcription — all PA announcements converted to text with timestamps",
              "Safe waiting zones — platform maps highlighting well-lit, camera-monitored waiting areas",
              "Service disruption summaries — plain-language explanations of delays with alternative routes",
            ],
          },
        ],
      },
      {
        label: "Reflection",
        sections: [
          {
            heading: "Design Reflections",
            content:
              "The most challenging design decision was determining what information to surface by default versus on demand. Information overload can increase anxiety rather than reduce it. The final design philosophy: show only the most critical safety information by default, with progressive disclosure for users who want more detail. The product should feel like a calm, knowledgeable companion — not an alarm system.",
          },
        ],
      },
    ],
  },
];

// ─── Tab Panel ────────────────────────────────────────────────────────────────

function TabPanel({
  project,
  activeTab,
  setActiveTab,
}: {
  project: Project;
  activeTab: number;
  setActiveTab: (i: number) => void;
}) {
  const currentTab = project.tabs[activeTab];

  return (
    <div className="border border-[#E8E4DC] border-t-0 bg-white">
      {/* ── Info Cards ── */}
      <div className="px-8 lg:px-12 pt-10 pb-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {project.infoCards.map((card) => (
            <div
              key={card.label}
              className="bg-[#F7F5F0] rounded p-4"
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "#9B9590",
                  marginBottom: "6px",
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "#1A1A18",
                  lineHeight: 1.4,
                }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── Media (Figma / Video) shown before tabs ── */}
        {project.figmaUrl && (
          <div className="mb-10">
            <SectionHeader index={0} heading="Interactive Prototype" />
            <div
              className="relative w-full bg-[#F2EFE8] border border-[#E8E4DC]"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figmaUrl)}`}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                title="Figma Prototype"
              />
            </div>
            <p
              className="mt-3 pl-8"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "#9B9590",
              }}
            >
              Open in{" "}
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4603A] hover:underline"
              >
                Figma →
              </a>
            </p>
          </div>
        )}

        {project.videoUrl && (
          <div className="mb-10">
            <SectionHeader
              index={0}
              heading={
                project.videoUrl.includes("bilibili")
                  ? "Watch the Film"
                  : "Product Launch Video"
              }
            />
            <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
              {project.videoUrl.includes("bilibili") || project.videoUrl.includes("BV") ? (
                <iframe
                  src="https://player.bilibili.com/player.html?bvid=BV1bU411d7vK&page=1&high_quality=1&danmaku=0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  title="Dayu Controls the Flood"
                />
              ) : (
                <video
                  className="absolute inset-0 w-full h-full"
                  controls
                  preload="metadata"
                  style={{ background: "#000" }}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  <source src={project.videoUrl} type="video/quicktime" />
                </video>
              )}
            </div>
            {project.videoUrl.includes("bilibili") && (
              <p
                className="mt-3 pl-8"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: "#9B9590",
                }}
              >
                Also on{" "}
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4603A] hover:underline"
                >
                  Bilibili →
                </a>
              </p>
            )}
          </div>
        )}

        {/* ── Tab Bar ── */}
        <div
          className="flex gap-0 border-b border-[#E8E4DC]"
          style={{ marginLeft: "-2rem", marginRight: "-2rem", paddingLeft: "2rem" }}
        >
          {project.tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="transition-colors duration-200"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: activeTab === i ? "#C4603A" : "#9B9590",
                padding: "10px 18px",
                borderBottom: activeTab === i ? "2px solid #C4603A" : "2px solid transparent",
                marginBottom: "-1px",
                background: "none",
                border: "none",
                borderBottom: activeTab === i ? "2px solid #C4603A" : "2px solid transparent",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="px-8 lg:px-12 pt-8 pb-10">
        <div className="max-w-3xl">
          {currentTab.sections.map((section, i) => (
            <div key={i} className="mb-10 last:mb-0">
              <SectionHeader index={i} heading={section.heading} />

              {Array.isArray(section.content) ? (
                <ul className="space-y-3 pl-8">
                  {section.content.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.8,
                        color: "#52504A",
                      }}
                    >
                      <span className="text-[#C4603A] mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="pl-8"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "#52504A",
                  }}
                >
                  {section.content}
                </p>
              )}

              {/* PDF attachments */}
              {section.pdfAttachments &&
                section.pdfAttachments.map((pdf, pdfIndex) => (
                  <div key={pdfIndex} className="mt-6 pl-8">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#9B9590",
                        }}
                      >
                        {pdf.label}
                      </span>
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C4603A] hover:underline"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open PDF →
                      </a>
                    </div>
                    <div
                      className="w-full border border-[#E8E4DC] bg-[#F7F5F0]"
                      style={{ height: "600px" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <iframe
                        src={`${pdf.url}#toolbar=0&navpanes=0`}
                        className="w-full h-full"
                        style={{ border: "none" }}
                        title={pdf.label}
                      />
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Header (numbered + rule line) ────────────────────────────────────

function SectionHeader({ index, heading }: { index: number; heading: string }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          color: "#C4603A",
          opacity: 0.6,
          minWidth: "20px",
        }}
      >
        {num}
      </span>
      <h4
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1A1A18",
          fontWeight: 500,
        }}
      >
        {heading}
      </h4>
      <div
        style={{
          flex: 1,
          height: "0.5px",
          background: "#E8E4DC",
        }}
      />
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Reset tab when collapsed
  useEffect(() => {
    if (!isExpanded) setActiveTab(0);
  }, [isExpanded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 120);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="reveal">
      {/* ── Card header ── */}
      <div
        className={`project-card group relative overflow-hidden cursor-pointer ${
          isExpanded ? "shadow-2xl" : ""
        }`}
        onClick={onToggle}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="img-overlay" />

          {/* Project number watermark */}
          <div className="absolute top-6 left-6">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "5rem",
                lineHeight: 1,
                color: "rgba(255,255,255,0.15)",
              }}
            >
              {project.number}
            </span>
          </div>

          {/* Tags */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expand button */}
          <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C4603A]/80 group-hover:border-[#C4603A]">
            <span
              className="text-white text-xl leading-none transition-transform duration-300"
              style={{ transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </div>
        </div>

        {/* Info bar */}
        <div className="bg-[#F7F5F0] border border-[#E8E4DC] border-t-0 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            <p
              className="mb-2"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C4603A",
              }}
            >
              {project.subtitle}
            </p>
            <h3
              className="mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#1A1A18",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#52504A",
              }}
            >
              {project.summary}
            </p>
          </div>
          <div className="sm:ml-8 sm:text-right shrink-0">
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#9B9590",
              }}
            >
              {project.category}
            </p>
          </div>
        </div>
      </div>

      {/* ── Expanded detail panel ── */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isExpanded ? "9999px" : "0",
          opacity: isExpanded ? 1 : 0,
          transition: "max-height 0.7s ease, opacity 0.5s ease",
        }}
      >
        <TabPanel
          project={project}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Collapse button */}
        <div className="border border-[#E8E4DC] border-t-0 bg-white px-8 lg:px-12 pb-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C4603A]"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9B9590",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                transform: "rotate(45deg)",
                display: "inline-block",
                fontSize: "1rem",
              }}
            >
              +
            </span>
            Collapse
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 bg-[#F2EFE8] relative overflow-hidden"
    >
      {/* Section number watermark */}
      <div className="absolute -left-8 top-16 select-none pointer-events-none">
        <span className="section-number">02</span>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <div className="accent-line" />
          <span className="mono-label text-[#9B9590]">Selected Work</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="display-headline text-[#1A1A18] reveal"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Projects &amp;
            <br />
            <span className="italic text-[#C4603A]">Case Studies</span>
          </h2>
          <p
            className="reveal max-w-xs"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#9B9590",
            }}
          >
            Click any project to explore the full case study, process, and design decisions.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
