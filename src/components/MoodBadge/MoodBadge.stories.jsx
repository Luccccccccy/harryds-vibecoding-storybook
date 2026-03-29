import { MoodBadge } from './MoodBadge.jsx';

export default {
  title: 'Components/MoodBadge',
  component: MoodBadge,
  tags: ['autodocs'],
  argTypes: {
    mood: { control: 'text' },
  },
};

export const Default     = { args: { mood: '今天很有靈感 ✨' } };
export const Emoji       = { args: { mood: '🎧 coding mode on' } };
export const Short       = { args: { mood: '☕ 喝咖啡中' } };
export const Empty       = { args: { mood: '' } };
