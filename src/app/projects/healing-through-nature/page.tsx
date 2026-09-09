import type { Metadata } from "next";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { DecisionCard } from "@/components/case-study/DecisionCard";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { ProductScreenshot } from "@/components/case-study/ProductScreenshot";
import { ProjectHero } from "@/components/case-study/ProjectHero";
import { PrototypeVideo } from "@/components/case-study/PrototypeVideo";
import { StatusBadge } from "@/components/case-study/StatusBadge";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/TextLink";
import {
  affinityThemes,
  aiUseDisclosure,
  conceptFlow,
  designLevers,
  emotionalArc,
  evaluationCriteria,
  evaluationObservations,
  healingScreenshots,
  healingThroughNatureCase,
  interactionLoop,
  outcomePoints,
  overviewMeta,
  prototypeMedia,
  reflectionPoints,
  researchChain,
  supportLoop,
  zones,
} from "@/content/healing-through-nature";

export const metadata: Metadata = {
  title: healingThroughNatureCase.metadataTitle,
  description: healingThroughNatureCase.metadataDescription,
};

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4 text-base leading-7 text-ink-muted">
      {children}
    </div>
  );
}

export default function HealingThroughNaturePage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <ProjectHero
          backHref="/"
          backLabel="← 返回作品"
          title={healingThroughNatureCase.title}
          subtitle={healingThroughNatureCase.subtitle}
          description={healingThroughNatureCase.description}
          tags={healingThroughNatureCase.tags}
          status={healingThroughNatureCase.status}
        />

        <CaseStudySection title="01 / 概述">
          <p className="max-w-2xl text-base leading-7 text-ink">
            {healingThroughNatureCase.englishIntro}
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {overviewMeta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs tracking-wide text-ink-muted">{item.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 flex flex-wrap gap-2">
            <li>
              <StatusBadge>VR 交互设计</StatusBadge>
            </li>
            <li>
              <StatusBadge>体验设计</StatusBadge>
            </li>
            <li>
              <StatusBadge>Unity</StatusBadge>
            </li>
            <li>
              <StatusBadge tone="live">可运行 VR 原型</StatusBadge>
            </li>
          </ul>
          <div className="mt-10">
            <ProductScreenshot {...healingScreenshots.hero} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="02 / 问题与动机">
          <Prose>
            <p>学生压力普遍存在。可到达的恢复性自然接触并不普遍。</p>
            <p>
              利兹校园生活中，户外恢复往往受时间与距离限制。现有身心健康工具大多是静态、无场所的。突然进入华丽的
              VR 自然场景，又可能在用户还没准备好时造成过度刺激。
            </p>
            <p>真正缺的不是自然内容，而是一条可以被身体跟上的进入平静的路径。</p>
          </Prose>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            核心问题不是缺少自然风景，而是缺少渐进进入平静的方式。
          </p>
          <div className="mt-10">
            <ProductScreenshot {...healingScreenshots.stormForest} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="03 / 用户研究">
          <Prose>
            <p>
              研究使用主题亲和图整理恢复需求与障碍（Braun and Clarke,
              2006）。它产出的是设计约束，而不是功能清单。
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <FlowDiagram steps={researchChain} />
            <div className="max-w-xl space-y-4 text-base leading-7 text-ink-muted lg:pt-2">
              <p>方法：把恢复需求与进入障碍做成亲和主题。</p>
              <p>
                发现：短暂的恢复很重要；用户会避开一开始就显得强烈或通用的身心健康工具。
              </p>
              <p>
                决策：用可识别的自然区域做节奏化互动——柔和能动性，没有胜利状态。
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {affinityThemes.map((theme) => (
              <article key={theme.title} className="border border-line bg-paper p-5">
                <h3 className="text-sm font-medium text-ink">{theme.title}</h3>
                <ul className="mt-3 space-y-1 text-sm leading-6 text-ink-muted">
                  {theme.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="04 / 设计机会">
          <Prose>
            <p>把「自然疗愈」设计成有节奏的自然旅程，而不是 VR 奇观。</p>
            <p>
              互动强度只应随着情绪安定而上升，并穿过暴风森林、光之花、疗愈之湖和疗愈花园。
            </p>
          </Prose>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-5">
            {designLevers.map((lever, index) => (
              <DecisionCard key={lever.title} index={index + 1} title={lever.title}>
                {lever.body}
              </DecisionCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="05 / 体验概念">
          <Prose>
            <p>起点不是“用 VR 逃离”，而是渐进恢复。</p>
            <p>
              概念成熟后锁定四件事：四区域结构、水面接触作为关键身体时刻、以及为在场而做的
              Unity 实现——路径、声音、光线与手的互动。
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <FlowDiagram steps={conceptFlow} />
            <p className="max-w-xl text-base leading-7 text-ink-muted lg:pt-2">
              用户通过逐渐变化的自然环境和互动方式，从较强的环境刺激进入更加平静、治愈的自然空间。
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emotionalArc.map((item, index) => (
              <li key={item.zone} className="border border-line p-5">
                <p className="text-xs tracking-wide text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-sm font-medium text-ink">{item.zone}</h3>
                <p className="mt-2 text-sm text-ink">{item.feeling}</p>
                <p className="mt-1 text-sm leading-6 text-ink-muted">{item.role}</p>
              </li>
            ))}
          </ol>
        </CaseStudySection>

        <CaseStudySection title="06 / 交互设计">
          <Prose>
            <p>用户不是被动观看环境，而是通过互动逐渐参与其中。</p>
            <p>
              有意义的动作是确认在场的接触，尤其是手进入水面。按钮和抓取会被理解成游戏，而不是恢复。
            </p>
          </Prose>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <StatusBadge>身体化互动</StatusBadge>
            </li>
            <li>
              <StatusBadge>用户能动性</StatusBadge>
            </li>
            <li>
              <StatusBadge>渐进式互动</StatusBadge>
            </li>
            <li>
              <StatusBadge>柔和能动性</StatusBadge>
            </li>
          </ul>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs text-ink-muted">互动回路</p>
              <FlowDiagram steps={interactionLoop} />
            </div>
            <div>
              <p className="mb-4 text-xs text-ink-muted">支持回路</p>
              <FlowDiagram steps={supportLoop} />
            </div>
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            互动只有在加深平静时才成立。
          </p>
          <div className="mt-10">
            <ProductScreenshot {...healingScreenshots.healingLakeContact} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="07 / 渐进式沉浸">
          <Prose>
            <p>
              体验是单向情绪流：看 → 漫步 → 触碰 →
              停留。没有分支任务。平静是累积出来的，用户不必靠表现去赢得下一层安静。
            </p>
            <p>
              情绪强度下降时，互动丰富度才上升。暴风森林只看；光之花注意；疗愈之湖触碰；疗愈花园停留。
            </p>
          </Prose>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-ink">
            暴风森林
            <span className="mx-2 text-ink-muted">→</span>
            光之花
            <span className="mx-2 text-ink-muted">→</span>
            疗愈之湖
            <span className="mx-2 text-ink-muted">→</span>
            疗愈花园
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ProductScreenshot {...healingScreenshots.stormForestHorizon} />
            <ProductScreenshot {...healingScreenshots.healingGardenMeadow} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="08 / 四个区域">
          <Prose>
            <p>四个区域是体验进程的核心。它们按情绪章节排列，而不是按场景差异排列。</p>
          </Prose>
          <div className="mt-8 space-y-16">
            {zones.map((zone) => (
              <article key={zone.id} className="min-w-0">
                <p className="text-xs tracking-wide text-ink-muted">
                  {zone.index} / {zone.feeling}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-ink sm:text-2xl">
                  {zone.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-ink">
                  {zone.goal}
                </p>
                <dl className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs text-ink-muted">互动</dt>
                    <dd className="mt-2 text-sm leading-6 text-ink">{zone.interaction}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-muted">环境</dt>
                    <dd className="mt-2 text-sm leading-6 text-ink">{zone.environment}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-muted">情绪过渡</dt>
                    <dd className="mt-2 text-sm leading-6 text-ink">{zone.transition}</dd>
                  </div>
                </dl>
                <div className="mt-8 space-y-6">
                  <ProductScreenshot
                    {...healingScreenshots[zone.screenshot]}
                  />
                  <ProductScreenshot
                    {...healingScreenshots[zone.supporting]}
                  />
                </div>
              </article>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection id="prototype" title="09 / Unity 原型">
          <Prose>
            <p>
              项目最终在 Unity 中实现为可运行的 VR
              原型。这是毕业设计中的可运行 VR 原型，不是完整商业产品。
            </p>
            <p>
              玩家面对的是世界的回应，而不是系统结构。XR Origin、触发器与音频源服务于这条回路：在场 →
              许可 → 接触 → 回应。
            </p>
            <p>
              疗愈之湖的第一阶段只在手碰撞体进入 WaterSurface
              时触发。桌面按 E 仅用于编辑器测试，不影响 VR 触发逻辑。
            </p>
          </Prose>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <StatusBadge tone="live">可运行 Unity 构建</StatusBadge>
            </li>
            <li>
              <StatusBadge>XR 手部碰撞体</StatusBadge>
            </li>
            <li>
              <StatusBadge>WaterSurface 触发器</StatusBadge>
            </li>
            <li>
              <StatusBadge tone="mock">桌面按 E 仅用于编辑器测试</StatusBadge>
            </li>
          </ul>
          <div className="mt-10">
            <PrototypeVideo {...prototypeMedia.video} />
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-ink-muted">
            Android VR 安装包作为可下载原型，不嵌入页面主流程。
            {" "}
            <TextLink href={prototypeMedia.apk.href}>
              {prototypeMedia.apk.label}
            </TextLink>
          </p>
          <div className="mt-10 space-y-8">
            <ProductScreenshot {...healingScreenshots.unityLakeLayout} />
            <ProductScreenshot {...healingScreenshots.healingLakeSpirit} />
            <ProductScreenshot {...healingScreenshots.unityScript} />
            <ProductScreenshot {...healingScreenshots.stormForestGameview} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="10 / 用户评估">
          <Prose>
            <p>
              用户评估针对可运行原型做体验走查，判断标准是安定，而不是功能偏好。
            </p>
          </Prose>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {evaluationCriteria.map((item, index) => (
              <article key={item} className="border border-line p-5">
                <p className="text-xs tracking-wide text-ink-muted">
                  标准 {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink">{item}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {evaluationObservations.map((item) => (
              <article key={item.zone} className="border-t border-line pt-5">
                <h3 className="text-sm font-medium text-ink">{item.zone}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{item.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            平静是一串许可。改进意味着去掉压力，而不是增加功能。
          </p>
        </CaseStudySection>

        <CaseStudySection title="11 / 项目反思">
          <Prose>
            <p>这个项目让我从交互 / 体验设计师的位置重新理解 VR：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-3 pl-5 text-base leading-7 text-ink">
            {reflectionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="12 / 最终成果">
          <Prose>
            <p>最终留下的不是一套界面，而是一条可以被身体跟上的情绪路径。</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {outcomePoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-10">
            <ProductScreenshot {...healingScreenshots.healingGarden} />
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-muted">
            把这份平静带走，无论你去向何处。
          </p>
          <p className="mt-6 text-sm leading-6 text-ink-muted">
            <TextLink href="#prototype">观看原型视频</TextLink>
            {" · "}
            <TextLink href={prototypeMedia.apk.href}>
              {prototypeMedia.apk.label}
            </TextLink>
          </p>
        </CaseStudySection>

        <CaseStudySection title="AI 使用说明">
          <Prose>
            <p>{aiUseDisclosure}</p>
          </Prose>
        </CaseStudySection>
      </Container>
    </main>
  );
}
