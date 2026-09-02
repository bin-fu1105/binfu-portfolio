export type FlowStep = {
  label: string;
  connector?: string;
};

type FlowDiagramProps = {
  steps: readonly FlowStep[];
  className?: string;
};

export function FlowDiagram({ steps, className = "" }: FlowDiagramProps) {
  return (
    <ol className={`flex w-full min-w-0 max-w-md flex-col ${className}`}>
      {steps.map((step, index) => (
        <li key={`${step.label}-${index}`} className="flex flex-col items-center">
          {index > 0 ? (
            <div
              className="flex flex-col items-center py-2 text-ink-muted"
              aria-hidden
            >
              {step.connector ? (
                <span className="text-xs tracking-wide">{step.connector}</span>
              ) : null}
              <span className="text-sm leading-none">↓</span>
            </div>
          ) : null}
          <div className="w-full rounded-sm border border-line bg-paper px-4 py-3 text-center text-sm leading-6 break-words text-ink">
            {step.label}
          </div>
        </li>
      ))}
    </ol>
  );
}
