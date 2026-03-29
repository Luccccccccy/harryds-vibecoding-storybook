import { useState } from 'react';
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
export function ProfileCard({ avatarSrc, name, bio, links = [], onLike }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    const next = !liked;
    setLiked(next);
    onLike?.(next);
  }

  return (
    <div className="profile-card">
      <div className="profile-card__profile">
        <Avatar src={avatarSrc} alt={name} size="lg" />
        <div className="profile-card__info">
          <p className="profile-card__name">{name}</p>
          <p className="profile-card__bio">{bio}</p>
        </div>
      </div>

      <div className="profile-card__links">
        {links.map((link, i) => (
          <LinkButton key={i} icon={link.icon} label={link.label} href={link.href} />
        ))}
      </div>

      <div className="profile-card__actions">
        <LikeButton active={liked} onClick={handleLike} />
      </div>
    </div>
  );
}
