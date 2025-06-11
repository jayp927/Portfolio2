'use client'

const StaticBackground = () => (
  <div className="fixed inset-0 w-full h-full overflow-hidden bg-black z-0">
    {/* Orange Circle (Bottom Left) */}
    <div
      className="absolute rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, #b55208 60%, transparent 100%)',
        width: '750px',
        height: '750px',
        left: '-150px',
        bottom: '-100px',
        opacity: 0.8,
        zIndex: 1,
      }}
    />
    {/* Blue Circle (Top Right) */}
    <div
      className="absolute rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, #003399 60%, transparent 100%)',
        width: '750px',
        height: '750px',
        right: '-150px',
        top: '-100px',
        opacity: 0.8,
        zIndex: 2,
      }}
    />
    {/* Silver/Gray Circle (Under Blue) */}
    <div
      className="absolute rounded-full blur-2xl"
      style={{
        background: 'radial-gradient(circle, #fff 0%, #C0C0C0 100%)',
        width: '400px',
        height: '400px',
        right: '-75px',
        top: '75px',
        opacity: 0.35,
        zIndex: 1,
      }}
    />
  </div>
);

export default StaticBackground; 