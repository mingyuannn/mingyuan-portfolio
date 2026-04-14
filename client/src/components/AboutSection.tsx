/*
  Design: Editorial Minimalism — About Section
  Two-column layout, section number watermark, editorial typography
*/
import { useEffect, useRef } from "react";

const ABOUT_TEXTURE = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663409787492/ikqfBWvmbNXZGOSW.jpg?Expires=1804359425&Signature=jaEtRT4ZSYOYPXrAIa12GQbinrUAdGoqRuOTkEoGuLoHxMBz87XcX0kDXIjGT6URKZEWUx9VAeqK0ZBr-k~MeuDnERXr8fdY4c6X~vHBua0DZrRE5NUA3nwaW2CyC6incelVz9wYxu3pOozoOfcOBypWwuqbkXtkZerVtYQ1IeQ3fhQuF8jyNuCj6ENbxtwZG8vU-TtYP5tXdDLot27FnswDM3tz5A5DXR7znII51P8xqGZc9ppIjqIZxWoR4CVf5r4Y-7~ossE1MvivfaoT5eqqBM4JbCZKc6DoDriF1fnShYplkYq332NL9PHOxfHtolrQh-4Cbo06TYryzV~hwg__&Key-Pair-Id=K2HSFNDJXOU9YS";

const highlights = [
  { label: "专注领域", value: "人机交互" },
  { label: "大学", value: "康奈尔大学工学院" },
  { label: "项目", value: "信息科学硕士" },
  { label: "地点", value: "纽约州纽约市" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="about" ref={sectionRef} className="py-32 bg-[#F7F5F0] relative overflow-hidden">
      {/* Section number watermark */}
      <div className="absolute -left-8 top-16 select-none pointer-events-none">
        <span className="section-number">01</span>
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <div className="accent-line" />
          <span className="mono-label text-[#9B9590]">关于</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text content */}
          <div>
            <h2
              className="display-headline text-[#1A1A18] mb-8 reveal"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              在<span className="italic text-[#C4603A]">人工智能与人性</span>的<br />交汇处进行设计。
            </h2>

            <div className="space-y-5 reveal">
              <p className="font-['DM_Sans'] text-[#52504A] leading-[1.85] text-base">
                我是康奈尔大学工学院信息科学专业的硕士研究生，专注于人机交互、人工智能应用和创意技术。我的背景涵盖媒体制作、产品设计和用户研究。
              </p>
              <p className="font-['DM_Sans'] text-[#52504A] leading-[1.85] text-base">
                我的工作处于叙事与技术的交汇点。我制作了重新诠释中国古代神话的 AI 生成短片，为听障用户设计了 AR 无障碍工具，并进行了用户研究以重塑城市交通体验。
              </p>
              <p className="font-['DM_Sans'] text-[#52504A] leading-[1.85] text-base">
                我相信最好的产品是那些让人感觉深刻人性化的产品——即使是由最先进的 AI 驱动。我的设计理念以同理心、清晰度以及深思熟虑的细节所带来的安静力量为中心。
              </p>
            </div>

            <div className="mt-10 reveal">
              <a
                href="mailto:mp2335@cornell.edu"
                className="group inline-flex items-center gap-3 font-['DM_Mono'] text-xs tracking-[0.1em] uppercase text-[#C4603A] border-b border-[#C4603A]/40 pb-1 transition-all duration-300 hover:border-[#C4603A]"
              >
                联系我
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right: Info grid + texture */}
          <div className="reveal">
            {/* Texture image */}
            <div className="relative mb-10 overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={ABOUT_TEXTURE}
                alt="Abstract texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F7F5F0]/30" />
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-px bg-[#E8E4DC]">
              {highlights.map((item) => (
                <div key={item.label} className="bg-[#F7F5F0] p-5">
                  <p className="mono-label text-[#9B9590] mb-2">{item.label}</p>
                  <p className="font-['DM_Sans'] font-medium text-[#1A1A18] text-sm leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
