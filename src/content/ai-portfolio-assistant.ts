export const portfolioAssistantCase = {
  slug: "ai-portfolio-assistant",
  title: "AI 设计作品集顾问",
  englishTitle: "AI Portfolio Strategy Advisor",
  subtitle: "帮助设计学生把“我不知道该做什么作品集”转化成具体的作品集策略。",
  description:
    "一个把申请背景、技能和约束转化成可执行 Portfolio Strategy 的 AI 产品。当前处于 Early User Testing。",
  tags: ["AI Product", "AI UX", "Next.js", "TypeScript", "DeepSeek"],
  status: "Early User Testing",
  metadataTitle: "AI 设计作品集顾问｜富彬 Portfolio",
  metadataDescription:
    "一个帮助设计学生把模糊的作品集准备转化成可执行策略的 AI 产品设计 Case Study。",
} as const;

export const portfolioAssistantScreenshots = {
  home: {
    src: "/projects/ai-portfolio-assistant/portfolio-home.png",
    label: "产品首页",
    filename: "portfolio-home.png",
  },
  questionnaire: {
    src: "/projects/ai-portfolio-assistant/portfolio-questionnaire.png",
    label: "5 步问卷",
    filename: "portfolio-questionnaire.png",
  },
  reportReal: {
    src: "/projects/ai-portfolio-assistant/portfolio-report-real.png",
    label: "Real AI Output",
    filename: "portfolio-report-real.png",
  },
  reportMock: {
    src: "/projects/ai-portfolio-assistant/portfolio-report-mock.png",
    label: "Prototype / Mock Data",
    filename: "portfolio-report-mock.png",
  },
  reviewUpload: {
    src: "/projects/ai-portfolio-assistant/portfolio-review-upload.png",
    label: "Review 上传页",
    filename: "portfolio-review-upload.png",
  },
  reviewResult: {
    src: "/projects/ai-portfolio-assistant/portfolio-review-result.png",
    label: "Prototype / Rule-based",
    filename: "portfolio-review-result.png",
  },
} as const;

export const productConceptFlow = [
  { label: "User Context" },
  { label: "Structured Questionnaire" },
  { label: "AI + Local Rules" },
  { label: "Portfolio Strategy" },
  { label: "Actionable Recommendations" },
] as const;

export const questionnaireFlow = [
  { label: "Background" },
  { label: "Target Direction" },
  { label: "Skills" },
  { label: "Current Block" },
  { label: "Time" },
] as const;

export const architectureFlow = [
  { label: "User" },
  { label: "Next.js Frontend" },
  { label: "Questionnaire" },
  { label: "/api/generate" },
  { label: "DeepSeek" },
  { label: "JSON Validation" },
  { label: "Portfolio Strategy" },
] as const;

export const liveAiItems = [
  "Questionnaire submission",
  "/api/generate",
  "DeepSeek",
  "JSON validation",
  "Retry",
] as const;

export const localRuleItems = [
  "Case matching",
  "Ability analysis",
  "Strategy combination",
] as const;

export const realCapabilities = [
  "Questionnaire",
  "DeepSeek generation",
  "JSON validation",
  "Retry",
  "PDF parsing",
  "Feedback",
] as const;

export const prototypeItems = [
  "Mock reports",
  "Review mock portfolio",
  "Rule-based review analysis",
  "School options",
] as const;

export const currentLimits = [
  "Review 分析目前不是 AI",
  "Mock Report 与真实 AI 输出需要明确区分",
  "学校信息目前只是选项标签",
  "没有学校官网检索",
  "没有登录",
  "没有数据库",
  "没有支付",
] as const;

export const designDecisions = [
  {
    title: "Structured Questionnaire over Open Prompt",
    body: "开放式 Prompt 不稳定，也难以比较不同用户。结构化问卷让系统拿到完整、可比较的背景、方向、技能、卡点和时间约束。",
  },
  {
    title: "AI + Rules instead of AI-only",
    body: "AI 负责生成与理解，规则负责稳定的案例匹配和策略组合。不是所有判断都交给 LLM。",
  },
  {
    title: "Strategy over Generic Advice",
    body: "产品最终输出的是可以执行的 Portfolio Strategy，而不是泛泛的职业建议。",
  },
] as const;

export const reportQuestions = [
  "我应该突出什么",
  "哪些能力需要补",
  "哪些项目值得保留",
  "下一步应该做什么",
] as const;

export const userInputs = [
  "背景",
  "申请方向",
  "技能",
  "当前卡点",
  "时间限制",
] as const;

export const problemPoints = [
  "应该申请什么方向",
  "现有作品和目标岗位是否匹配",
  "还缺什么能力证据",
  "应该做什么新的项目",
  "如何把有限时间投入到最有价值的作品上",
] as const;

export const reflectionPoints = [
  "AI 产品需要结构化用户输入，而不是单纯增加一个 Chatbox。",
  "AI 和 deterministic rules 可以组合，而不是所有逻辑都交给 LLM。",
  "产品可信度来自清楚区分真实能力、规则逻辑和 Prototype。",
  "AI 产品设计不仅是界面设计，也包括输入、推理、输出和用户决策流程。",
] as const;
