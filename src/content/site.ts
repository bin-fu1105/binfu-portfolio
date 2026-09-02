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

export type DesignProject = {
  id: string;
  title: string;
  directions: string[];
};

export const designProjects: DesignProject[] = [
  {
    id: "children-hearing",
    title: "儿童听觉教育产品",
    directions: ["用户研究", "UX/UI", "交互原型", "可用性测试"],
  },
  {
    id: "sleep-light",
    title: "儿童睡眠灯",
    directions: ["产品设计", "交互设计", "Arduino 原型"],
  },
  {
    id: "see-sea",
    title: "See Sea｜海洋塑料互动展览",
    directions: ["信息设计", "数据可视化", "空间设计", "互动展示"],
  },
];

export const navItems = [
  { href: "/#work", label: "作品" },
  { href: "/#about", label: "关于" },
  { href: "#contact", label: "联系" },
] as const;
