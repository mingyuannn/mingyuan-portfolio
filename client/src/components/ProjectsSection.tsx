/*
  Design: Editorial Minimalism — Projects Section
  Large project cards with image, editorial layout, expandable detail panels
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
  details: ProjectDetail[];
}

const projects: Project[] = [
  {
    id: "dayu",
    number: "01",
    title: "Dayu Controls the Flood",
    subtitle: "AI Short Film",
    category: "AI \u00b7 Storytelling \u00b7 Generative Media",
    tags: ["Midjourney", "Premiere Pro", "AI Storytelling"],
    image: DAYU_IMG,
    videoUrl: "https://www.bilibili.com/video/BV1bU411d7vK/",
    summary:
      "An experimental AI-generated short film reinterpreting the Chinese myth \u2018Dayu Controls the Flood.\u2019 The project explores how generative AI tools can assist in visual storytelling and narrative design.",
    details: [
      {
        heading: "Project Overview",
        content:
          "This experimental short film reimagines one of China\u2019s most enduring myths\u2014the story of Dayu, the legendary figure who tamed catastrophic floods through perseverance, engineering, and collective knowledge. Rather than presenting the myth as a traditional historical narrative, the film reconstructs it through a speculative visual world that blends ancient cosmology, environmental struggle, and exploration.",
      },
      {
        heading: "Story Structure",
        content: [
          "Act I \u2014 The Deep Call: Establishing the ritual of the \u2018Deep Sea Gift\u2019 and the bond between mentor and apprentice in a world of maritime peril.",
          "Act II \u2014 The Discovery: The recovery of the mysterious giant egg, sparking a conflict between scientific curiosity and the looming threat of the unknown.",
          "Act III \u2014 The Intrusion: The boundary between the mythic ocean and global reality thins as political chaos and \u2018fake news\u2019 distort the mission\u2019s purpose.",
        ],
      },
      {
        heading: "Creative Process",
        content:
          "The production workflow began with a detailed narrative script, followed by storyboarding using Midjourney to generate keyframe concepts. Each scene was iterated through multiple prompt variations to achieve stylistic consistency \u2014 a blend of traditional Chinese ink painting aesthetics with cinematic AI imagery. Motion sequences were generated and extended using Runway\u2019s Gen-2 model, then assembled and color-graded in Premiere Pro.",
      },
      {
        heading: "AI Tools Used",
        content: [
          "Midjourney v6 \u2014 Visual concept generation, keyframe illustration, style consistency",
          "Adobe Premiere Pro \u2014 Final edit, color grading, audio synchronization",
        ],
      },
      {
        heading: "Key Reflections",
        content:
          "The project revealed both the extraordinary potential and the inherent limitations of AI as a storytelling medium. Generative tools excel at producing evocative imagery but require significant human curation to maintain narrative coherence. The most successful sequences emerged from a dialogue between human creative intent and machine interpretation.",
      },
    ],
  },
  {
    id: "ar-glasses",
    number: "02",
    title: "AR Smart Glasses for Accessible Communication",
    subtitle: "Product Design \u00b7 Accessibility",
    category: "UX Design \u00b7 AR \u00b7 Accessibility",
    tags: ["Figma", "AR Design", "Accessibility", "HCI", "User Research"],
    image: AR_IMG,
    figmaUrl: "https://www.figma.com/design/c1eWMiGvEb4mGvNKIipsMO/SignBridge-Duo?node-id=2029-194&t=12jiwQPy3RzOWFAj-1",
    videoUrl: "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663409787492/FepmhXmgiSgBpmVC.mov?Expires=1804362333&Signature=czjh9gLDj4tX5-XxYAcLmx7Zz9IkCA35RJaeN6ChyoCXyfl~JhUEVE2Ij~uvIIx2ZoFyfxDz9odPsqhX5WUKDMefVCw5eONTiXnx6kAhMS8HknJANnPY9ghwD5h1bYSWsG4MaF5ZhyqxZopVric6KW4qeK1kHC36KqDTqwun1bOHV-URuz5Q3~ZDfmFd-75kePR7ONKr0Azs40LUtpYoYLTXp7QO9e4jXtmxBI7xzJr8T-AVVVugNYvU--15U~4tzYRCEf3a4SJaARVjMpJrnmjyKB7AOhIUQNL2tNUXadqnUPA06cJVfe~-yOX9tIS-JMbamu-lwqgtfLEBaGX9Bg__&Key-Pair-Id=K2HSFNDJXOU9YS",
    summary:
      "A product design project focused on improving real-time communication for hearing-impaired users through AR smart glasses with live transcription and gesture interaction.",
    details: [
      {
        heading: "Problem Definition",
        content:
          "Deaf and hard-of-hearing individuals face persistent communication barriers when interacting with hearing people in everyday environments such as workplaces, classrooms, and public services. While interpreters and written notes can help, they are often unavailable, slow, or socially disruptive to natural conversation flow. Existing assistive technologies also tend to focus on one-directional accessibility, either translating speech to text or supporting hearing through amplification.\n\nThis project explores whether AR-assisted communication tools can enable seamless, bidirectional interaction between Deaf and hearing users, allowing conversations to unfold naturally without requiring interpreters or specialized environments.",
      },
      {
        heading: "Target Users",
        content:
          "The primary users are Deaf and hard-of-hearing individuals who regularly interact with hearing people in educational, professional, and social contexts.\n\nSecondary users include hearing communication partners \u2014 colleagues, classmates, service workers, and friends \u2014 whose participation is essential for enabling fluid two-way communication.",
      },
      {
        heading: "Product Concept",
        content:
          "AR Glasses is a pair of lightweight AR smart glasses designed to bridge communication between sign language users and spoken language users in real time.\n\nThe system combines speech recognition, sign language recognition, and AR subtitle display to enable natural conversation between Deaf and hearing participants.\n\nThe glasses connect to a companion smartphone app that processes AI models and manages system settings, while the AR interface presents information directly within the wearer\u2019s field of view.",
      },
      {
        heading: "Key Features",
        content: [
          "Bidirectional communication translation: Speech \u2192 real-time subtitles displayed in the AR view; Sign language \u2192 translated into text or synthesized speech for hearing participants.",
          "Contextual subtitle placement: Spoken language appears as floating captions positioned near the speaker\u2019s face in the AR field of view, reducing gaze shifting during conversations.",
          "AI-powered sign language recognition: Computer vision models detect hand gestures and translate sign language into readable text or audio output.",
          "Speaker identification: Color-coded subtitles distinguish multiple speakers in group conversations.",
          "Hands-free interaction: Simple gesture controls allow users to replay the last sentence, pause transcription, or adjust settings without using a phone.",
          "Environmental awareness: Visual indicators notify users of important ambient sounds such as alarms, doorbells, or approaching vehicles.",
        ],
      },
      {
        heading: "Figma Prototype & Interaction Design",
        content:
          "The interaction design was prototyped in Figma, focusing on three key flows:\n\nInitial setup and calibration \u2014 pairing the glasses with the mobile app and configuring subtitle preferences.\n\nReal-time conversation mode \u2014 displaying subtitles and sign translations during live interactions.\n\nSettings and accessibility customization \u2014 adjusting text size, subtitle placement, and notification preferences.\n\nThe visual design emphasizes clarity and low cognitive load. High-contrast typography, controlled color coding for speakers, and minimal visual clutter help maintain readability without overwhelming the user\u2019s field of view.",
      },
      {
        heading: "User Scenario",
        content:
          "Sarah, 28, is attending a team meeting at her workplace. As colleagues speak, their words appear as floating subtitles in her AR view, positioned near each speaker\u2019s face. When her manager asks a question, Sarah uses a subtle thumb-and-index pinch gesture to replay the last sentence. The system\u2019s speaker identification displays each person\u2019s words in a distinct color, making multi-person conversations easy to follow.",
      },
      {
        heading: "Reflection",
        content:
          "This project reinforced the importance of designing for dignity alongside functionality. Early prototypes prioritized technical capability but felt clinical and othering. Subsequent iterations focused on making the glasses visually indistinguishable from regular eyewear, and on ensuring the interaction model was as discreet as possible \u2014 respecting the user\u2019s desire to participate in social situations without drawing attention to their assistive technology.",
      },
      {
        heading: "Process Documentation",
        content:
          "Full design process documentation including low-fidelity prototype exploration and updated vertical prototype with new features.",
        pdfAttachments: [
          {
            label: "HW4 — Developing Low-Fidelity Prototypes",
            url: "/HW4.pdf",
          },
          {
            label: "HW5 — Updated Vertical Prototype (SignBridge Duo)",
            url: "/HW5.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "subwaypose",
    number: "03",
    title: "SubwayPose",
    subtitle: "Urban Safety \u00b7 Product Concept",
    category: "Product Design \u00b7 Urban Tech \u00b7 User Research",
    tags: ["User Research", "Figma", "MasterGo", "Urban Design", "Safety"],
    image: SUBWAY_IMG,
    summary:
      "A concept product designed to improve safety awareness and information clarity in the NYC subway system, grounded in user interviews and commuter research.",
    details: [
      {
        heading: "Research Background",
        content:
          "New York City\u2019s subway system carries over 3.5 million passengers daily, yet remains plagued by unclear announcements, unpredictable service disruptions, and persistent safety anxieties \u2014 particularly for new residents, tourists, and vulnerable populations. This project began with a question: why does one of the world\u2019s most extensive transit systems still feel so opaque to its users?",
      },
      {
        heading: "User Interviews & Insights",
        content:
          "Twelve in-depth interviews were conducted with daily subway commuters across diverse demographics \u2014 recent immigrants, elderly riders, young professionals, and tourists. Key themes emerged consistently: anxiety about personal safety, frustration with inaudible or confusing announcements, and difficulty gauging crowd levels before boarding. Participants described a persistent sense of information asymmetry \u2014 the system knew things they didn\u2019t.",
      },
      {
        heading: "Key Problems Identified",
        content: [
          "Unclear announcements \u2014 over 70% of interviewees reported regularly missing or misunderstanding PA announcements",
          "Safety anxiety \u2014 particularly acute for solo travelers and women commuting late at night",
          "Crowd uncertainty \u2014 inability to predict car crowding leads to poor boarding decisions and discomfort",
          "Service disruption opacity \u2014 delays are announced too late, with insufficient context or alternatives",
        ],
      },
      {
        heading: "Product Concept",
        content:
          "SubwayPose is a mobile application and platform screen door integration that provides commuters with real-time, contextual safety and service information. The name references the act of positioning oneself safely on a platform \u2014 a small but significant moment of urban navigation that the product aims to support.",
      },
      {
        heading: "Core Features",
        content: [
          "Real-time safety alerts \u2014 crowd-sourced and sensor-based incident reporting with severity indicators",
          "Crowd level visualization \u2014 car-by-car occupancy display updated in real time via computer vision",
          "Announcement transcription \u2014 all PA announcements converted to text and displayed with timestamps",
          "Safe waiting zones \u2014 platform maps highlighting well-lit, camera-monitored waiting areas",
          "Service disruption summaries \u2014 plain-language explanations of delays with alternative route suggestions",
        ],
      },
      {
        heading: "Product Prototype",
        content:
          "The prototype was built in MasterGo and Figma, covering the core commuter journey from trip planning through platform arrival to boarding. The visual design uses a dark mode interface optimized for low-light subway environments, with a clear typographic hierarchy and color-coded safety indicators. Accessibility was a primary constraint \u2014 all features are operable with one hand and compatible with screen readers.",
      },
      {
        heading: "Design Reflections",
        content:
          "The most challenging design decision was determining what information to surface by default versus on demand. Information overload can increase anxiety rather than reduce it. The final design philosophy: show only the most critical safety information by default, with progressive disclosure for users who want more detail. The product should feel like a calm, knowledgeable companion \u2014 not an alarm system.",
      },
    ],
  },
];

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
      {/* Project card */}
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

          {/* Project number */}
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

        {/* Card info bar */}
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

      {/* Expanded detail panel */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isExpanded ? "9999px" : "0",
          opacity: isExpanded ? 1 : 0,
          transition: "max-height 0.7s ease, opacity 0.5s ease",
        }}
      >
        <div className="border border-[#E8E4DC] border-t-0 bg-white p-8 lg:p-12">
          <div className="max-w-3xl">
            {/* Figma embed */}
            {project.figmaUrl && (
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#C4603A]" />
                  <h4
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C4603A",
                    }}
                  >
                    Interactive Prototype
                  </h4>
                </div>
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
                  className="mt-3"
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
                    Figma \u2192
                  </a>
                </p>
              </div>
            )}

            {/* Video embed */}
            {project.videoUrl && (
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#C4603A]" />
                  <h4
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C4603A",
                    }}
                  >
                    {project.videoUrl?.includes("bilibili") ? "Watch the Film" : "Product Launch Video"}
                  </h4>
                </div>
                <div
                  className="relative w-full bg-black"
                  style={{ aspectRatio: "16/9" }}
                >
                  {project.videoUrl?.includes("bilibili") || project.videoUrl?.includes("BV") ? (
                    <iframe
                      src={`https://player.bilibili.com/player.html?bvid=BV1bU411d7vK&page=1&high_quality=1&danmaku=0`}
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                      title="Dayu Controls the Flood — AI Short Film"
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
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    color: "#9B9590",
                  }}
                >
                  {project.videoUrl?.includes("bilibili") ? (
                    <>
                      Also available on{" "}
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C4603A] hover:underline"
                      >
                        Bilibili \u2192
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4603A] hover:underline"
                    >
                      Open video \u2192
                    </a>
                  )}
                </p>
              </div>
            )}

            {/* Detail sections */}
            {project.details.map((detail, i) => (
              <div key={i} className="mb-10 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#C4603A]" />
                  <h4
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C4603A",
                    }}
                  >
                    {detail.heading}
                  </h4>
                </div>

                {Array.isArray(detail.content) ? (
                  <ul className="space-y-3">
                    {detail.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.75,
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
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.9,
                      color: "#52504A",
                    }}
                  >
                    {detail.content}
                  </p>
                )}

                {/* PDF inline previews */}
                {detail.pdfAttachments && detail.pdfAttachments.map((pdf, pdfIndex) => (
                  <div key={pdfIndex} className="mt-6">
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
                        Open PDF \u2192
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="mt-8 flex items-center gap-2 transition-colors duration-300 hover:text-[#C4603A]"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9B9590",
            }}
          >
            <span style={{ transform: "rotate(45deg)", display: "inline-block", fontSize: "1rem" }}>+</span>
            Collapse
          </button>
        </div>
      </div>
    </div>
  );
}

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
