/*
  Project Detail Page — /project/:id
  Full project case study view, navigated to from the folder grid
*/
import { useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { projects } from "../data/projectsData";

const FOLDER_COLORS = [
  "#5B9BD5",
  "#6BAE75",
  "#E07B54",
  "#9B7EC8",
];

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();

  const projectIndex = projects.findIndex((p) => p.id === params.id);
  const project = projects[projectIndex];
  const color = FOLDER_COLORS[projectIndex % FOLDER_COLORS.length] || "#C4603A";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mono-label mb-4" style={{ color: "#9B9590" }}>
            404
          </p>
          <h1
            className="display-headline mb-6"
            style={{ fontSize: "2rem", color: "#1A1A18" }}
          >
            项目未找到
          </h1>
          <button
            onClick={() => navigate("/")}
            className="mono-label px-6 py-3 border border-[#E8E4DC] hover:border-[#C4603A] hover:text-[#C4603A] transition-colors duration-200"
          >
            ← 返回主页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* Back navigation */}
      <div className="sticky top-0 z-40 bg-[#F7F5F0]/90 backdrop-blur-sm border-b border-[#E8E4DC]">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 transition-colors duration-200 hover:text-[#C4603A]"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9B9590",
            }}
          >
            <span>←</span>
            <span>返回项目</span>
          </button>

          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#9B9590",
              }}
            >
              {project.number} / {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", maxHeight: "520px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(26,26,24,0.75) 100%)",
          }}
        />
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 container pb-10">
          <p
            className="mono-label mb-2"
            style={{ color: color }}
          >
            {project.subtitle}
          </p>
          <h1
            className="display-headline text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {project.title}
          </h1>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Summary */}
          <p
            className="mb-16 leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#3A3A38",
              lineHeight: 1.85,
            }}
          >
            {project.summary}
          </p>

          {/* External links */}
          {(project.videoUrl || project.figmaUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3 mb-16 pb-16 border-b border-[#E8E4DC]">
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border transition-colors duration-200 hover:border-[#C4603A] hover:text-[#C4603A]"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9B9590",
                    borderColor: "#E8E4DC",
                  }}
                >
                  <span>▶</span>
                  <span>观看视频 →</span>
                </a>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border transition-colors duration-200 hover:border-[#C4603A] hover:text-[#C4603A]"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9B9590",
                    borderColor: "#E8E4DC",
                  }}
                >
                  <span>◈</span>
                  <span>Figma 原型 →</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border transition-colors duration-200 hover:border-[#C4603A] hover:text-[#C4603A]"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9B9590",
                    borderColor: "#E8E4DC",
                  }}
                >
                  <span>↗</span>
                  <span>体验 CineRoute →</span>
                </a>
              )}
            </div>
          )}

          {/* Detail sections */}
          <div className="space-y-14">
            {project.details.map((detail, i) => (
              <div key={i}>
                {/* Section heading */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-1 rounded-full flex-shrink-0 mt-1"
                    style={{ height: "2rem", background: color }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#9B9590",
                        display: "block",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                        fontWeight: 700,
                        color: "#1A1A18",
                        lineHeight: 1.2,
                      }}
                    >
                      {detail.heading}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                {Array.isArray(detail.content) ? (
                  <ul className="space-y-3 pl-7">
                    {detail.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                          style={{ background: color }}
                        />
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.95rem",
                            color: "#3A3A38",
                            lineHeight: 2.0,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="pl-7">
                    {detail.content.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="mb-4 last:mb-0"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.95rem",
                          color: "#3A3A38",
                          lineHeight: 2.0,
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* PDF attachments */}
                {detail.pdfAttachments && detail.pdfAttachments.length > 0 && (
                  <div className="mt-5 pl-7 flex flex-wrap gap-3">
                    {detail.pdfAttachments.map((pdf, j) => (
                      <a
                        key={j}
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border transition-colors duration-200 hover:border-[#C4603A] hover:text-[#C4603A]"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: "#9B9590",
                          borderColor: "#E8E4DC",
                        }}
                      >
                        <span>↓</span>
                        <span>{pdf.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom navigation */}
          <div className="mt-20 pt-10 border-t border-[#E8E4DC] flex items-center justify-between">
            <button
              onClick={() => navigate("/#projects")}
              className="flex items-center gap-2 transition-colors duration-200 hover:text-[#C4603A]"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#9B9590",
              }}
            >
              <span>←</span>
              <span>所有项目</span>
            </button>

            {/* Next project */}
            {projectIndex < projects.length - 1 && (
              <button
                onClick={() =>
                  navigate(`/project/${projects[projectIndex + 1].id}`)
                }
                className="flex items-center gap-2 transition-colors duration-200 hover:text-[#C4603A]"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#9B9590",
                }}
              >
                <span>下一个项目</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
