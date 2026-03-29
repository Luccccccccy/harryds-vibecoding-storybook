import { Avatar } from './Avatar.jsx';

const SAMPLE_PHOTO = '/profile-avatar.jpg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: SAMPLE_PHOTO,
    alt: 'Profile photo',
  },
};

export const Large = { args: { size: 'lg' } };
export const Medium = { args: { size: 'md' } };
export const Small = { args: { size: 'sm' } };
