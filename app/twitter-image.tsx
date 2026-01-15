import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AI Tool Findr - Discover the Best AI Tools';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.1)',
          }}
        />

        {/* Logo Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '160px',
            height: '160px',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
            marginBottom: '40px',
            boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)',
          }}
        >
          {/* Magnifying glass icon */}
          <svg
            width="90"
            height="90"
            viewBox="0 0 32 32"
            fill="none"
            style={{ color: 'white' }}
          >
            <circle cx="13" cy="13" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
            <line x1="19" y1="19" x2="27" y2="27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M13 6 L14.5 10.5 L19 12 L14.5 13.5 L13 18 L11.5 13.5 L7 12 L11.5 10.5 Z" fill="white"/>
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 800,
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-2px',
          }}
        >
          AI Tool Findr
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#A1A1AA',
            marginBottom: '50px',
          }}
        >
          Discover the Best AI Tools
        </div>

        {/* Feature badges */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '12px 28px',
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '20px',
            }}
          >
            1000+ AI Tools
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 28px',
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '20px',
            }}
          >
            25 Categories
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 28px',
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '20px',
            }}
          >
            Updated Daily
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '24px',
            color: '#8B5CF6',
            fontWeight: 600,
          }}
        >
          aitoolfindr.co
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
