/*
  Projects Section — Folder Grid Style
  Main page shows 4 folder cards; clicking navigates to /project/:id
*/
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { projects } from "../data/projectsData";

// Folder SVG icon component
function FolderIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Folder back */}
      <rect x="0" y="18" width="120" height="72" rx="8" fill={color} opacity="0.9" />
      {/* Folder tab */}
      <path d="M0 18 Q0 10 8 10 L38 10 Q44 10 47 16 L52 24 L0 24 Z" fill={color} />
      {/* Folder front highlight */}
      <rect x="0" y="24" width="120" height="66" rx="8" fill={color} />
      {/* Inner shine */}
      <rect x="0" y="24" width="120" height="14" rx="0" fill="white" opacity="0.15" />
      <rect x="0" y="24" width="120" height="4" rx="0" fill="white" opacity="0.25" />
    </svg>
  );
}

const FOLDER_COLORS = [
  "#5B9BD5", // blue — 大禹治水
  "#6BAE75", // green — AR glasses
  "#E07B54", // terracotta — CineRoute
  "#9B7EC8", // purple — SubwayPose
];

function FolderCard({
  project,
  index,
  color,
}: {
  project: (typeof projects)[0];
  index: number;
  color: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="reveal cursor-pointer group"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {/* Folder container */}
      <div
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: "translateY(0px)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0px)";
        }}
      >
        {/* Folder icon with image inside */}
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <div className="absolute inset-0">
            {/* Folder shape */}
            <div className="absolute inset-0">
              <FolderIcon color={color} />
            </div>

            {/* Image inside folder (visible through the folder opening) */}
            <div
              className="absolute overflow-hidden rounded"
              style={{
                top: "32%",
                left: "6%",
                right: "6%",
                bottom: "6%",
                borderRadius: "4px",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle overlay so image blends with folder */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${color}33 0%, transparent 40%)`,
                }}
              />
            </div>

            {/* Project number badge */}
            <div
              className="absolute top-[14%] right-[8%] w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.9)" }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: color,
                  letterSpacing: "0.02em",
                }}
              >
                {project.number}
              </span>
            </div>
          </div>
        </div>

        {/* Label below folder */}
        <div className="mt-3 px-1">
          <h3
            className="leading-tight mb-0.5 transition-colors duration-200 group-hover:text-[#C4603A]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              fontWeight: 700,
              color: "#1A1A18",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#9B9590",
            }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p
              className="mono-label mb-3"
              style={{ color: "#C4603A" }}
            >
              精选作品
            </p>
            <h2
              className="display-headline"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#1A1A18",
              }}
            >
              项目与案例研究
            </h2>
          </div>
          <span
            className="section-number hidden lg:block"
            style={{ color: "#E8E4DC", lineHeight: 1 }}
          >
            02
          </span>
        </div>

        {/* Folder grid — 2×2 on desktop, 1 col on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <FolderCard
              key={project.id}
              project={project}
              index={index}
              color={FOLDER_COLORS[index % FOLDER_COLORS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
