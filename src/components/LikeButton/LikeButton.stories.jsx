import { LikeButton } from './LikeButton.jsx';

export default {
  title: 'Components/LikeButton',
  component: LikeButton,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: { type: 'boolean' },
      description: 'Liked / active state (filled pink heart)',
    },
  },
};

export const Default = {
  name: 'Default (inactive)',
  args: {
    active: false,
    onClick: () => {},
  },
};

export const Active = {
  name: 'Active (liked)',
  args: {
    active: true,
    onClick: () => {},
  },
};
