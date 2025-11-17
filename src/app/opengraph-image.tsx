import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'FRACTALBYTE - Digital Excellence'
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
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: '#73013e',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          FRACTALBYTE
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#b0b0b0',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Digital Excellence in Web Development
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
