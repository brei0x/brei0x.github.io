import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

// GitHub Pages does not support server-side generation at runtime
export const dynamic = 'force-static'

export default function Icon() {
  return new ImageResponse(
    (
      // JSX element that represents the icon
      <div
        style={{
          fontSize: 20,
          background: '#0f172a', // slate-900
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2dd4bf', // teal-400
          borderRadius: '4px',
          fontWeight: 700,
        }}
      >
        B
      </div>
    ),
    // Options ImageResponse
    {
      ...size,
      headers: {
        'Content-Type': contentType,
      },
    }
  )
}
