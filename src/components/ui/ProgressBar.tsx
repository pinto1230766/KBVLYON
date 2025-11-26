interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  colorClass?: string;
}

export function ProgressBar({ value, max = 100, className = "", colorClass = "bg-primary" }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className={`w-full bg-muted rounded-full h-2 ${className}`}>
      <div
        className={`${colorClass} h-2 rounded-full transition-all w-[var(--progress-width)]`}
        // eslint-disable-next-line
        style={{ '--progress-width': `${percentage}%` } as React.CSSProperties}
      />
    </div>
  );
}
