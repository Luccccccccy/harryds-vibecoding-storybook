import { StarCursor } from './StarCursor.jsx';

export default {
  title: 'Components/StarCursor',
  component: StarCursor,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => (
  <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p style={{ fontSize: 24, color: '#666' }}>Move your mouse around ✦</p>
    <StarCursor />
  </div>
);
