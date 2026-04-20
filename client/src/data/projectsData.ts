/*
  Shared project data — used by both ProjectsSection (folder grid) and ProjectDetailPage
*/

const DAYU_IMG = "/dayu-cover.jpg";
const AR_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663409787492/7mPcQcem2UYFzT3RtPotqe/project-ar-glasses-YRV9yH3xbmHv354X6ZLB9t.webp";
const CINEROUTE_IMG = "/imageofcine.jpg";

export interface ProjectDetail {
  heading: string;
  content: string | string[];
  pdfAttachments?: { label: string; url: string }[];
}

export interface Project {
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

export const projects: Project[] = [
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
          "第一幕 — 入队：大禹加入海洋护卫队，与师傅和师兄首次下海执行任务。护卫队有个习俗——下海执行任务时，带一个物件回来，做成护身符，保佑自己平安。",
          "第二幕 — 遭袭：执行任务中，大禹一行穿梭在美丽的海底世界，突然遭遇鲨鱼攻击，师傅、师兄先后遇难，大禹侥幸逃过一劫……",
          "第三幕 — 惊醒：大禹被水流推到海岸上，脑海中浮现种种回忆，突然惊醒。正以为一场噩梦终于过去了，结果发现带回来的竟是……",
          "尾声 — 谴责：大禹去治水，却被水儿治，要问是为何，都怪排放核。谨以此片表示对核污水排放的强烈谴责。",
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
          { label: "HW4 — 开发低保真原型", url: "/HW4.pdf" },
          { label: "HW5 — 更新的垂直原型 (SignBridge Duo)", url: "/HW5.pdf" },
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
          "该项目完全通过 vibe coding 构建——在 AI 的协助下快速迭代，从想法到工作产品。前端为一个包含原生 JavaScript 的单一 HTML 文件，配合 Leaflet.js 实现地图渲染；后端为 Node.js（server.js），负责代理 DeepSeek API 请求并保护 API 密钥。整体架构轻量且无需构建步骤，部署在 Railway 上。",
      },
      {
        heading: "技术亮点",
        content: [
          "前后端分离架构 — 前端单一 HTML 文件，后端 Node.js 代理层保护 API 密钥，部署在 Railway 上。",
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
];
