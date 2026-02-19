interface AsciiBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function AsciiBox({ title, children, className = '' }: AsciiBoxProps) {
  return (
    <div className={`terminal-box rounded ${className}`}>
      {title && (
        <div className="terminal-box-header">{title}</div>
      )}
      <div className="p-3">
        {children}
      </div>
    </div>
  );
}
