import './MoodBadge.css';

/**
 * Instagram Notes–style mood badge.
 * Shows a speech bubble sticker above the avatar.
 *
 * @param {string} mood - The mood text to display (max ~30 chars)
 */
export function MoodBadge({ mood }) {
  if (!mood) return null;

  return (
    <div className="mood-badge" role="note" aria-label={`Mood: ${mood}`}>
      <span className="mood-badge__text">{mood}</span>
      {/* Speech bubble tail */}
      <span className="mood-badge__tail" aria-hidden="true" />
    </div>
  );
}
