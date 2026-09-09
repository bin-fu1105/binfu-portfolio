export const profile = {
  name: "富彬",
  identity: "应届毕业生",
  role: "AI 产品设计 / AI UX",
  positioning:
    "设计背景的 AI 产品设计方向候选人。通过用户研究、产品设计、UX/UI 和 AI workflow，把真实用户问题转化为可运行的 AI 产品。",
  phone: "15303626850",
  email: "fub_24@163.com",
  github: "bin-fu1105",
  githubUrl: "https://github.com/bin-fu1105",
} as const;

export const education = [
  {
    degree: "硕士",
    school: "利兹大学",
    major: "数字设计未来",
    period: "2025.09 – 2026.09",
  },
  {
    degree: "本科",
    school: "南京工程学院",
    major: "环境设计",
    period: "2021.09 – 2025.06",
  },
] as const;

export const positioningPoints = [
  {
    title: "设计训练",
    body: "环境设计本科 + 数字设计未来硕士",
  },
  {
    title: "产品实践",
    body: "3 个 AI 产品；其中 1 个可运行 MVP，1 个已做 5 人早期测试",
  },
  {
    title: "工作方式",
    body: "用户问题 → 产品流程 → 可运行原型，不只做视觉",
  },
] as const;

export type AiProject = {
  id: string;
  title: string;
  problem: string;
  status?: string;
  flow?: string[];
  stack?: string;
  notes?: string[];
  testSummary?: string;
  feedback?: string[];
  href?: string;
};

export const aiProjects: AiProject[] = [
  {
    id: "learning-gap",
    title: "AI 学习差距助手",
    problem:
      "学习新技能时，用户经常不知道自己已经掌握什么、真正缺少什么，每次学习新内容都容易从头开始。",
    status: "可运行 MVP",
    flow: [
      "Home",
      "Understanding",
      "Assessment",
      "Skill Profile",
      "Skill Gap",
      "Learning Plan",
    ],
    stack: "React + FastAPI + DeepSeek API",
    notes: [
      "Understanding 和 Assessment 已经接入 DeepSeek API，其余阶段用于完成完整产品流程验证。",
    ],
    href: "/projects/ai-skill-gap-assistant",
  },
  {
    id: "portfolio-assistant",
    title: "AI 作品集助手",
    problem:
      "设计学生申请研究生时经常缺少作品集选题想法，同时需要逐个寻找学校官网和优秀作品集案例。",
    status: "5 人早期用户测试",
    testSummary: "3 位同学，2 位通过小红书进入产品的真实用户",
    feedback: [
      "用户缺少作品集创作想法",
      "一个个寻找学校官网链接很麻烦",
    ],
    href: "/projects/ai-portfolio-assistant",
  },
  {
    id: "career-explorer",
    title: "AI 职业探索助手",
    problem:
      "传统招聘平台主要依赖固定筛选条件，用户无法用自然语言完整表达自己的岗位、地点、薪资、技能等需求，也难以根据个人技能获得综合职业分析。",
    status: "Working Prototype",
    flow: [
      "Natural Language",
      "Tool Selection",
      "Job Search / Skill Gap",
      "Final Answer",
    ],
    stack: "React + Vite + FastAPI + DeepSeek",
    notes: [
      "DeepSeek tool calling 已接入。英国岗位来自 Adzuna；技能差距为确定性计算；中国岗位目前是 mock。",
    ],
    href: "/projects/ai-career-agent",
  },
];

export type DesignProjectImage = {
  src: string;
  alt: string;
  hero?: boolean;
};

export type DesignProject = {
  id: string;
  title: string;
  subtitle?: string;
  directions: string[];
  description: string;
  images: DesignProjectImage[];
};

export const designProjects: DesignProject[] = [
  {
    id: "see-sea",
    title: "See Sea",
    subtitle: "海洋塑料互动展览",
    directions: ["信息可视化", "空间设计", "交互展示"],
    description:
      "围绕海洋塑料污染进行研究，通过数据可视化、互动装置与空间叙事，将复杂环境议题转化为可感知的展览体验。",
    images: [
      {
        src: "/projects/design-foundation/see-sea-06.webp",
        alt: "See Sea 海洋塑料互动展览主视觉",
        hero: true,
      },
      {
        src: "/projects/design-foundation/see-sea-01.webp",
        alt: "See Sea 展览研究与概念页面",
      },
      {
        src: "/projects/design-foundation/see-sea-04.webp",
        alt: "See Sea 展览结构与展示页面",
      },
    ],
  },
  {
    id: "children-hearing",
    title: "儿童听觉教育产品",
    directions: ["用户研究", "UX/UI", "交互原型"],
    description:
      "针对听力障碍儿童课堂学习场景开展用户研究、用户旅程与功能架构设计，并完成低保真原型与可用性测试。",
    images: [
      {
        src: "/projects/design-foundation/hearing-10.webp",
        alt: "儿童听觉教育产品结果与主视觉",
        hero: true,
      },
      {
        src: "/projects/design-foundation/hearing-07.webp",
        alt: "儿童听觉教育产品研究与洞察页面",
      },
      {
        src: "/projects/design-foundation/hearing-09.webp",
        alt: "儿童听觉教育产品流程与原型页面",
      },
    ],
  },
  {
    id: "sleep-light",
    title: "儿童睡眠灯",
    directions: ["产品设计", "交互设计", "Arduino 原型"],
    description:
      "针对儿童睡眠与独立入睡场景进行研究，设计亮度调节与互动反馈功能，并使用 Arduino 完成功能原型验证。",
    images: [
      {
        src: "/projects/design-foundation/sleep-lamp-14.webp",
        alt: "儿童睡眠灯结果与主视觉",
        hero: true,
      },
      {
        src: "/projects/design-foundation/sleep-lamp-11.webp",
        alt: "儿童睡眠灯研究与场景页面",
      },
      {
        src: "/projects/design-foundation/sleep-lamp-13.webp",
        alt: "儿童睡眠灯产品与交互页面",
      },
    ],
  },
];

export type ExperienceProject = {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  status: string;
  flow: string[];
  flowLabel: string;
  stack: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export const vrProjects: ExperienceProject[] = [
  {
    id: "healing-through-nature",
    title: "自然疗愈｜Healing Through Nature",
    subtitle: "硕士毕业设计",
    problem:
      "通过渐进式自然环境互动支持压力缓解的 VR 体验。核心不是观看风景，而是用户研究 → 渐进式互动 → 渐进式沉浸 → 用户能动性 → 压力缓解。",
    status: "毕业设计",
    flow: ["暴风森林", "光之花", "疗愈之湖", "疗愈花园"],
    flowLabel: "体验路径",
    stack: "VR / 交互设计 / 体验设计 · Unity",
    href: "/projects/healing-through-nature",
    image: {
      src: "/projects/healing-through-nature/hero.jpeg",
      alt: "自然疗愈，疗愈花园 Unity 场景",
    },
  },
];

export const navItems = [
  { href: "/#work", label: "作品" },
  { href: "/#about", label: "关于" },
  { href: "#contact", label: "联系" },
] as const;
