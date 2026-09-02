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
  agentDecisionFlow,
  architectureFlow,
  careerAgentCase,
  careerAgentScreenshots,
  currentLimits,
  designDecisions,
  deterministicItems,
  exampleChips,
  mockItems,
  productConceptFlow,
  realItems,
  reflectionPoints,
  resultSources,
  toolChoices,
  uiSimulationItems,
  userInputs,
} from "@/content/ai-career-agent";

export const metadata: Metadata = {
  title: careerAgentCase.metadataTitle,
  description: careerAgentCase.metadataDescription,
};

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4 text-base leading-7 text-ink-muted">
      {children}
    </div>
  );
}

export default function CareerAgentCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <ProjectHero
          backHref="/"
          backLabel="← 返回作品"
          title={careerAgentCase.title}
          subtitle={careerAgentCase.subtitle}
          description={careerAgentCase.description}
          tags={careerAgentCase.tags}
          status={careerAgentCase.status}
        />

        <CaseStudySection title="01 / Overview">
          <p className="max-w-2xl text-base leading-7 text-ink">
            {careerAgentCase.englishTitle}
          </p>
          <Prose>
            <p className="mt-4">
              A natural-language career assistant that combines LLM reasoning,
              tool calling, live job data and deterministic skill-gap analysis.
            </p>
          </Prose>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <StatusBadge>React + Vite</StatusBadge>
            </li>
            <li>
              <StatusBadge>FastAPI</StatusBadge>
            </li>
            <li>
              <StatusBadge>DeepSeek + OpenAI SDK</StatusBadge>
            </li>
            <li>
              <StatusBadge>Adzuna API</StatusBadge>
            </li>
            <li>
              <StatusBadge tone="live">Working Prototype</StatusBadge>
            </li>
          </ul>
          <div className="mt-8">
            <ProductScreenshot {...careerAgentScreenshots.home} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="02 / Problem">
          <Prose>
            <p>传统职业探索工具通常要求用户先填写大量筛选条件：职位、城市、技能、薪资、经验。</p>
            <p>但用户真正提出的问题通常更自然：</p>
          </Prose>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink">
            “我会 Figma 和用户研究，想找 AI 产品相关工作，应该补什么能力？”
          </p>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            让用户直接表达职业问题，再由 AI 判断需要什么工具和信息。
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted">
            设计目标不是增加更多筛选器，也不是做一个会聊天的招聘网站。
          </p>
        </CaseStudySection>

        <CaseStudySection title="03 / Product Concept">
          <Prose>
            <p>这是一个 tool-calling assistant，不是普通 Chatbot。</p>
            <p>
              用户只提交一句话。模型先判断要不要调用工具，事实数据来自工具，最后再由模型解释。
            </p>
          </Prose>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <FlowDiagram steps={productConceptFlow} />
            <p className="max-w-xl text-base leading-7 text-ink-muted lg:pt-2">
              自然语言进入 DeepSeek。模型选择 search_jobs、analyze_skill_gap，或直接回答。工具结果回来后，再生成职业建议。
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="04 / Natural Language Input">
          <Prose>
            <p>产品是单页输入，不是多步骤问卷。</p>
            <p>用户只需要表达自己的职业目标、当前背景、城市、技能和问题，不必先理解系统的数据结构。</p>
          </Prose>
          <ul className="mt-6 flex max-w-2xl flex-wrap gap-2">
            {userInputs.map((item) => (
              <li key={item}>
                <StatusBadge>{item}</StatusBadge>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-3 text-xs text-ink-muted">现有 Example Chips</p>
            <ul className="flex flex-wrap gap-2">
              {exampleChips.map((item) => (
                <li key={item}>
                  <StatusBadge>{item}</StatusBadge>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...careerAgentScreenshots.input} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="05 / Agent Decision">
          <Prose>
            <p>第一次 DeepSeek completion 只做判断。模型在三种路径里选：</p>
          </Prose>
          <ul className="mt-4 flex max-w-2xl flex-wrap gap-2">
            {toolChoices.map((item) => (
              <li key={item}>
                <StatusBadge>{item}</StatusBadge>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-4 text-xs text-ink-muted">需要 Tool 时</p>
            <FlowDiagram steps={agentDecisionFlow} />
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            The model decides what information it needs before producing the
            final response.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted">
            这是一轮 tool calling：第一次补全决定工具，第二次补全写答案。没有多轮会话，也不是独立的 agent graph。
          </p>
        </CaseStudySection>

        <CaseStudySection title="06 / Tool Design">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs text-ink-muted">Tool 01</p>
              <h3 className="text-sm font-medium text-ink">search_jobs</h3>
              <div className="mt-3">
                <StatusBadge tone="live">Adzuna UK</StatusBadge>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink">
                <li>英国使用 Adzuna，最多返回 5 条</li>
                <li>jobs[] 来自外部 API 返回值</li>
                <li>模型不能自己编造岗位</li>
              </ul>
              <p className="mt-4 text-sm leading-6 text-ink-muted">
                Job facts come from the external source, not from the LLM.
              </p>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                中国城市会路由到 China Provider，目前是 mock data，不是真实招聘 API。
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs text-ink-muted">Tool 02</p>
              <h3 className="text-sm font-medium text-ink">analyze_skill_gap</h3>
              <div className="mt-3">
                <StatusBadge tone="mock">Deterministic / Local Rules</StatusBadge>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink">
                <li>Python deterministic logic</li>
                <li>固定职业技能目录</li>
                <li>输出 have / missing / priority</li>
                <li>工具内部不调用 LLM</li>
              </ul>
              <p className="mt-4 text-sm leading-6 text-ink-muted">
                Skill-gap calculation is intentionally deterministic.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection title="07 / Trust & Trace">
          <Prose>
            <p>结果页的 AgentTrace 会写出 Tools used、工具名和参数。</p>
            <p>用户可以看到 AI 到底做了什么，而不是只看到一段无法核对的建议。</p>
          </Prose>
          <div className="mt-6 max-w-2xl border border-line bg-paper px-4 py-4 text-sm leading-6 text-ink">
            <p className="text-xs tracking-wide text-ink-muted">示例</p>
            <p className="mt-2">search_jobs</p>
            <p className="mt-1 text-ink-muted">
              keyword = AI Product Designer · location = London
            </p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted">
            这种透明度帮助用户判断答案是否可信：搜过岗还是只做了技能对比，参数是否对得上自己的问题。
          </p>
          <div className="mt-8">
            <ProductScreenshot {...careerAgentScreenshots.trace} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="08 / Results">
          <Prose>
            <p>同一页同时展示最终 Markdown answer、Tool trace 和 Job cards。</p>
            <p>这是整个产品最重要的信息架构：三类信息必须分开来源。</p>
          </Prose>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {resultSources.map((item) => (
              <article key={item.title} className="border border-line bg-paper p-5">
                <h3 className="text-sm font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ProductScreenshot {...careerAgentScreenshots.result} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="09 / Error & Empty State">
          <Prose>
            <p>可信度不只来自成功回答，也来自失败时系统怎么表现。</p>
          </Prose>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs text-ink-muted">Empty result</p>
              <StatusBadge>No live listings</StatusBadge>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                调用了 search_jobs 但没有列表时，页面显示空状态，不让模型编造岗位。
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-muted">Error</p>
              <StatusBadge tone="error">request_id</StatusBadge>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                失败时返回友好说明和 request_id，不把 stack trace 交给用户。
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-muted">Empty input</p>
              <StatusBadge>400 / validation</StatusBadge>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                空问题不会进入模型，接口直接拒绝。
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            Trust is designed through failure states, not only successful
            answers.
          </p>
        </CaseStudySection>

        <CaseStudySection title="10 / Architecture">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <ArchitectureDiagram steps={architectureFlow} />
            <aside className="min-w-0 border border-line p-5 sm:p-6">
              <h3 className="text-sm font-medium tracking-tight text-ink">Real</h3>
              <ul className="mt-3 space-y-1 text-sm leading-6 text-ink">
                {realItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-muted">Deterministic</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
                {deterministicItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-muted">Mock</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
                {mockItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-muted">UI simulation</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
                {uiSimulationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
          <p className="mt-10 max-w-2xl text-base leading-7 text-ink-muted">
            需要工具时，search_jobs 走向 Adzuna 或 China mock；analyze_skill_gap 走向 Python 目录。工具结果再进入第二次 DeepSeek completion。
          </p>
        </CaseStudySection>

        <CaseStudySection title="11 / Design Decisions">
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

        <CaseStudySection title="12 / Limitations">
          <Prose>
            <p>当前限制必须写清楚，避免把 Prototype 写成已经完成的招聘系统。</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {currentLimits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-muted">
            China jobs 不是真实招聘 API。Skill gap 不是模型生成的能力分析。AgentWorkflow 只是界面动画。
          </p>
        </CaseStudySection>

        <CaseStudySection title="13 / Reflection">
          <Prose>
            <p>这个项目让我从 AI 产品设计和 AI UX 的角度重新理解：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {reflectionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            The most important design decision was not adding more AI, but
            deciding where AI should stop.
          </p>
        </CaseStudySection>
      </Container>
    </main>
  );
}
