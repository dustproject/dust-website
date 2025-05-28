import { useState } from 'react';
import Link from 'next/link';

export default function SmartButton({
  href,
  onClick,
  disabled = false,
  tooltip = 'Coming soon',
  variant = 'default', // Add variant prop
  children,
}: {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  variant?: 'default' | 'blue' | 'second';
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);

  const button = (
    <div
      className={`action-button ${variant === 'blue' ? 'action-button--blue' : ''} ${variant === 'second' ? 'action-button--second' : ''}`}
      style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={disabled ? undefined : onClick}
    >
      {children}
      {disabled && hover && (
        <div className="tooltip">{tooltip}</div>
      )}
    </div>
  );

  if (href && !disabled) return <Link href={href} style={{textDecoration: "none"}}>{button}</Link>;
  return button;
}