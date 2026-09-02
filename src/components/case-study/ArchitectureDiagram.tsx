import { FlowDiagram, type FlowStep } from "./FlowDiagram";

type ArchitectureDiagramProps = {
  steps: readonly FlowStep[];
};

export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  return (
    <div className="min-w-0">
      <p className="mb-4 text-xs tracking-wide text-ink-muted">系统路径</p>
      <FlowDiagram steps={steps} />
    </div>
  );
}
