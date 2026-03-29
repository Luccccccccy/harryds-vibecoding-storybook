import './ProfileCard.css';
import { Avatar } from '../Avatar/Avatar.jsx';
import { LinkButton } from '../LinkButton/LinkButton.jsx';
import { LikeButton } from '../LikeButton/LikeButton.jsx';

/**
 * Profile card — composes Avatar, LinkButton list, and LikeButton.
 *
 * @param {object} props
 * @param {string} props.avatarSrc - Avatar image URL
 * @param {string} props.name - Display name
 * @param {string} props.bio - Short bio text
 * @param {Array<{icon: React.ReactNode, label: string, href: string}>} props.links
 * @param {(liked: boolean) => void} [props.onLike] - Called with new liked state on toggle
 */
export function ProfileCard({ avatarSrc, name, bio, links = [], onLike, likeCount = 0 }) {
  return (
    <div className="profile-card">
      <div className="profile-card__profile">
        <Avatar src={avatarSrc} alt={name} size="lg" />
        <div className="profile-card__info">
          {name && <p className="profile-card__name">{name}</p>}
          {bio && <p className="profile-card__bio">{bio}</p>}
        </div>
      </div>

      <div className="profile-card__links">
        {links.map((link, i) => (
          <LinkButton key={i} icon={link.icon} label={link.label} href={link.href} />
        ))}
      </div>

      <div className="profile-card__actions">
        <LikeButton active={likeCount > 0} onClick={onLike} count={likeCount} />
      </div>
    </div>
  );
}
