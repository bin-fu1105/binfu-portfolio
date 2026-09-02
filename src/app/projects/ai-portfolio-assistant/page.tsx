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
  currentLimits,
  designDecisions,
  liveAiItems,
  localRuleItems,
  portfolioAssistantCase,
  portfolioAssistantScreenshots,
  problemPoints,
  productConceptFlow,
  prototypeItems,
  questionnaireFlow,
  realCapabilities,
  reflectionPoints,
  reportQuestions,
  userInputs,
} from "@/content/ai-portfolio-assistant";

export const metadata: Metadata = {
  title: portfolioAssistantCase.metadataTitle,
  description: portfolioAssistantCase.metadataDescription,
};

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4 text-base leading-7 text-ink-muted">
      {children}
    </div>
  );
}

export default function PortfolioAssistantCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <ProjectHero
          backHref="/"
          backLabel="← 返回作品"
          title={portfolioAssistantCase.title}
          subtitle={portfolioAssistantCase.subtitle}
          description={portfolioAssistantCase.description}
          tags={portfolioAssistantCase.tags}
          status={portfolioAssistantCase.status}
        />

        <CaseStudySection title="01 / Overview">
          <p className="max-w-2xl text-base leading-7 text-ink">
            {portfolioAssistantCase.englishTitle}
          </p>
          <Prose>
            <p className="mt-4">
              帮助设计学生把“我不知道该做什么作品集”转化成具体的作品集策略。
            </p>
          </Prose>
          <ul className="mt-6 flex flex-wrap gap-2">
            <li>
              <StatusBadge>AI Product / AI UX</StatusBadge>
            </li>
            <li>
              <StatusBadge>Next.js + TypeScript + Tailwind + DeepSeek</StatusBadge>
            </li>
            <li>
              <StatusBadge tone="live">Early User Testing</StatusBadge>
            </li>
          </ul>
          <div className="mt-8">
            <ProductScreenshot {...portfolioAssistantScreenshots.home} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="02 / Problem">
          <Prose>
            <p>很多设计学生不是没有作品，而是不知道：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {problemPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            不是“帮我做一个作品集”，而是“告诉我应该如何构建一个更有竞争力的作品集”。
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted">
            产品不承诺就业结果，也不是自动求职系统。它处理的是作品集策略，而不是替用户完成作品。
          </p>
        </CaseStudySection>

        <CaseStudySection title="03 / Product Concept">
          <Prose>
            <p>用户输入自己的：</p>
          </Prose>
          <ul className="mt-4 flex max-w-2xl flex-wrap gap-2">
            {userInputs.map((item) => (
              <li key={item}>
                <StatusBadge>{item}</StatusBadge>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink">
            系统生成个性化 Portfolio Strategy。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
            产品不是简单的 AI Chat。它先收集结构化上下文，再把 AI 生成和本地规则组合起来，输出可以执行的建议。
          </p>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
            <FlowDiagram steps={productConceptFlow} />
            <p className="max-w-xl text-base leading-7 text-ink-muted lg:pt-2">
              用户上下文先进入结构化问卷，再经过 AI 与本地规则，最后变成作品集策略和下一步行动。
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="04 / Understanding the User">
          <Prose>
            <p>产品没有直接让用户输入一段开放式 Prompt。</p>
            <p>
              结构化输入可以让系统获得更稳定的用户背景和约束，也让不同用户的信息可以比较。这是产品设计，而不是单纯的 API 调用。
            </p>
          </Prose>
          <div className="mt-8">
            <p className="mb-4 text-xs text-ink-muted">5 步问卷</p>
            <FlowDiagram steps={questionnaireFlow} />
          </div>
          <div className="mt-8">
            <ProductScreenshot {...portfolioAssistantScreenshots.questionnaire} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="05 / From Input to Strategy">
          <Prose>
            <p>用户提交问卷后，产品把背景信息转成策略，但并不把所有步骤都交给模型。</p>
          </Prose>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs text-ink-muted">真实 AI</p>
              <StatusBadge tone="live">DeepSeek</StatusBadge>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink">
                {liveAiItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs text-ink-muted">本地规则</p>
              <StatusBadge tone="mock">Local Rules</StatusBadge>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink">
                {localRuleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-muted">
            案例匹配、能力分析和策略组合是确定性逻辑。它们不是 AI，也不应该被写成 AI。
          </p>
        </CaseStudySection>

        <CaseStudySection title="06 / Strategy Report">
          <Prose>
            <p>生成后的 Portfolio Strategy Report 应帮助用户回答：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {reportQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-2 text-xs text-ink-muted">真实 DeepSeek 生成</p>
            <StatusBadge tone="live">Real AI Output</StatusBadge>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
              下面来自 `/reports/latest`，是问卷提交后由 DeepSeek 生成的真实 Strategy Report。
            </p>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...portfolioAssistantScreenshots.reportReal} />
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xs text-ink-muted">固定示例报告</p>
            <StatusBadge tone="mock">Prototype / Mock Data</StatusBadge>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
              下面来自 `/reports/mock`。它是样例报告，不是这次真实 DeepSeek 生成。
            </p>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...portfolioAssistantScreenshots.reportMock} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="07 / Portfolio Review">
          <Prose>
            <p>已有作品的用户可以进入 Review，上传 PDF，查看作品集项目的结构化展示。</p>
            <p>实际实现里，PDF parsing 使用 `pdfjs-dist`，Review 页面有真实解析代码。</p>
          </Prose>
          <div className="mt-8">
            <p className="mb-2 text-xs text-ink-muted">分析逻辑</p>
            <StatusBadge tone="mock">Local Rules，不是 DeepSeek AI</StatusBadge>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...portfolioAssistantScreenshots.reviewUpload} />
          </div>
          <div className="mt-10">
            <p className="mb-2 text-xs text-ink-muted">未上传文件时的结果</p>
            <StatusBadge tone="mock">Prototype / Rule-based</StatusBadge>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
              没有上传文件时，结果使用 `mockPortfolioProjects`，分析由本地规则生成，不是 DeepSeek。
            </p>
          </div>
          <div className="mt-8">
            <ProductScreenshot {...portfolioAssistantScreenshots.reviewResult} />
          </div>
        </CaseStudySection>

        <CaseStudySection title="08 / AI Architecture">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <ArchitectureDiagram steps={architectureFlow} />
            <aside className="min-w-0 border border-line p-5 sm:p-6">
              <h3 className="text-sm font-medium tracking-tight text-ink">
                Local Rules
              </h3>
              <ul className="mt-4 space-y-1 text-sm leading-6 text-ink">
                {localRuleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-muted">已真实接入 AI</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink">
                <li>DeepSeek via /api/generate</li>
                <li>JSON Validation</li>
                <li>Retry</li>
              </ul>
            </aside>
          </div>
          <p className="mt-10 max-w-2xl text-base leading-7 text-ink-muted">
            架构把生成交给 AI，把需要稳定结果的匹配和组合留给确定性规则。
          </p>
        </CaseStudySection>

        <CaseStudySection title="09 / Design Decisions">
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

        <CaseStudySection title="10 / User Testing">
          <Prose>
            <p>当前状态是 Early User Testing。</p>
            <p>Homepage 已记录的测试对象：3 位同学，2 位通过小红书进入产品的真实用户，合计 5 人早期测试。</p>
            <p>
              这些测试信息目前只存在于 Homepage 文案。产品仓库中没有完整的测试记录或截图，因此这里不补充具体用户原话、满意度、成功率或统计数据。
            </p>
          </Prose>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            Early feedback was used to identify where users needed clearer
            guidance and more actionable recommendations.
          </p>
        </CaseStudySection>

        <CaseStudySection title="11 / Error & Trust">
          <Prose>
            <p>我不会把 Prototype 写成已经完成的商业产品。当前限制包括：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {currentLimits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-muted">
            可信度来自边界写清楚：哪些是真实 AI，哪些是本地规则，哪些还只是 Prototype。
          </p>
        </CaseStudySection>

        <CaseStudySection title="12 / Current State">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-ink">Real</h3>
              <div className="mt-3">
                <StatusBadge tone="live">真实能力</StatusBadge>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-muted">
                {realCapabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-ink">Prototype / Mock</h3>
              <div className="mt-3">
                <StatusBadge tone="mock">Prototype / Mock Data</StatusBadge>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-muted">
                {prototypeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-7 text-ink-muted">
            Status：Early User Testing
          </p>
        </CaseStudySection>

        <CaseStudySection title="13 / Reflection">
          <Prose>
            <p>这个项目让我从 AI 产品设计的角度重新理解：</p>
          </Prose>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-ink">
            {reflectionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base font-medium leading-7 text-ink sm:text-lg">
            AI 产品设计不只是把模型接进界面，而是设计输入、推理、输出和用户决策之间的关系。
          </p>
        </CaseStudySection>
      </Container>
    </main>
  );
}
