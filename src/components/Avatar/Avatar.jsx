import './Avatar.css';

/**
 * Circular avatar component with size variants.
 */
export function Avatar({ src, alt = '', size = 'lg' }) {
  return (
    <div className={`avatar avatar--${size}`}>
      <img src={src} alt={alt} className="avatar__photo" />
    </div>
  );
}
