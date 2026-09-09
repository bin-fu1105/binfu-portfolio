export const healingThroughNatureCase = {
  slug: "healing-through-nature",
  title: "自然疗愈：基于渐进式自然体验的压力缓解 VR 体验",
  subtitle: "自然疗愈｜Healing Through Nature",
  description:
    "利兹大学硕士毕业设计。通过渐进式自然环境互动，帮助用户从紧张逐渐进入平静。",
  tags: ["VR", "交互设计", "体验设计", "Unity"],
  status: "毕业设计",
  type: "VR / 交互设计 / 体验设计",
  tool: "Unity",
  englishIntro:
    "通过渐进式自然环境互动，支持压力缓解的 VR 体验。",
  metadataTitle: "自然疗愈｜Healing Through Nature｜富彬作品集",
  metadataDescription:
    "利兹大学硕士毕业设计：通过渐进式自然环境互动，支持压力缓解的 VR 交互设计案例。",
} as const;

export const healingScreenshots = {
  hero: {
    src: "/projects/healing-through-nature/hero.jpeg",
    label: "疗愈花园，Unity 场景截图",
    filename: "hero.jpeg",
  },
  stormForest: {
    src: "/projects/healing-through-nature/storm-forest.jpeg",
    label: "区域 01 暴风森林：雾、雨与低交互到达",
    filename: "storm-forest.jpeg",
  },
  stormForestHorizon: {
    src: "/projects/healing-through-nature/storm-forest-horizon.jpeg",
    label: "暴风森林：密林与残留张力",
    filename: "storm-forest-horizon.jpeg",
  },
  stormForestGameview: {
    src: "/projects/healing-through-nature/storm-forest-gameview.jpeg",
    label: "Unity Game 视图中的暴风森林",
    filename: "storm-forest-gameview.jpeg",
  },
  lightFlower: {
    src: "/projects/healing-through-nature/light-flower.jpeg",
    label: "区域 02 光之花：远处的光点",
    filename: "light-flower.jpeg",
  },
  lightFlowerDetail: {
    src: "/projects/healing-through-nature/light-flower-detail.jpeg",
    label: "光之花近景：注意，而不是任务",
    filename: "light-flower-detail.jpeg",
  },
  healingLake: {
    src: "/projects/healing-through-nature/healing-lake.jpeg",
    label: "区域 03 疗愈之湖：湖面与岸边路径",
    filename: "healing-lake.jpeg",
  },
  healingLakeContact: {
    src: "/projects/healing-through-nature/healing-lake-contact.jpeg",
    label: "疗愈之湖：手接触水面的第一阶段位置",
    filename: "healing-lake-contact.jpeg",
  },
  healingLakeSpirit: {
    src: "/projects/healing-through-nature/healing-lake-spirit.jpeg",
    label: "疗愈之湖：引导灵体作为视觉回应，而非任务目标",
    filename: "healing-lake-spirit.jpeg",
  },
  healingGarden: {
    src: "/projects/healing-through-nature/healing-garden.jpeg",
    label: "区域 04 疗愈花园：停留，而不是通关",
    filename: "healing-garden.jpeg",
  },
  healingGardenWide: {
    src: "/projects/healing-through-nature/healing-garden-wide.jpeg",
    label: "疗愈花园宽景：开阔、柔光与低唤醒",
    filename: "healing-garden-wide.jpeg",
  },
  healingGardenLight: {
    src: "/projects/healing-through-nature/healing-garden-light.jpeg",
    label: "疗愈花园光线与花田",
    filename: "healing-garden-light.jpeg",
  },
  healingGardenMeadow: {
    src: "/projects/healing-through-nature/healing-garden-meadow.jpeg",
    label: "疗愈花园草地与开放天空",
    filename: "healing-garden-meadow.jpeg",
  },
  unityLakeLayout: {
    src: "/projects/healing-through-nature/unity-lake-layout.jpeg",
    label: "Unity 中的疗愈之湖空间布局",
    filename: "unity-lake-layout.jpeg",
  },
  unityScript: {
    src: "/projects/healing-through-nature/unity-script.jpeg",
    label: "HealingLakeStage2SpiritVisual.cs：视觉回应层实现",
    filename: "unity-script.jpeg",
  },
} as const;

export const prototypeMedia = {
  video: {
    src: "/projects/healing-through-nature/healing-through-nature.mp4",
    poster: "/projects/healing-through-nature/hero.jpeg",
    label: "毕业设计原型视频：四个区域的 VR 走查",
    fileLinkLabel: "打开视频文件",
  },
  apk: {
    href: "/projects/healing-through-nature/HealingThroughNature.apk",
    label: "下载 Android VR 原型",
    filename: "HealingThroughNature.apk",
  },
} as const;

export const overviewMeta = [
  { label: "项目", value: "自然疗愈｜Healing Through Nature" },
  { label: "类型", value: "VR / 交互设计 / 体验设计" },
  { label: "工具", value: "Unity" },
  { label: "状态", value: "可运行 VR 原型 / 毕业设计" },
] as const;

export const conceptFlow = [
  { label: "用户研究" },
  { label: "渐进式互动" },
  { label: "渐进式沉浸" },
  { label: "用户能动性" },
  { label: "压力缓解" },
] as const;

export const emotionalArc = [
  { zone: "暴风森林", feeling: "强烈 / 紧张", role: "残留张力" },
  { zone: "光之花", feeling: "过渡", role: "柔化注意" },
  { zone: "疗愈之湖", feeling: "平静", role: "身体安定" },
  { zone: "疗愈花园", feeling: "疗愈", role: "保持平静" },
] as const;

export const researchChain = [
  { label: "方法" },
  { label: "发现" },
  { label: "决策" },
  { label: "原型" },
] as const;

export const affinityThemes = [
  {
    title: "节奏化进入",
    points: ["避免突然沉浸", "开头保持安静", "允许离开"],
  },
  {
    title: "可识别的自然",
    points: [
      "森林 / 湖泊 / 花园",
      "熟悉线索优先于奇观",
      "天气作为情绪，而非威胁",
    ],
  },
  {
    title: "柔和能动性",
    points: ["先注意，再行动", "准备好再触碰", "没有胜利状态压力"],
  },
] as const;

export const designLevers = [
  {
    title: "渐进暴露",
    body: "互动强度只在情绪状态逐渐安定后上升，而不是一开始就要求身体参与。",
  },
  {
    title: "柔和能动性",
    body: "用户可以注意、停留、离开，系统不催促、不计分、不宣告完成。",
  },
  {
    title: "身体在场",
    body: "真正有意义的动作是确认自己在场：尤其是手进入水面，而不是按按钮或抓取物体。",
  },
  {
    title: "情绪节奏",
    body: "区域存在是为了承载感觉变化。如果风景变了、平静没有推进，这条路径就失败了。",
  },
] as const;

export const interactionLoop = [
  { label: "进入区域" },
  { label: "感知" },
  { label: "行动" },
  { label: "世界回应" },
  { label: "继续" },
] as const;

export const supportLoop = [
  { label: "在场 · 身体在场" },
  { label: "许可 · 何时允许行动" },
  { label: "接触 · 手遇见水" },
  { label: "回应 · 涟漪 / 光 / 声" },
] as const;

export const zones = [
  {
    id: "storm-forest",
    index: "01",
    name: "暴风森林",
    feeling: "强烈 / 紧张",
    goal: "让已经处于压力中的用户被允许到达，而不是被要求立刻平静。",
    interaction: "只看、跟随路径。手部互动保持关闭。",
    environment: "密林、冷色、雾与雨；路径收束，光量压低。",
    transition: "残留张力：紧张被允许存在，而不是被强制抹去。",
    screenshot: "stormForest",
    supporting: "stormForestHorizon",
  },
  {
    id: "light-flower",
    index: "02",
    name: "光之花",
    feeling: "过渡",
    goal: "打开注意，但不抬高压力。",
    interaction: "靠近后可用手触碰光之花，触发一次环境回应；没有计分。",
    environment: "视野逐渐打开，花的微光替代任务提示。",
    transition: "柔化注意：好奇，但没有义务。",
    screenshot: "lightFlower",
    supporting: "lightFlowerDetail",
  },
  {
    id: "healing-lake",
    index: "03",
    name: "疗愈之湖",
    feeling: "平静",
    goal: "让身体第一次真正进入体验。",
    interaction: "手碰撞体进入 WaterSurface 才触发第一阶段；靠近湖岸垫不会捷径触发。",
    environment: "湖面、岸边路径、水面反射；涟漪、粒子与声音在触碰之后出现。",
    transition: "身体安定：平静变成身体可以相信的事。",
    screenshot: "healingLake",
    supporting: "healingLakeContact",
  },
  {
    id: "healing-garden",
    index: "04",
    name: "疗愈花园",
    feeling: "疗愈",
    goal: "结束时不打断已经建立的平静。",
    interaction: "没有最终任务、收集物或退出提示。用户可以停留。",
    environment: "开阔草地、柔光、低唤醒音频；结尾文字只是留下，不是通关。",
    transition: "保持平静：没有完成的紧迫感。",
    screenshot: "healingGarden",
    supporting: "healingGardenWide",
  },
] as const;

export const evaluationCriteria = [
  "第一阶段必须是真实的水面接触，不能靠靠近湖岸垫捷径触发。",
  "疗愈之湖不能因为额外互动变成小游戏。",
] as const;

export const evaluationObservations = [
  {
    zone: "暴风森林",
    note: "到达感觉安静，而不是刺激。",
  },
  {
    zone: "疗愈之湖",
    note: "水面接触让在场变成身体经验。",
  },
  {
    zone: "疗愈花园",
    note: "没有胜利状态的结尾，仍然完整。",
  },
] as const;

export const reflectionPoints = [
  "研究输出的不是功能清单，而是约束：节奏化进入、可识别的自然、柔和能动性。这些约束直接决定了暴风森林只能看、疗愈之湖才能触。",
  "渐进式沉浸不是把场景越做越华丽，而是让情绪强度下降的同时，互动丰富度才缓慢上升。两者不能同时升高。",
  "环境变化是体验节奏：早期密林收束，后期开阔；水是身体阈值，不是装饰。",
  "用户能动性与引导的平衡在于许可：系统安排路径和氛围，但不强迫表现。触摸只在用户准备好时发生。",
  "原型评估把成功标准写成保护平静：真实触水、拒绝小游戏化。改进方式是去掉压力，而不是增加功能。",
] as const;

export const outcomePoints = [
  "一条单向四区域路径：暴风森林 → 光之花 → 疗愈之湖 → 疗愈花园。",
  "把水面接触设计成安定互动，而不是游戏奖励。",
  "把克制本身作为交互设计方法，并在 Unity 中做成可运行的 VR 原型。",
] as const;

export const aiUseDisclosure =
  "本项目将 AI 作为设计和开发辅助工具。Cursor 用于协助文案撰写、视觉规划、版式以及 Unity 编程。最终 Unity 截图由作者本人拍摄，最终环境中未使用 AI 生成的图片或 3D 模型。";
