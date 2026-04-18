import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PixelCraft Media — Crafted to the Pixel.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ color: '#F4EFE6', fontSize: 80, fontWeight: 300, lineHeight: 0.9, marginBottom: 40 }}>
          CRAFTED TO THE
        </div>
        <div style={{ color: '#FF4D00', fontSize: 80, fontWeight: 300, lineHeight: 0.9, marginBottom: 60 }}>
          PIXEL.
        </div>
        <div style={{ color: '#8A8799', fontSize: 24 }}>
          PixelCraft Media — Webdesign Agentur DE/AT/CH
        </div>
      </div>
    ),
    { ...size }
  )
}
