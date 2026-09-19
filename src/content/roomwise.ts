export const roomwiseCase = {
  slug: "roomwise",
  title: "住好 / Roomwise",
  subtitle: "把喜欢的空间，变成适合你的空间。",
  description:
    "一个年轻租客空间规划与家居决策产品。帮助用户把喜欢的空间灵感，转化成适合自己房间、预算和生活方式的可执行方案。",
  tags: ["UX", "交互设计", "产品体验", "用户测试"],
  status: "可运行原型 · 5 人测试",
  metadataTitle: "住好 / Roomwise｜富彬作品集",
  metadataDescription:
    "住好 / Roomwise：把喜欢的空间灵感，转化成适合自己房间、预算和生活方式的可执行方案。UX / 交互设计 Case Study。",
} as const;

export const roomwiseScreenshots = {
  compatibility: {
    src: "/projects/roomwise/compatibility.png",
    label: "空间适配：判断、解释与调整建议",
    filename: "compatibility.png",
  },
  compatibilityPage: {
    src: "/projects/roomwise/compatibility-page.png",
    label: "空间适配完整界面",
    filename: "compatibility-page.png",
  },
  plan: {
    src: "/projects/roomwise/plan.png",
    label: "我的方案：布局、预算与可执行清单",
    filename: "plan.png",
  },
  before: {
    src: "/projects/roomwise/before.png",
    label: "测试前：直接给出判断和建议",
    filename: "before.png",
  },
  after: {
    src: "/projects/roomwise/after.png",
    label: "设计后：判断可以被检查",
    filename: "after.png",
  },
  home: {
    src: "/projects/roomwise/home.png",
    label: "首页",
    filename: "home.png",
  },
  space: {
    src: "/projects/roomwise/space.png",
    label: "我的空间",
    filename: "space.png",
  },
  inspiration: {
    src: "/projects/roomwise/inspiration.png",
    label: "我的灵感",
    filename: "inspiration.png",
  },
  analyzing: {
    src: "/projects/roomwise/analyzing.png",
    label: "分析中",
    filename: "analyzing.png",
  },
  cover: {
    src: "/projects/roomwise/cover.png",
    label: "完成反馈",
    filename: "cover.png",
  },
  room: {
    src: "/projects/roomwise/room.jpg",
    label: "用户自己的房间",
    filename: "room.jpg",
  },
  inspirationSpace: {
    src: "/projects/roomwise/inspiration-space.jpg",
    label: "用户喜欢的参考空间",
    filename: "inspiration-space.jpg",
  },
} as const;

export const overviewMeta = [
  { label: "角色", value: "UX / 交互 / 产品体验" },
  { label: "产品类型", value: "空间规划与家居决策" },
  { label: "核心用户", value: "有明确改造意愿、但不愿反复试错的年轻租客" },
  { label: "验证", value: "可运行原型，5 位用户，10 平方米，预算 1000 元" },
] as const;

export const existingWorkflow = [
  { label: "找灵感" },
  { label: "收藏" },
  { label: "找家具" },
  { label: "比较" },
  { label: "不确定是否适合自己的房间" },
  { label: "犹豫 / 放弃布置" },
] as const;

export const researchObservations = [
  {
    num: "01",
    title: "选择困难",
    body: "用户面对大量空间案例和家具选择，缺少明确的判断依据。",
  },
  {
    num: "02",
    title: "执行成本",
    body: "灵感、家具、价格等信息分散在不同平台，用户需要反复搜索和比较。",
  },
  {
    num: "03",
    title: "空间适配不确定",
    body: "它连接风格、空间、家具、色彩与预算。若用户无法判断“这个空间是否适合自己”，后续的搜索、购买与布置都会陷入反复试错。",
  },
  {
    num: "04",
    title: "预算取舍",
    body: "喜欢的方案与实际预算之间存在差距。看不到先做什么，就更容易放弃。",
  },
] as const;

export const interactionPrinciples = [
  {
    title: "拆解判断",
    body: "不直接给“适合 / 不适合”，而是拆成风格、空间比例、色彩和预算。",
  },
  {
    title: "解释结果",
    body: "用户可以继续查看判断依据，而不是只接受一个结论。",
  },
  {
    title: "避免虚假精确",
    body: "尺寸建议并非精确测量，而是基于房间面积与图片观察给出的参考范围。",
  },
  {
    title: "保留决策权",
    body: "系统提供判断与建议，最终是否采用仍由用户决定。",
  },
] as const;

export const productFlow = [
  { label: "我的空间" },
  { label: "我的灵感" },
  { label: "分析中" },
  { label: "空间适配" },
  { label: "我的方案" },
  { label: "完成反馈" },
] as const;

export const testFindings = [
  {
    title: "用户能够走完整流程。",
    impact: "流程方向成立。",
  },
  {
    title: "用户知道要上传房间和参考空间，但不清楚这些信息如何影响结果。",
    impact: "输入与结果之间需要更明确的关系。",
  },
  {
    title: "5 位用户在查看结果后反复追问判断依据。为什么是这个分数？为什么建议这个尺寸？",
    impact: "用户理解流程，但需要看见判断为什么成立。",
  },
  {
    title: "用户预算 1000 元，完整参考方案约 2760 元。",
    impact: "“降低成本”并不等于“完成目标”。",
  },
] as const;

export const budgetNumbers = [
  { label: "我的预算", value: "1000 元" },
  { label: "完整参考方案", value: "约 2760 元" },
  { label: "预算内先完成", value: "627 元" },
] as const;

export const finalFlow = [
  { key: "home", label: "首页" },
  { key: "space", label: "我的空间" },
  { key: "inspiration", label: "我的灵感" },
  { key: "analyzing", label: "分析中" },
  { key: "cover", label: "完成反馈" },
] as const;
