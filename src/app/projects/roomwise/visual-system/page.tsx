import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ProjectHero } from "@/components/case-study/ProjectHero";
import { Container } from "@/components/layout/Container";
import {
  roomwiseButtons,
  roomwiseCardExample,
  roomwiseColors,
  roomwiseInteractionStates,
  roomwiseTags,
  roomwiseTypeStyles,
  roomwiseVisualSystemCase,
} from "@/content/roomwise-visual-system";

const roomwiseSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: roomwiseVisualSystemCase.metadataTitle,
  description: roomwiseVisualSystemCase.metadataDescription,
};

const product = {
  bg: "#F3EEE6",
  ink: "#2C261E",
  muted: "#6A6156",
  line: "#D9CFC0",
  onInk: "#F3EEE6",
} as const;

function SectionNote({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-muted">{children}</p>;
}

function SourceChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-paper px-2 py-0.5 text-xs leading-5 text-ink-muted">
      {children}
    </span>
  );
}

function ProductTag({
  label,
  selected,
}: {
  label: string;
  selected?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 text-sm leading-5"
      style={{
        borderRadius: 2,
        background: selected ? product.ink : "transparent",
        color: selected ? product.onInk : product.ink,
        border: selected ? `1px solid ${product.ink}` : `1px solid ${product.line}`,
      }}
    >
      {label}
    </span>
  );
}

function ProductButton({
  label,
  variant,
}: {
  label: string;
  variant: "primary" | "secondary";
}) {
  const primary = variant === "primary";
  return (
    <span
      className="inline-flex min-w-[10rem] items-center justify-center px-5 py-2.5 text-sm"
      style={{
        borderRadius: 2,
        background: primary ? product.ink : product.bg,
        color: primary ? product.onInk : product.ink,
        border: `1px solid ${product.ink}`,
      }}
    >
      {label}
    </span>
  );
}

export default function RoomwiseVisualSystemPage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Container>
        <ProjectHero
          backHref="/projects/roomwise"
          backLabel="← 返回住好"
          title={roomwiseVisualSystemCase.title}
          subtitle={roomwiseVisualSystemCase.subtitle}
          description={roomwiseVisualSystemCase.description}
          tags={roomwiseVisualSystemCase.tags}
          status={roomwiseVisualSystemCase.status}
        />

        <CaseStudySection title="来源">
          <SectionNote>
            组件标本按现有截图复现样式；色值由产品 PNG 像素取样，不新增产品中不存在的状态。
          </SectionNote>
          <ul className="mt-6 flex flex-wrap gap-2">
            {roomwiseVisualSystemCase.sources.map((item) => (
              <li key={item.file}>
                <SourceChip>
                  {item.label} · {item.file}
                </SourceChip>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="01 / Color">
          <SectionNote>页面背景、文字与操作色均来自住好产品界面，无额外品牌色。</SectionNote>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {roomwiseColors.map((swatch) => (
              <li key={swatch.name} className="min-w-0">
                <div
                  className="aspect-[4/3] w-full border border-line"
                  style={{ background: swatch.hex }}
                  aria-hidden
                />
                <p className="mt-3 text-sm font-medium text-ink">{swatch.name}</p>
                <p className="mt-1 text-xs tracking-wide text-ink-muted">{swatch.role}</p>
                <p className="mt-2 font-mono text-xs text-ink">{swatch.hex}</p>
                <p className="mt-2 text-xs leading-5 text-ink-muted">{swatch.note}</p>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="02 / Typography">
          <SectionNote>
            页面标题使用衬线；分区、正文与说明使用无衬线。字号为界面视觉还原，非另建字号体系。
          </SectionNote>
          <ul className="mt-8 space-y-6">
            {roomwiseTypeStyles.map((item) => (
              <li
                key={item.name}
                className="border-t border-line pt-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                  <p className="font-mono text-xs text-ink-muted">
                    {item.size} · weight {item.weight} · LH {item.lineHeight}
                  </p>
                </div>
                <p
                  className={`mt-4 max-w-3xl ${
                    item.family === "serif" ? roomwiseSerif.className : ""
                  }`}
                  style={{
                    fontSize: item.size,
                    fontWeight: Number(item.weight),
                    lineHeight: item.lineHeight,
                    color: item.color,
                  }}
                >
                  {item.sample}
                </p>
                <p className="mt-2 text-xs text-ink-muted">{item.note}</p>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="03 / Button">
          <SectionNote>
            Primary 贯穿首页与流程页；Secondary 出现在方案页底部操作区。截图中未见 Disabled，故不展示。
          </SectionNote>
          <div
            className="mt-8 border border-line p-6 sm:p-8"
            style={{ background: product.bg }}
          >
            <ul className="flex flex-wrap gap-4">
              {roomwiseButtons.map((btn) => (
                <li key={btn.name} className="min-w-0">
                  <ProductButton label={btn.label} variant={btn.variant} />
                  <p className="mt-3 text-xs font-medium text-ink">{btn.name}</p>
                  <p className="mt-1 text-xs text-ink-muted">{btn.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection title="04 / Card">
          <SectionNote>
            空间对比与房间录入使用「图片 + 下方说明」结构：轻圆角、无重阴影，靠留白与边线区分。
          </SectionNote>
          <div
            className="mt-8 grid gap-6 border border-line p-6 sm:grid-cols-2 sm:p-8"
            style={{ background: product.bg }}
          >
            <figure className="min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={roomwiseCardExample.image}
                alt={roomwiseCardExample.title}
                className="block aspect-[4/3] w-full object-cover"
                style={{ borderRadius: 2 }}
              />
              <figcaption className="mt-2 text-xs" style={{ color: product.muted }}>
                {roomwiseCardExample.title}
              </figcaption>
              <p className="mt-1 text-xs" style={{ color: product.muted }}>
                {roomwiseCardExample.meta}
              </p>
            </figure>
            <figure className="min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/roomwise/inspiration-space.jpg"
                alt="灵感空间"
                className="block aspect-[4/3] w-full object-cover"
                style={{ borderRadius: 2 }}
              />
              <figcaption className="mt-2 text-xs" style={{ color: product.muted }}>
                灵感空间
              </figcaption>
              <p className="mt-1 text-xs" style={{ color: product.muted }}>
                喜欢的参考 · 用于适配判断
              </p>
            </figure>
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            来源：{roomwiseCardExample.source}
          </p>
        </CaseStudySection>

        <CaseStudySection title="05 / Tag · Filter">
          <SectionNote>
            筛选以标签多选呈现：深底白字为选中，浅边线为未选。文案取自「我的空间」「我的灵感」。
          </SectionNote>
          <div className="mt-8 space-y-8">
            {(
              [
                roomwiseTags.furniture,
                roomwiseTags.budget,
                roomwiseTags.focus,
              ] as const
            ).map((group) => (
              <div
                key={group.label}
                className="border border-line p-5 sm:p-6"
                style={{ background: product.bg }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium" style={{ color: product.ink }}>
                    {group.label}
                  </p>
                  <SourceChip>{group.source}</SourceChip>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.selected.map((label) => (
                    <li key={`s-${label}`}>
                      <ProductTag label={label} selected />
                    </li>
                  ))}
                  {group.default.map((label) => (
                    <li key={`d-${label}`}>
                      <ProductTag label={label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="06 / Interaction States">
          <SectionNote>
            静态截图可确认 Default 与 Selected。未见稳定 Hover / Disabled 样式，故不虚构。
          </SectionNote>
          <div
            className="mt-8 grid gap-4 border border-line p-6 sm:grid-cols-2 sm:p-8"
            style={{ background: product.bg }}
          >
            {roomwiseInteractionStates.map((item) => (
              <article key={item.name} className="min-w-0">
                <p className="text-xs tracking-wide" style={{ color: product.muted }}>
                  {item.name}
                </p>
                <div className="mt-4">
                  <ProductTag
                    label={item.sample}
                    selected={item.state === "selected"}
                  />
                </div>
                <p className="mt-4 text-xs leading-5" style={{ color: product.muted }}>
                  {item.evidence}
                </p>
              </article>
            ))}
          </div>
        </CaseStudySection>
      </Container>
    </main>
  );
}
