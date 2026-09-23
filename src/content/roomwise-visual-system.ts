/**
 * Visual tokens extracted from Roomwise product screenshots
 * (home / space / inspiration / plan / compatibility).
 * Do not invent states or elements not visible in those UIs.
 */
export const roomwiseVisualSystemCase = {
  title: "住好 · Visual System",
  subtitle: "从产品界面提取的组件与视觉规范",
  description:
    "不重新设计住好。以下色板、字体与组件均来自现有界面截图，用于说明同一产品内的视觉一致性如何被建立与维持。",
  status: "从现有 UI 提取",
  tags: ["住好", "Visual System", "组件规范"],
  metadataTitle: "住好 · Visual System｜富彬作品集",
  metadataDescription:
    "住好项目视觉系统：从现有产品界面提取的颜色、字体、按钮、卡片、标签与交互状态。",
  sources: [
    { label: "首页", file: "home.png" },
    { label: "我的空间", file: "space.png" },
    { label: "我的灵感", file: "inspiration.png" },
    { label: "空间适配", file: "compatibility.png" },
    { label: "我的方案", file: "plan.png" },
  ],
} as const;

/** HEX sampled from product PNGs (System.Drawing pixel read). */
export const roomwiseColors = [
  {
    name: "页面背景",
    role: "Page background",
    hex: "#F3EEE6",
    note: "home / space / inspiration / plan 页面底色",
  },
  {
    name: "主文字",
    role: "Primary text",
    hex: "#2C261E",
    note: "标题、正文强调、主按钮填充",
  },
  {
    name: "次级文字",
    role: "Secondary text",
    hex: "#6A6156",
    note: "说明文、辅助信息、轻量标签文案",
  },
  {
    name: "强调 / 操作",
    role: "Emphasis / Action",
    hex: "#2C261E",
    note: "主按钮与 Selected 标签共用深暖灰，不另设彩色强调",
  },
  {
    name: "边框 / 浅分割",
    role: "Border / Soft surface",
    hex: "#D9CFC0",
    note: "未选标签边缘与浅色表面分割",
  },
] as const;

export const roomwiseTypeStyles = [
  {
    name: "页面标题",
    role: "Page title",
    sample: "先认识一下你的空间",
    size: "36px",
    weight: "500",
    lineHeight: "1.25",
    family: "serif",
    color: "#2C261E",
    note: "Serif · 各流程页主标题",
  },
  {
    name: "Section 标题",
    role: "Section label",
    sample: "01 / 空间",
    size: "12px",
    weight: "400",
    lineHeight: "1.4",
    family: "sans",
    color: "#6A6156",
    note: "Sans · 步骤编号与分区",
  },
  {
    name: "Body",
    role: "Body",
    sample: "我们会根据你的房间条件判断哪些设计适合你。",
    size: "16px",
    weight: "400",
    lineHeight: "1.7",
    family: "sans",
    color: "#6A6156",
    note: "Sans · 说明与引导",
  },
  {
    name: "Caption",
    role: "Caption",
    sample: "你的房间",
    size: "12px",
    weight: "400",
    lineHeight: "1.4",
    family: "sans",
    color: "#6A6156",
    note: "Sans · 图片说明与轻量注释",
  },
] as const;

export const roomwiseButtons = [
  {
    name: "Primary",
    label: "开始分析",
    source: "inspiration.png / home.png / space.png",
    variant: "primary" as const,
  },
  {
    name: "Secondary",
    label: "保存我的方案",
    source: "plan.png",
    variant: "secondary" as const,
  },
] as const;

export const roomwiseCardExample = {
  image: "/projects/roomwise/room.jpg",
  title: "你的房间",
  meta: "现实约束 · 上传或示例房间",
  source: "compatibility / space 对比与空间录入",
} as const;

export const roomwiseTags = {
  furniture: {
    label: "已有家具",
    source: "space.png",
    selected: ["床", "书桌"],
    default: ["衣柜", "沙发", "其他"],
  },
  budget: {
    label: "本次改造预算",
    source: "space.png",
    selected: ["¥1000 以下"],
    default: ["¥1000-3000", "¥3000-5000", "¥5000 以上"],
  },
  focus: {
    label: "灵感关注点",
    source: "inspiration.png",
    selected: ["整体氛围", "配色"],
    default: ["家具", "灯光", "软装"],
  },
} as const;

export const roomwiseInteractionStates = [
  {
    name: "Default",
    evidence: "未选中的家具 / 预算 / 灵感关注标签",
    sample: "衣柜",
    state: "default" as const,
  },
  {
    name: "Selected",
    evidence: "已选中的「床」「整体氛围」「¥1000 以下」等",
    sample: "床",
    state: "selected" as const,
  },
] as const;
