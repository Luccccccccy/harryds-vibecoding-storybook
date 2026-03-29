import './ProfileCard.css';
import { Avatar } from '../Avatar/Avatar.jsx';
import { LinkButton } from '../LinkButton/LinkButton.jsx';
import { LikeButton } from '../LikeButton/LikeButton.jsx';
import { MoodBadge } from '../MoodBadge/MoodBadge.jsx';

export function ProfileCard({ avatarSrc, name, bio, links = [], onLike, likeCount = 0, mood }) {
  return (
    <div className="profile-card">
      <div className="profile-card__profile">
        <div className="profile-card__avatar-wrap">
          {mood && <MoodBadge mood={mood} />}
          <Avatar src={avatarSrc} alt={name} size="lg" />
        </div>
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
