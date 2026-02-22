import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SPM Interactive - Full-spectrum web solutions for modern businesses'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #040404 0%, #0d0d0d 50%, #040404 100%)',
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
        {/* Decorative gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(115, 1, 62, 0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 'bold',
              color: '#73013e',
              marginBottom: 24,
              letterSpacing: '-0.03em',
              textShadow: '0 4px 20px rgba(115, 1, 62, 0.4)',
            }}
          >
            SPM Interactive
          </div>
          <div
            style={{
              fontSize: 38,
              color: '#ffffff',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Full-spectrum web solutions
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#b0b0b0',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.3,
            }}
          >
            Modern websites • SEO • Cloud hosting • AI integration
          </div>
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 22,
            color: '#808080',
          }}
        >
          <span>🇭🇷</span>
          <span>Zagreb, Croatia</span>
          <span style={{ margin: '0 8px' }}>•</span>
          <span>spm-interactive.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
