import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { DecisionCard } from "@/components/case-study/DecisionCard";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { ProductScreenshot } from "@/components/case-study/ProductScreenshot";
import { ProjectHero } from "@/components/case-study/ProjectHero";
import { StatusBadge } from "@/components/case-study/StatusBadge";
import { Container } from "@/components/layout/Container";
import {
  architectureFlow,
  assessmentFlow,
  assessmentStates,
  completedItems,
  designDecisions,
  learningPlanExample,
  liveAiStages,
  mockStages,
  nextSteps,
  productConceptFlow,
  skillGapCase,
  skillGapExamples,
  skillGapScreenshots,
  skillProfileExample,
} from "@/content/ai-skill-gap";

export const metadata: Metadata = {
  title: skillGapCase.metadataTitle,
  description: skillGapCase.metadataDescription,
};

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4 text-base leading-7 text-ink-muted">
      {children}
    </div>
  );
}

function ExampleList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="text-xs text-ink-muted">{title}</p>
      <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillGapCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <ProjectHero
          backHref="/"
          backLabel="← 返回作品"
          title={skillGapCase.title}
          subtitle={skillGapCase.subtitle}
          description={skillGapCase.description}
          tags={skillGapCase.tags}
          status={skillGapCase.status}
        />

        <CaseStudySection title="学习新技能时，我真的需要重新开始吗？">
          <Prose>
            <p>这个想法来自我自己的学习经历。</p>
            <p>
              在学习 AI、React 和相关技术的过程中，我发现自己经常已经掌握了一部分基础，但新的学习路径仍然从最开始讲起。
            </p>
            <p>真正的问题不是“没有学习资料”，而是：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            <li>我已经掌握了什么？</li>
            <li>我对自己能力的判断准确吗？</li>
            <li>我真正缺少哪些能力？</li>
            <li>在有限时间里应该先学什么？</li>
          </ul>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            先了解学习者，再决定应该学什么。
          </p>
        </CaseStudySection>

        <CaseStudySection title="先理解，再验证，最后规划">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <FlowDiagram steps={productConceptFlow} />
            <p className="max-w-xl text-base leading-7 text-ink-muted lg:pt-2">
              产品不是在用户输入后立刻生成课程，而是逐步降低对用户能力理解的不确定性。
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="01 / 先确认 AI 是否真正理解了用户">
          <Prose>
            <p>用户可以直接用自然语言描述：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            <li>想学习什么</li>
            <li>已经会什么</li>
            <li>有多少时间</li>
          </ul>
          <blockquote className="mt-6 max-w-2xl rounded-sm border border-line px-4 py-3 text-sm leading-7 text-ink">
            “我想在两周内学会制作 AI Prototype，我已经会 Python 和 FastAPI，但 React
            只会一点。”
          </blockquote>
          <Prose>
            <p className="mt-6">系统将自然语言转化为结构化信息：</p>
          </Prose>
          <ul className="mt-3 flex max-w-2xl flex-wrap gap-2">
            {["学习目标", "已有能力", "学习时间"].map((item) => (
              <li key={item}>
                <StatusBadge>{item}</StatusBadge>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
            然后让用户确认后再进入 Assessment。
          </p>
          <div className="mt-8 max-w-2xl">
            <p className="text-xs text-ink-muted">设计决策</p>
            <p className="mt-2 text-base leading-7 text-ink">
              AI 不应该在第一次理解用户后就直接继续。先给用户一个确认机会，可以降低错误理解继续向后传播的风险。
            </p>
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs text-ink-muted">AI 状态</p>
            <StatusBadge tone="live">真实 DeepSeek API</StatusBadge>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...skillGapScreenshots.understanding} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="02 / 用户说“会”，不代表真的掌握">
          <Prose>
            <p>用户可能高估、低估，或者记错自己的能力。</p>
            <p>
              因此产品不会只依赖用户自述，而是通过任务型问题寻找能力证据。
            </p>
          </Prose>
          <div className="mt-8">
            <p className="mb-4 text-xs text-ink-muted">展示逻辑</p>
            <FlowDiagram steps={assessmentFlow} />
          </div>
          <div className="mt-8 max-w-2xl">
            <p className="text-xs text-ink-muted">重点设计</p>
            <p className="mt-2 text-base leading-7 text-ink">
              当 AI 无法确定时，不应该猜。
            </p>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              如果回答不足以证明能力，系统可以继续追问，而不是直接判定用户“会”或“不会”。
            </p>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs text-ink-muted">状态包括</p>
            <ul className="flex flex-wrap gap-2">
              {assessmentStates.map((state) => (
                <li key={state}>
                  <StatusBadge tone={state === "Error" ? "error" : "state"}>
                    {state}
                  </StatusBadge>
                </li>
              ))}
            </ul>
          </div>
          <Prose>
            <p className="mt-8">这不是考试系统。</p>
            <p>
              设计目标不是打分，而是判断目前是否有足够证据支持某项能力判断。
            </p>
          </Prose>
          <div className="mt-6">
            <p className="mb-2 text-xs text-ink-muted">AI 状态</p>
            <StatusBadge tone="live">真实 DeepSeek API</StatusBadge>
          </div>
          <div className="mt-8 grid gap-5">
            <ProductScreenshot {...skillGapScreenshots.assessmentQuestion} />
            <ProductScreenshot {...skillGapScreenshots.assessmentResult} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="03 / 把零散回答整理成能力画像">
          <Prose>
            <p>
              Assessment 完成后，产品将已有技能与能力判断整理成结构化 Skill
              Profile。
            </p>
          </Prose>
          <div className="mt-6 grid max-w-2xl gap-6 sm:grid-cols-2">
            <ExampleList
              title="已掌握"
              items={skillProfileExample.mastered}
            />
            <ExampleList
              title="需要提升"
              items={skillProfileExample.toImprove}
            />
          </div>
          <div className="mt-8">
            <p className="mb-2 text-xs text-ink-muted">当前实现状态</p>
            <StatusBadge tone="mock">Prototype Logic / Mock Data</StatusBadge>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...skillGapScreenshots.skillProfile} />
          </div>
        </CaseStudySection>

        <CaseStudySection
          emphasize
          title="04 / 从“我想学什么”变成“我真正缺什么”"
        >
          <Prose>
            <p>
              产品将学习目标、已有能力和能力评估结果连接起来，形成需要补足的能力。
            </p>
            <p>每个 Gap 可以包含简短的判断依据。</p>
          </Prose>
          <ul className="mt-6 max-w-xl space-y-3">
            {skillGapExamples.map((item) => (
              <li
                key={item}
                className="border border-line bg-paper px-4 py-3 text-sm text-ink sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-2 text-xs text-ink-muted">当前状态</p>
            <StatusBadge tone="mock">Prototype Logic / Mock Data</StatusBadge>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...skillGapScreenshots.skillGap} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="05 / 把技能差距转化为下一步行动">
          <Prose>
            <p>
              最终阶段根据技能差距和用户可用时间，将学习内容组织成阶段化路径。
            </p>
          </Prose>
          <div className="mt-6 max-w-xl border border-line">
            <div className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3">
              <p className="text-xs text-ink-muted">
                {learningPlanExample.durationLabel}
              </p>
              <p className="text-sm text-ink">{learningPlanExample.duration}</p>
            </div>
            <ul>
              {learningPlanExample.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3 text-sm last:border-b-0"
                >
                  <span className="text-ink">{item.name}</span>
                  <span className="shrink-0 text-ink-muted">{item.days}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <p className="mb-2 text-xs text-ink-muted">当前状态</p>
            <StatusBadge tone="mock">Prototype Logic / Mock Data</StatusBadge>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...skillGapScreenshots.learningPlan} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="AI 在产品中如何工作">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <ArchitectureDiagram steps={architectureFlow} />
            <aside className="min-w-0 border border-line p-5 sm:p-6">
              <h3 className="text-sm font-medium tracking-tight text-ink">
                Implementation Status
              </h3>
              <p className="mt-6 text-xs text-ink-muted">已真实接入 AI</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
                {liveAiStages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-muted">当前使用 Mock</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
                {mockStages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
          <p className="mt-10 max-w-2xl text-base leading-7 text-ink-muted">
            当前 MVP 的目标不是一次性完成所有 AI 能力，而是先验证核心 AI
            Interaction，并用 Mock 跑通完整产品流程。
          </p>
        </CaseStudySection>

        <CaseStudySection title="三个关键设计决策">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-5">
            {designDecisions.map((decision, index) => (
              <DecisionCard
                key={decision.title}
                index={index + 1}
                title={decision.title}
              >
                {decision.body}
              </DecisionCard>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="区分“AI 出错”和“用户不会”">
          <Prose>
            <p>模型调用失败、网络失败和用户能力不足是完全不同的情况。</p>
            <p>产品中 Error 是独立状态：</p>
          </Prose>
          <div className="mt-6 flex max-w-xl min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex-1 rounded-sm border border-line px-4 py-3 text-center text-sm text-ink">
              AI / API Failure
            </div>
            <p className="text-center text-sm text-ink-muted" aria-hidden>
              ≠
            </p>
            <div className="flex-1 rounded-sm border border-line px-4 py-3 text-center text-sm text-ink">
              User Skill Judgment
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <StatusBadge tone="error">Error</StatusBadge>
            </li>
            <li>
              <StatusBadge>Confirmed</StatusBadge>
            </li>
            <li>
              <StatusBadge>Uncertain</StatusBadge>
            </li>
            <li>
              <StatusBadge>Not Yet</StatusBadge>
            </li>
          </ul>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted">
            当 AI 分析失败时，用户可以重试，不需要重新输入整个流程，也不会被记录为能力不足。
          </p>
        </CaseStudySection>

        <CaseStudySection title="当前完成度">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-ink">已完成</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-muted">
                {completedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-ink">下一步</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-muted">
                {nextSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="这个项目让我重新理解了 AI 产品设计">
          <Prose>
            <p>我最初关注的是“AI 能不能生成学习计划”。</p>
            <p>但在实际设计与实现过程中，我发现更重要的问题是：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            <li>AI 在什么时候应该介入？</li>
            <li>AI 应该看到什么信息？</li>
            <li>AI 输出如何影响产品下一步？</li>
            <li>用户什么时候需要确认 AI？</li>
            <li>当 AI 不确定或失败时，产品应该怎么响应？</li>
          </ul>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            AI 产品设计不只是把模型接进界面，而是设计“人、AI
            和产品状态”之间的关系。
          </p>
        </CaseStudySection>
      </Container>
    </main>
  );
}
