import './EmojiBar.css';

const EMOJIS = ['❤️', '👍', '🎉', '🔥', '😂', '😮', '😢', '👎', '💬', '🍓'];

/**
 * Emoji reaction bar — slides up from the bottom when `visible` is true.
 * Calls `onSelect(emoji)` when an emoji is clicked.
 */
export function EmojiBar({ visible = false, onSelect }) {
  return (
    <div className={`emoji-bar-wrapper ${visible ? 'emoji-bar-wrapper--visible' : ''}`}>
      <div className="emoji-bar" role="toolbar" aria-label="Emoji reactions">
        {EMOJIS.map((emoji) => (
          <button
            key={emoji}
            className="emoji-bar__btn"
            onClick={() => onSelect?.(emoji)}
            aria-label={emoji}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
