import type { Metadata } from "next";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { DecisionCard } from "@/components/case-study/DecisionCard";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { ProductScreenshot } from "@/components/case-study/ProductScreenshot";
import { ProjectHero } from "@/components/case-study/ProjectHero";
import { StatusBadge } from "@/components/case-study/StatusBadge";
import { Container } from "@/components/layout/Container";
import {
  budgetNumbers,
  existingWorkflow,
  finalFlow,
  interactionPrinciples,
  overviewMeta,
  productFlow,
  researchObservations,
  roomwiseCase,
  roomwiseInteractionDemo,
  roomwiseScreenshots,
  testFindings,
} from "@/content/roomwise";
import { publicFileExists } from "@/lib/public-file";

export const metadata: Metadata = {
  title: roomwiseCase.metadataTitle,
  description: roomwiseCase.metadataDescription,
};

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4 text-base leading-7 text-ink-muted">
      {children}
    </div>
  );
}

export default function RoomwiseCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <ProjectHero
          backHref="/"
          backLabel="← 返回作品"
          title={roomwiseCase.title}
          subtitle={roomwiseCase.subtitle}
          description={roomwiseCase.description}
          tags={roomwiseCase.tags}
          status={roomwiseCase.status}
        />

        <a
          href="/projects/roomwise/visual-system"
          className="group mt-6 flex max-w-xl items-start justify-between gap-4 rounded-sm border border-[#D9CFC0] bg-[#F3EEE6] px-4 py-3.5 transition-colors duration-150 hover:bg-[#EDE6DA] sm:mt-8 sm:px-5 sm:py-4"
        >
          <span className="min-w-0">
            <span className="block text-sm font-medium text-ink">
              Visual System / 组件规范
            </span>
            <span className="mt-1 block text-xs leading-5 text-ink-muted">
              从「住好」界面提取的组件与视觉规范
            </span>
          </span>
          <span
            className="shrink-0 text-base leading-none text-ink transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden
          >
            →
          </span>
        </a>

        <CaseStudySection title="01 / 项目概览">
          <p className="max-w-2xl text-base leading-7 text-ink">
            灵感越来越容易获得，但用户不知道如何判断什么真正适合自己的空间。
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
              <StatusBadge>UX / 交互设计</StatusBadge>
            </li>
            <li>
              <StatusBadge>产品体验</StatusBadge>
            </li>
            <li>
              <StatusBadge>用户测试</StatusBadge>
            </li>
            <li>
              <StatusBadge tone="live">可运行原型</StatusBadge>
            </li>
          </ul>
          <div className="mt-10">
            <ProductScreenshot {...roomwiseScreenshots.hero} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="02 / 用户研究">
          <Prose>
            <p>年轻租客现在很容易从这些地方获得空间灵感：小红书、家居平台、家具电商、宜家、淘宝、朋友推荐。</p>
            <p>灵感很多，不等于更容易完成布置。</p>
            <p>核心用户是有明确空间改造意愿，但不愿投入大量时间搜索、比较和试错的年轻租客。</p>
          </Prose>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            真正缺失的不是灵感，而是做决定的依据。
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ProductScreenshot {...roomwiseScreenshots.room} />
            <ProductScreenshot {...roomwiseScreenshots.inspirationSpace} />
          </div>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <FlowDiagram steps={existingWorkflow} />
            <p className="max-w-xl text-base leading-7 text-ink-muted lg:pt-2">
              从灵感到搁置的决策链：发现喜欢的空间，收藏，找家具 / 参考案例，比较不同选择，不确定是否适合自己的房间，然后犹豫 / 放弃布置。
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="03 / 问题">
          <Prose>
            <p>用户不是没有灵感，而是不知道如何把灵感变成自己的空间。</p>
          </Prose>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {researchObservations.map((item) => (
              <article
                key={item.num}
                className={
                  item.num === "03"
                    ? "border border-line bg-paper p-5 sm:col-span-2"
                    : "border-t border-line pt-5"
                }
              >
                <p className="text-xs tracking-wide text-ink-muted">{item.num}</p>
                <h3 className="mt-3 text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-wide text-ink-muted">核心问题</p>
              <p className="mt-3 text-base leading-7 text-ink">
                当用户看到喜欢的空间案例时，很难判断其中的空间比例、家具和视觉风格是否适合自己的房间，因此容易陷入反复搜索、比较和犹豫。
              </p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-ink-muted">用户任务</p>
              <p className="mt-3 text-base leading-7 text-ink">
                当我看到一个喜欢的空间案例时，我希望快速判断它是否适合我的房间，并知道应该调整什么，避免买错和反复试错。
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="04 / 设计机会">
          <p className="max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            降低用户从“喜欢一个空间”到“决定如何布置”的判断成本。
          </p>
          <div className="mt-8">
            <FlowDiagram steps={productFlow} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="05 / 交互设计">
          <Prose>
            <p>核心交互是空间适配。</p>
            <p>不是告诉用户应该怎么做，而是让用户知道为什么这样建议。</p>
          </Prose>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-5">
            {interactionPrinciples.map((item, index) => (
              <DecisionCard key={item.title} index={index + 1} title={item.title}>
                {item.body}
              </DecisionCard>
            ))}
          </div>
          <div className="mt-10">
            <ProductScreenshot {...roomwiseScreenshots.compatibilityPage} />
          </div>
        </CaseStudySection>

        <CaseStudySection title={roomwiseInteractionDemo.title}>
          <p className="text-sm tracking-wide text-ink-muted">
            {roomwiseInteractionDemo.subtitle}
          </p>
          <figure className="mt-6 max-w-3xl">
            {publicFileExists(roomwiseInteractionDemo.src) ? (
              <div className="overflow-hidden rounded-sm border border-line bg-[#f3f1ec]">
                <video
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-[#f3f1ec] object-contain"
                >
                  <source
                    src={roomwiseInteractionDemo.src}
                    type="video/mp4"
                  />
                </video>
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-line bg-[#f3f1ec]">
                <p className="text-sm text-ink-muted">Interaction Demo</p>
              </div>
            )}
            <figcaption className="mt-3 max-w-2xl text-sm leading-6 text-ink-muted">
              {roomwiseInteractionDemo.caption}
            </figcaption>
          </figure>
        </CaseStudySection>

        <CaseStudySection title="06 / 智能分析作为增强">
          <Prose>
            <p>
              智能能力用于辅助理解房间与参考空间、整理判断依据和生成调整建议；最终决定仍由用户完成。
            </p>
          </Prose>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <StatusBadge>理解房间与参考空间</StatusBadge>
            </li>
            <li>
              <StatusBadge>整理判断依据</StatusBadge>
            </li>
            <li>
              <StatusBadge>生成调整建议</StatusBadge>
            </li>
            <li>
              <StatusBadge tone="live">用户保留决策权</StatusBadge>
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection title="07 / 用户测试">
          <Prose>
            <p>测试任务：五位用户。假设刚租下一间 10 平方米的房间，预算 1000 元，使用这个产品完成一次布置规划。</p>
          </Prose>
          <div className="mt-8 space-y-6">
            {testFindings.map((item, index) => (
              <article key={item.title} className="border-t border-line pt-5">
                <p className="text-xs tracking-wide text-ink-muted">
                  发现 {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{item.impact}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-ink-muted">
            用户追问：为什么这个结果成立？
          </p>
        </CaseStudySection>

        <CaseStudySection title="08 / 设计迭代">
          <Prose>
            <p>测试前，页面直接给出判断和建议。用户看得到结果，不知道结果为什么成立。</p>
            <p>设计后，判断、评分参考、展开解释、调整原因和影响说明，让建议可以被检查。</p>
          </Prose>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ProductScreenshot {...roomwiseScreenshots.before} />
            <ProductScreenshot {...roomwiseScreenshots.after} />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {budgetNumbers.map((item) => (
              <article key={item.label} className="border-t border-line pt-5">
                <p className="text-xs tracking-wide text-ink-muted">{item.label}</p>
                <p className="mt-3 text-lg font-medium text-ink">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-ink-muted">
            将方案拆分为预算内可执行的第一阶段。降低成本 ≠ 完成目标。
          </p>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            从“直接给出建议”，变成“解释建议为什么成立”。
          </p>
        </CaseStudySection>

        <CaseStudySection title="09 / 最终体验">
          <Prose>
            <p>从空间灵感，到可以开始行动的布置方案。</p>
          </Prose>
          <div className="mt-10 space-y-8">
            <ProductScreenshot {...roomwiseScreenshots.compatibility} />
            <ProductScreenshot {...roomwiseScreenshots.plan} />
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-3">
            {finalFlow.map((item) => (
              <li key={item.key} className="min-w-0">
                <ProductScreenshot
                  {...roomwiseScreenshots[item.key]}
                  thumb
                  thumbFit={item.key === "cover" ? "contain" : "cover"}
                />
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-base leading-7 text-ink-muted">
            最初我关注“如何生成更好的空间方案”，测试后发现，更关键的问题是帮助用户判断哪些想法真正适合自己的空间。因此项目最终从“生成方案”转向“辅助用户做空间决策”。
          </p>
        </CaseStudySection>
      </Container>
    </main>
  );
}
