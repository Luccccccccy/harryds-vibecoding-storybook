import { ProfileCard } from './ProfileCard.jsx';

const SAMPLE_PHOTO = '/profile-avatar.jpg';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SAMPLE_LINKS = [
  { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
  { icon: <MediumIcon />, label: 'Medium', href: '#' },
  { icon: <LinkedInIcon />, label: 'Linkedin', href: '#' },
];

export default {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'profile',
      values: [{ name: 'profile', value: 'url(/profile-bg.png) center/cover' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(/profile-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    avatarSrc: SAMPLE_PHOTO,
    name: 'Luccccccy',
    bio: "Hi I'm Luccccccy!",
    links: SAMPLE_LINKS,
    onLike: (liked) => console.log('liked:', liked),
  },
};
