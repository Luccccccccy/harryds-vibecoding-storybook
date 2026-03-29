import { SocialIcon } from './SocialIcon.jsx';

export default {
  title: 'Components/SocialIcon',
  component: SocialIcon,
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: { type: 'select' },
      options: ['instagram', 'medium', 'linkedin'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 32, height: 32 }}>
        <Story />
      </div>
    ),
  ],
};

export const Instagram = { args: { platform: 'instagram' } };
export const Medium    = { args: { platform: 'medium' } };
export const LinkedIn  = { args: { platform: 'linkedin' } };
