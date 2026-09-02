export const skillGapCase = {
  slug: "ai-skill-gap-assistant",
  title: "AI 学习差距助手",
  subtitle: "从模糊的学习目标，到清晰的技能差距和学习路径。",
  description:
    "一个帮助学习者识别已有能力、验证真实水平，并减少重复学习的 AI 产品 MVP。",
  tags: ["AI Product Design", "AI UX", "React", "FastAPI", "DeepSeek"],
  status: "可运行 MVP",
  metadataTitle: "AI 学习差距助手｜富彬 Portfolio",
  metadataDescription:
    "一个从用户学习目标、能力验证到技能差距与学习路径的 AI 产品设计 Case Study。",
} as const;

export const skillGapScreenshots = {
  understanding: {
    src: "/projects/ai-skill-gap/understanding.png",
    label: "Understanding 产品截图",
    filename: "understanding.png",
  },
  assessmentQuestion: {
    src: "/projects/ai-skill-gap/assessment-question.png",
    label: "Assessment 提问截图",
    filename: "assessment-question.png",
  },
  assessmentResult: {
    src: "/projects/ai-skill-gap/assessment-result.png",
    label: "Assessment 结果截图",
    filename: "assessment-result.png",
  },
  skillProfile: {
    src: "/projects/ai-skill-gap/skill-profile.png",
    label: "Skill Profile 产品截图",
    filename: "skill-profile.png",
  },
  skillGap: {
    src: "/projects/ai-skill-gap/skill-gap.png",
    label: "Skill Gap 产品截图",
    filename: "skill-gap.png",
  },
  learningPlan: {
    src: "/projects/ai-skill-gap/learning-plan.png",
    label: "Learning Plan 产品截图",
    filename: "learning-plan.png",
  },
} as const;

export const productConceptFlow = [
  { label: "自然语言输入" },
  { label: "AI Understanding" },
  { label: "用户确认" },
  { label: "Assessment" },
  { label: "Skill Profile" },
  { label: "Skill Gap" },
  { label: "Learning Plan" },
] as const;

export const assessmentFlow = [
  { label: "用户声称掌握某项技能" },
  { label: "AI 提问" },
  { label: "用户回答" },
  { label: "Assessment Judge" },
  { label: "Confirmed / Uncertain / Not Yet" },
] as const;

export const architectureFlow = [
  { label: "用户" },
  { label: "React Frontend" },
  { label: "FastAPI Backend", connector: "HTTP" },
  { label: "DeepSeek API" },
  { label: "Structured JSON" },
  { label: "React UI" },
] as const;

export const liveAiStages = ["Understanding", "Assessment Judge"] as const;
export const mockStages = ["Skill Profile", "Skill Gap", "Learning Plan"] as const;

export const completedItems = [
  "完整前端产品流程",
  "React 页面与状态",
  "FastAPI Backend",
  "DeepSeek Understanding",
  "DeepSeek Assessment Judge",
  "Error / Loading / Uncertain / Confirmation 状态",
  "可运行 MVP",
] as const;

export const nextSteps = [
  "真实用户测试",
  "将 Skill Profile 替换为真实动态逻辑",
  "将 Skill Gap 替换为真实 AI / 数据逻辑",
  "将 Learning Plan 替换为真实动态生成",
  "产品部署与真实使用验证",
] as const;

export const designDecisions = [
  {
    title: "先确认 AI 的理解",
    body: "用户自然语言可能存在歧义。如果 AI 对目标、已有能力或时间理解错误，后续所有判断都会被影响。因此 Understanding 后增加用户确认节点。",
  },
  {
    title: "能力需要证据，而不是自我评分",
    body: "用户说“我会 React”并不能证明实际掌握程度。通过任务型问题获取回答证据，可以让能力判断更接近真实使用能力。",
  },
  {
    title: "不确定时继续询问，而不是强行判断",
    body: "AI 输出不是天然确定的。当当前回答证据不足时，产品允许进入 Uncertain 状态并继续追问，而不是立即输出结论。",
  },
] as const;

export const skillProfileExample = {
  mastered: ["Python", "FastAPI", "React 基础"],
  toImprove: ["React 高级状态管理"],
} as const;

export const skillGapExamples = [
  "React 状态管理",
  "前端 API 集成",
  "Deployment",
] as const;

export const learningPlanExample = {
  durationLabel: "学习时间",
  duration: "14 天",
  items: [
    { name: "React 状态管理", days: "4 天" },
    { name: "前端 API 集成", days: "4 天" },
    { name: "Deployment", days: "3 天" },
    { name: "综合实践", days: "3 天" },
  ],
} as const;

export const assessmentStates = [
  "Confirmed",
  "Uncertain",
  "Not Yet",
  "Error",
] as const;
