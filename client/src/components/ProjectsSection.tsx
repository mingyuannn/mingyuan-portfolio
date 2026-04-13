/*
  Design: Editorial Minimalism — Projects Section
  Large project cards with image, editorial layout, expandable detail panels
  Terracotta accent, section number watermark
*/
import { useState, useEffect, useRef } from "react";

const DAYU_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663409787492/icMMOoDLKrLYXtbJ.jpg?Expires=1804358120&Signature=E7TcgKCXnshOWjDZ5wa3u6hPSd5mtUG9w2V6ItOhWjeHT7CytHO1Fg1j~B3BMvk90OKhRMgn2pIYummhVFo-4IerdOJKLinveSjLhM4zcCgfqde8npB7exffP-FYyvnhrXKYHQ5EghcJ5YY8Uo8bh5rdB37v-VCd6VltHh86KTe8tzAWsytydBBvB~7OpNoiQjUrn1nQEbSMYVOGCdmzvlAC43yEBIop1O2FLrCWhQ5IE2Esggw5J~x92-ovhS31rdlwqTuzSf5A8WsO6YU-nGGGyFyQQMqLg6kTLUNAC~ZXKEN7X0AUX3wDEQHtJc0JsiFa3j0HCcL8u6VX4fNsiw__&Key-Pair-Id=K2HSFNDJXOU9YS";
const AR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409787492/7mPcQcem2UYFzT3RtPotqe/project-ar-glasses-YRV9yH3xbmHv354X6ZLB9t.webp";
const SUBWAY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409787492/7mPcQcem2UYFzT3RtPotqe/project-subway-kGsaGMdF3bSKKVmVbWvXxz.webp";
const CINEROUTE_IMG = "/imageofcine.jpg";

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
  githubUrl?: string;
  details: ProjectDetail[];
}

const projects: Project[] = [
  {
    id: "dayu",
    number: "01",
    title: "大禹治水",
    subtitle: "AI 短片",
    category: "AI · 叙事 · 生成式媒体",
    tags: ["Midjourney", "Premiere Pro", "AI 叙事"],
    image: DAYU_IMG,
    videoUrl: "https://www.bilibili.com/video/BV1bU411d7vK/",
    summary:
      "一部重新诠释中国神话《大禹治水》的实验性 AI 生成短片。该项目探索了生成式 AI 工具如何辅助视觉叙事和叙事设计。",
    details: [
      {
        heading: "项目概述",
        content:
          "这部实验短片重新构想了中国最经久不衰的神话之一——大禹的故事，这位传奇人物通过毅力、工程和集体智慧驯服了灾难性的洪水。影片没有将神话作为传统的历史叙事来呈现，而是通过一个融合了古代宇宙学、环境斗争和探索的推想视觉世界来重构它。",
      },
      {
        heading: "故事结构",
        content: [
          "第一幕 — 深海的呼唤：在一个充满海洋危险的世界中，建立《深海之礼》的仪式以及导师与学徒之间的纽带。",
          "第二幕 — 发现：找回神秘的巨蛋，引发了科学好奇心与未知威胁之间的冲突。",
          "第三幕 — 入侵：随着政治混乱和假新闻扭曲了任务的目的，神话海洋与全球现实之间的界限变得模糊。",
        ],
      },
      {
        heading: "创作过程",
        content:
          "制作流程从详细的叙事剧本开始，然后使用 Midjourney 生成关键帧概念进行故事板制作。每个场景都通过多次提示词迭代以实现风格一致性——传统中国水墨画美学与电影级 AI 图像的融合。运动序列使用 Runway 的 Gen-2 模型生成和扩展，然后在 Premiere Pro 中进行组装和调色。",
      },
      {
        heading: "使用的 AI 工具",
        content: [
          "Midjourney v6 — 视觉概念生成、关键帧插图、风格一致性",
          "Adobe Premiere Pro — 最终剪辑、调色、音频同步",
        ],
      },
      {
        heading: "关键反思",
        content:
          "该项目揭示了 AI 作为叙事媒介的非凡潜力及其固有的局限性。生成式工具擅长产生引人入胜的图像，但需要大量的人工策划来保持叙事的连贯性。最成功的片段源于人类创作意图与机器解释之间的对话。",
      },
    ],
  },
  {
    id: "ar-glasses",
    number: "02",
    title: "用于无障碍沟通的 AR 智能眼镜",
    subtitle: "产品设计 · 无障碍",
    category: "UX 设计 · AR · 无障碍",
    tags: ["Figma", "AR 设计", "无障碍", "人机交互", "用户研究"],
    image: AR_IMG,
    figmaUrl:
      "https://www.figma.com/design/c1eWMiGvEb4mGvNKIipsMO/SignBridge-Duo?node-id=2029-194&t=12jiwQPy3RzOWFAj-1",
    videoUrl:
      "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663409787492/FepmhXmgiSgBpmVC.mov?Expires=1804362333&Signature=czjh9gLDj4tX5-XxYAcLmx7Zz9IkCA35RJaeN6ChyoCXyfl~JhUEVE2Ij~uvIIx2ZoFyfxDz9odPsqhX5WUKDMefVCw5eONTiXnx6kAhMS8HknJANnPY9ghwD5h1bYSWsG4MaF5ZhyqxZopVric6KW4qeK1kHC36KqDTqwun1bOHV-URuz5Q3~ZDfmFd-75kePR7ONKr0Azs40LUtpYoYLTXp7QO9e4jXtmxBI7xzJr8T-AVVVugNYvU--15U~4tzYRCEf3a4SJaARVjMpJrnmjyKB7AOhIUQNL2tNUXadqnUPA06cJVfe~-yOX9tIS-JMbamu-lwqgtfLEBaGX9Bg__&Key-Pair-Id=K2HSFNDJXOU9YS",
    summary:
      "一个专注于通过带有实时转录和手势交互的 AR 智能眼镜改善听障用户实时沟通的产品设计项目。",
    details: [
      {
        heading: "问题定义",
        content:
          "聋人和重听人士在工作场所、教室和公共服务等日常环境中与听力正常的人互动时，面临着持续的沟通障碍。虽然手语翻译和书面笔记可以提供帮助，但它们通常不可用、速度慢，或者在社交上会破坏自然的对话流程。现有的辅助技术也倾向于关注单向的无障碍性，要么将语音翻译成文本，要么通过放大来支持听力。\n\n本项目探索 AR 辅助沟通工具是否能够实现聋人和听力正常用户之间的无缝双向互动，让对话自然展开，而无需翻译或专门的环境。",
      },
      {
        heading: "目标用户",
        content:
          "主要用户是经常在教育、专业和社交环境中与听力正常的人互动的聋人和重听人士。\n\n次要用户包括听力正常的沟通伙伴——同事、同学、服务人员和朋友——他们的参与对于实现流畅的双向沟通至关重要。",
      },
      {
        heading: "产品概念",
        content:
          "AR Glasses 是一副轻量级 AR 智能眼镜，旨在实时连接手语用户和口语用户之间的沟通。\n\n该系统结合了语音识别、手语识别和 AR 字幕显示，以实现聋人和听力正常参与者之间的自然对话。\n\n眼镜连接到配套的智能手机应用程序，该应用程序处理 AI 模型并管理系统设置，而 AR 界面则直接在佩戴者的视野内呈现信息。",
      },
      {
        heading: "主要功能",
        content: [
          "双向沟通翻译：语音 → 在 AR 视图中显示实时字幕；手语 → 为听力正常的参与者翻译成文本或合成语音。",
          "上下文相关的字幕放置：口语在 AR 视野中显示为位于说话者脸部附近的浮动字幕，减少了对话期间的视线转移。",
          "AI 驱动的手语识别：计算机视觉模型检测手势并将手语翻译成可读文本或音频输出。",
          "说话者识别：颜色编码的字幕在群组对话中区分多个说话者。",
          "免提交互：简单的手势控制允许用户重放最后一句话、暂停转录或调整设置，而无需使用手机。",
          "环境感知：视觉指示器通知用户重要的环境声音，如警报、门铃或驶近的车辆。",
        ],
      },
      {
        heading: "Figma 原型与交互设计",
        content:
          "交互设计在 Figma 中进行了原型制作，重点关注三个关键流程：\n\n初始设置和校准 — 将眼镜与移动应用程序配对并配置字幕首选项。\n\n实时对话模式 — 在实时互动期间显示字幕和手语翻译。\n\n设置和无障碍定制 — 调整文本大小、字幕位置和通知首选项。\n\n视觉设计强调清晰度和低认知负荷。高对比度的排版、受控的说话者颜色编码以及最小的视觉混乱有助于保持可读性，而不会让用户的视野不堪重负。",
      },
      {
        heading: "用户场景",
        content:
          "28 岁的 Sarah 正在参加工作场所的团队会议。当同事说话时，他们的话语在她的 AR 视图中显示为浮动字幕，位于每个说话者的脸部附近。当她的经理提出问题时，Sarah 使用微妙的拇指和食指捏合手势来重放最后一句话。系统的说话者识别以不同的颜色显示每个人的话语，使多人对话易于跟进。",
      },
      {
        heading: "反思",
        content:
          "该项目强调了在设计功能的同时兼顾尊严的重要性。早期的原型优先考虑技术能力，但感觉很临床且有异化感。随后的迭代侧重于使眼镜在视觉上与普通眼镜无法区分，并确保交互模型尽可能谨慎——尊重用户参与社交场合而不引起对其辅助技术的注意的愿望。",
      },
      {
        heading: "过程文档",
        content:
          "完整的设计过程文档，包括低保真原型探索和带有新功能的更新的垂直原型。",
        pdfAttachments: [
          {
            label: "HW4 — 开发低保真原型",
            url: "/HW4.pdf",
          },
          {
            label: "HW5 — 更新的垂直原型 (SignBridge Duo)",
            url: "/HW5.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "cineroute",
    number: "03",
    title: "CineRoute",
    subtitle: "Vibe Coding · AI 旅行应用",
    category: "AI · 产品 · Vibe Coding",
    tags: ["DeepSeek API", "Leaflet.js", "Vibe Coding", "旅行", "AI"],
    image: CINEROUTE_IMG,
    githubUrl: "https://cineroute-production.up.railway.app/",
    summary:
      "一款由 AI 驱动的旅行规划应用，可为世界上任何城市生成个性化行程、交互式地图路线和电影取景地导览——完全通过使用 DeepSeek 的 vibe coding 构建。",
    details: [
      {
        heading: "它的功能",
        content:
          "CineRoute 让你输入任何城市，即可立即生成完整的旅行体验：12 个带有真实 GPS 坐标的精选景点、按地理位置优化的智能多日行程，以及追踪该城市电影实际拍摄地点的电影模式——所有这些都在交互式地图上可视化。",
      },
      {
        heading: "主要功能",
        content: [
          "AI 城市探索者 — 输入任何城市即可获得 12 个精选景点，包含描述、评分、游览时间和真实地图坐标。",
          "智能行程规划器 — 选择景点并选择 1-7 天；AI 按地理位置对站点进行聚类，以最大限度地减少旅行时间。",
          "手动路线编辑 — 拖动以重新排序站点、编辑游览时间、在不同天数之间移动站点，或添加不在 AI 列表中的自定义位置。",
          "电影模式 — 选择以该城市为背景的任何电影；AI 会找到 4-6 个真实的拍摄地点，包含场景描述和游客提示，并绘制在地图上。",
          "交互式地图 — 使用 OpenStreetMap 的 Leaflet.js；每日路线以不同颜色显示，并标有站点之间的距离和步行时间。",
          "距离和时间指示器 — 路线的每一段都显示通过半正矢公式计算的精确距离和预计步行时间。",
        ],
      },
      {
        heading: "它是如何构建的",
        content:
          "该项目完全通过 vibe coding 构建——在 AI 的协助下快速迭代，从想法到工作产品。技术栈有意保持极简：一个包含原生 JavaScript 的 HTML 文件、用于地图的 Leaflet.js，以及用于所有 AI 生成的 DeepSeek API。没有框架，没有构建步骤，没有后端。",
      },
      {
        heading: "技术亮点",
        content: [
          "单文件架构 — 整个应用在一个 HTML 文件中，除了 Leaflet CDN 之外零依赖。",
          "结构化 AI 提示 — DeepSeek 返回带有 GPS 坐标的严格 JSON，从而实现直接的地图渲染。",
          "半正矢距离计算 — 在客户端计算站点之间的真实世界距离。",
          "拖放式行程编辑 — 带有实时地图同步的原生 HTML5 拖放 API。",
          "自适应电影模式 — 特定于电影的颜色编码和表情符号标记可同时区分多条电影路线。",
        ],
      },
      {
        heading: "反思",
        content:
          "CineRoute 是一项关于 vibe coding 能将产品理念推进到何种程度的实验。从一个简单的提示开始，该应用通过快速迭代而成长——每个功能的添加都是为了响应前一个版本中缺失的内容。最有趣的挑战是设计能够可靠地返回结构化、可地图渲染数据的 AI 提示，并处理模型返回不完美 JSON 的不可避免的边缘情况。",
      },
    ],
  },
  {
    id: "subwaypose",
    number: "04",
    title: "SubwayPose",
    subtitle: "城市安全 · 产品概念",
    category: "产品设计 · 城市科技 · 用户研究",
    tags: ["用户研究", "Figma", "MasterGo", "城市设计", "安全"],
    image: SUBWAY_IMG,
    summary:
      "一款旨在提高纽约地铁系统安全意识和信息清晰度的概念产品，基于用户访谈和通勤者研究。",
    details: [
      {
        heading: "研究背景",
        content:
          "纽约市的地铁系统每天运送超过 350 万名乘客，但仍然受到广播不清晰、不可预测的服务中断和持续的安全焦虑的困扰——特别是对于新居民、游客和弱势群体。这个项目始于一个问题：为什么世界上最广泛的交通系统之一对用户来说仍然感觉如此不透明？",
      },
      {
        heading: "用户访谈与洞察",
        content:
          "对不同人口统计学特征的日常地铁通勤者——新移民、老年乘客、年轻专业人士和游客——进行了 12 次深度访谈。关键主题一致出现：对人身安全的焦虑、对听不清或令人困惑的广播的挫败感，以及在登车前难以估计拥挤程度。参与者描述了一种持续的信息不对称感——系统知道他们不知道的事情。",
      },
      {
        heading: "发现的关键问题",
        content: [
          "广播不清晰 — 超过 70% 的受访者报告经常错过或误解公共广播",
          "安全焦虑 — 对于独自旅行者和深夜通勤的女性尤为严重",
          "拥挤不确定性 — 无法预测车厢拥挤程度导致糟糕的登车决定和不适",
          "服务中断不透明 — 延误通知太晚，缺乏足够的背景信息或替代方案",
        ],
      },
      {
        heading: "产品概念",
        content:
          "SubwayPose 是一款移动应用程序和站台屏蔽门集成系统，为通勤者提供实时的、上下文相关的安全和服务信息。这个名字指的是在站台上安全地定位自己的行为——这是该产品旨在支持的城市导航中一个微小但重要的时刻。",
      },
      {
        heading: "核心功能",
        content: [
          "实时安全警报 — 带有严重程度指示器的众包和基于传感器的事件报告",
          "拥挤程度可视化 — 通过计算机视觉实时更新的逐车厢占用率显示",
          "广播转录 — 所有公共广播转换为文本并带有时间戳显示",
          "安全等候区 — 突出显示照明良好、有摄像头监控的等候区的站台地图",
          "服务中断摘要 — 用通俗易懂的语言解释延误并提供替代路线建议",
        ],
      },
      {
        heading: "产品原型",
        content:
          "原型在 MasterGo 和 Figma 中构建，涵盖了从行程规划到到达站台再到登车的核心通勤旅程。视觉设计使用针对低光地铁环境优化的暗模式界面，具有清晰的排版层次结构和颜色编码的安全指示器。无障碍性是一个主要约束——所有功能都可以单手操作，并与屏幕阅读器兼容。",
      },
      {
        heading: "设计反思",
        content:
          "最具挑战性的设计决策是确定默认情况下显示哪些信息，而不是按需显示。信息过载会增加焦虑而不是减少焦虑。最终的设计理念：默认情况下仅显示最关键的安全信息，并为需要更多细节的用户提供渐进式披露。该产品应该感觉像是一个冷静、知识渊博的伴侣——而不是一个警报系统。",
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

            {/* GitHub link */}
            {project.githubUrl && (
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
                    在线演示
                  </h4>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-3 px-5 py-3 border border-[#E8E4DC] bg-[#F7F5F0] hover:border-[#C4603A] transition-colors duration-200"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    color: "#1A1A18",
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  体验 CineRoute →
                </a>
              </div>
            )}

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
                    交互式原型
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
                    title="Figma 原型"
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
                  在{" "}
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C4603A] hover:underline"
                  >
                    Figma 中打开 →
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
                    {project.videoUrl?.includes("bilibili") ? "观看影片" : "产品发布视频"}
                  </h4>
                </div>
                <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
                  {project.videoUrl?.includes("bilibili") || project.videoUrl?.includes("BV") ? (
                    <iframe
                      src={`https://player.bilibili.com/player.html?bvid=BV1bU411d7vK&page=1&high_quality=1&danmaku=0`}
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                      title="大禹治水 — AI 短片"
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
                      您的浏览器不支持视频播放。
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
                      也可以在{" "}
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C4603A] hover:underline"
                      >
                        Bilibili 观看 →
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4603A] hover:underline"
                    >
                      打开视频 →
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
                {detail.pdfAttachments &&
                  detail.pdfAttachments.map((pdf, pdfIndex) => (
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
                          打开 PDF →
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
            收起
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
          <span className="mono-label text-[#9B9590]">精选作品</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2
            className="display-headline text-[#1A1A18] reveal"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            项目与
            <br />
            <span className="italic text-[#C4603A]">案例研究</span>
          </h2>
          <p
            className="reveal max-w-xs"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#9B9590",
            }}
          >
            点击任意项目，探索完整的案例研究、设计过程与决策。
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
