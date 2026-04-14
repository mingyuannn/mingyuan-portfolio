/*
  Design: Editorial Minimalism — Skills Section
  Horizontal category layout, mono labels, terracotta accent, animated entry
*/
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    id: "design",
    label: "设计工具",
    number: "01",
    skills: [
      { name: "Figma", desc: "UI/UX 原型与交互设计" },
      { name: "MasterGo", desc: "产品设计与协作线框图" },
      { name: "Photoshop", desc: "视觉编辑与资产制作" },
      { name: "Premiere Pro", desc: "视频编辑与后期制作" },
      { name: "Midjourney", desc: "AI 图像生成与视觉概念开发" },
    ],
  },
  {
    id: "research",
    label: "用户研究",
    number: "02",
    skills: [
      { name: "用户访谈", desc: "深度访谈与质性洞察收集" },
      { name: "情景实验", desc: "真实环境下的行为观察与分析" },
      { name: "问卷设计", desc: "量化研究与数据收集" },
      { name: "竞品分析", desc: "市场格局与产品对标研究" },
    ],
  },
  {
    id: "programming",
    label: "编程语言",
    number: "03",
    skills: [
      { name: "JavaScript", desc: "Web 开发与交互式原型" },
      { name: "Python", desc: "数据分析、自动化与 AI 脚本" },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 bg-[#1A1A18] relative overflow-hidden"
    >
      {/* Section number watermark */}
      <div className="absolute -left-8 top-16 select-none pointer-events-none">
        <span
          className="font-['Playfair_Display'] font-black leading-none tracking-tight"
          style={{
            fontSize: "clamp(5rem, 12vw, 10rem)",
            color: "oklch(1 0 0 / 0.03)",
          }}
        >
          03
        </span>
      </div>

      {/* Decorative terracotta accent */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C4603A]/20 to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <div className="w-10 h-0.5 bg-[#C4603A]" />
          <span className="font-['DM_Mono'] text-xs tracking-[0.08em] uppercase text-[#9B9590]">
            能力
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="font-['Playfair_Display'] font-bold text-white reveal"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            技能与<br />
            <span className="italic text-[#C4603A]">专长</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.id}
              className="bg-[#1A1A18] p-8 reveal"
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-['DM_Mono'] text-[0.65rem] tracking-[0.12em] uppercase text-[#C4603A] mb-2">
                    {category.number}
                  </p>
                  <h3 className="font-['Playfair_Display'] font-bold text-white text-xl">
                    {category.label}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-8" />

              {/* Skills list — two-column grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <p className="font-['DM_Sans'] font-medium text-white text-sm mb-1">
                      {skill.name}
                    </p>
                    <p className="font-['DM_Sans'] text-white/40 text-xs leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center gap-4 reveal">
          <div className="w-10 h-px bg-white/20" />
          <p className="font-['DM_Mono'] text-[0.7rem] tracking-[0.08em] uppercase text-white/30">
            持续学习 · 持续构建
          </p>
        </div>
      </div>
    </section>
  );
}
