import { useState } from 'react';
import { EmojiBar } from './EmojiBar.jsx';

export default {
  title: 'Components/EmojiBar',
  component: EmojiBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export const Default = () => {
  const [visible, setVisible] = useState(true);
  const [last, setLast] = useState('');
  return (
    <div style={{ height: '300px', background: '#f0f0f0', position: 'relative' }}>
      <p style={{ textAlign: 'center', paddingTop: 40 }}>
        Last picked: {last || '—'}
      </p>
      <button
        onClick={() => setVisible(v => !v)}
        style={{ display: 'block', margin: '0 auto' }}
      >
        Toggle EmojiBar
      </button>
      <EmojiBar
        visible={visible}
        onSelect={(e) => setLast(e)}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};
