export const careerAgentCase = {
  slug: "ai-career-agent",
  title: "AI 职业探索助手",
  englishTitle: "AI Career Agent",
  subtitle: "让用户直接用自然语言提出职业问题，再由系统判断需要哪些工具和信息。",
  description:
    "一个把 LLM 推理、tool calling、真实岗位数据和确定性技能差距分析组合在一起的职业助手。当前是 Working Prototype。",
  tags: ["AI Product", "AI UX", "React", "FastAPI", "DeepSeek"],
  status: "Working Prototype",
  metadataTitle: "AI 职业探索助手｜富彬 Portfolio",
  metadataDescription:
    "一个用自然语言提问、通过 tool calling 获取岗位事实和技能差距的 AI 产品设计 Case Study。",
} as const;

export const careerAgentScreenshots = {
  home: {
    src: "/projects/ai-career-agent/home.png",
    label: "产品首页",
    filename: "home.png",
  },
  input: {
    src: "/projects/ai-career-agent/job-search.png",
    label: "自然语言输入",
    filename: "job-search.png",
  },
  trace: {
    src: "/projects/ai-career-agent/skill-gap.png",
    label: "AgentTrace",
    filename: "skill-gap.png",
  },
  result: {
    src: "/projects/ai-career-agent/job-search.png",
    label: "结果页",
    filename: "job-search.png",
  },
} as const;

export const productConceptFlow = [
  { label: "Natural Language" },
  { label: "LLM Understanding" },
  { label: "Tool Selection" },
  { label: "External / Deterministic Data" },
  { label: "LLM Explanation" },
  { label: "Career Answer" },
] as const;

export const agentDecisionFlow = [
  { label: "DeepSeek 第一次 completion" },
  { label: "Tool Call" },
  { label: "Tool Result" },
  { label: "DeepSeek 第二次 completion" },
  { label: "Final Answer" },
] as const;

export const architectureFlow = [
  { label: "React + Vite" },
  { label: "FastAPI /career/search" },
  { label: "DeepSeek 第一次 completion" },
  { label: "Tool choice" },
  { label: "Adzuna / China mock 或 Skill Gap" },
  { label: "DeepSeek 第二次 completion" },
  { label: "Final Answer" },
] as const;

export const userInputs = [
  "职业目标",
  "当前背景",
  "城市",
  "技能",
  "问题",
] as const;

export const exampleChips = [
  "Find jobs",
  "Skill gap",
  "Interview advice",
] as const;

export const toolChoices = [
  "search_jobs",
  "analyze_skill_gap",
  "direct answer",
] as const;

export const resultSources = [
  {
    title: "LLM",
    body: "解释与建议。第一次决定是否调用工具，有工具结果后再写最终回答。",
  },
  {
    title: "External API",
    body: "英国岗位来自 Adzuna。jobs[] 只取工具返回值，不从模型正文解析。",
  },
  {
    title: "Deterministic Logic",
    body: "技能差距由固定目录计算 have / missing / priority，工具内部不调用 LLM。",
  },
] as const;

export const realItems = [
  "DeepSeek tool calling",
  "Adzuna UK",
  "Final answer generation",
  "Empty listings / error / 400",
] as const;

export const deterministicItems = [
  "Skill gap catalog",
  "Input validation",
  "Country routing（cn → China mock，其余 → Adzuna）",
] as const;

export const mockItems = [
  "China Provider 写死岗位",
] as const;

export const uiSimulationItems = [
  "AgentWorkflow 四步动画，不是真实 agent graph",
] as const;

export const currentLimits = [
  "中国岗位目前是 mock data",
  "美国 provider 尚未实现",
  "美国请求目前仍可能走英国 Adzuna",
  "Skill gap 只有 4 个固定职业目录",
  "没有岗位详情页",
  "没有匹配评分",
  "没有多轮会话",
  "没有 streaming",
  "没有数据库 / 登录 / 历史",
  "AgentWorkflow 是 UI 动画，不是真实 graph",
] as const;

export const designDecisions = [
  {
    title: "Natural Language over Multi-step Filters",
    body: "用户直接表达职业问题。系统从一句话里推断目标、城市和技能，而不是先让用户填完筛选表。",
  },
  {
    title: "Tools for Facts, LLM for Explanation",
    body: "岗位事实来自外部来源，技能差距来自确定性计算。模型负责判断需要什么信息，以及如何解释这些信息。",
  },
  {
    title: "Visible Tool Trace",
    body: "结果页写出用过的工具和参数，让用户看见 Agent 做了什么，而不是只给一段无法核对的建议。",
  },
] as const;

export const reflectionPoints = [
  "Natural language can replace complex filtering when the system can infer intent.",
  "AI should not be responsible for factual data that can come from tools.",
  "Deterministic logic can make AI products more predictable.",
  "Showing tool usage can improve user trust.",
  "AI UX includes designing the boundary between model reasoning and system logic.",
] as const;
