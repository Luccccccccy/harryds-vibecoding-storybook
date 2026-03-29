import './LikeButton.css';

const HeartOutlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const HeartFilledIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

/**
 * Like action button — transparent background with heart icon.
 * active: false (outline heart, black) | true (filled heart, pink #ff2a6a)
 * count: number shown next to the label (hidden when 0)
 */
export function LikeButton({ onClick, active = false, count = 0 }) {
  const cls = ['like-button', active ? 'like-button--active' : ''].filter(Boolean).join(' ');
  return (
    <button className={cls} onClick={onClick}>
      <span className="like-button__icon">
        {active ? <HeartFilledIcon /> : <HeartOutlineIcon />}
      </span>
      {count > 0 && (
        <span className="like-button__count">{count}</span>
      )}
    </button>
  );
}
