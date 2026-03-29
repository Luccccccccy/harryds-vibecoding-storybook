import './Avatar.css';

/**
 * Circular avatar component with size variants.
 */
export function Avatar({ src, alt = '', size = 'lg' }) {
  return (
    <div className={`avatar avatar--${size}`}>
      {src ? (
        <img src={src} alt={alt} className="avatar__photo" />
      ) : (
        <div className="avatar__placeholder" aria-label={alt} />
      )}
    </div>
  );
}
