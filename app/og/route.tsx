import { ImageResponse } from 'next/og';

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@600&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status === 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

export async function GET() {
  const text = 'Morris Codes'

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fff',
          color: '#222',
          height: '100%',
          width: '100%',
          fontSize: 150,
          fontWeight: 700,
          letterSpacing: -9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Geist',
        }}
      >
        <div
          style={{
            border: '30px solid #222',
            padding: '80px',
          }}
        >
          {text}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist',
          data: await loadGoogleFont('Geist', text),
          style: 'normal',
        },
      ],
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  );
}