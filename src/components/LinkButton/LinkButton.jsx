import './LinkButton.css';

/**
 * Social link button — full-width, with an icon and label.
 * variant: "default" (black) | "light" (white)
 */
export function LinkButton({ icon, label, href, onClick, variant = 'default' }) {
  const cls = ['link-button', variant === 'light' ? 'link-button--light' : ''].filter(Boolean).join(' ');
  return (
    <a
      className={cls}
      href={href || '#'}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
    >
      <span className="link-button__icon">{icon}</span>
      <span className="link-button__label">{label}</span>
    </a>
  );
}
