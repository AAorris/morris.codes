import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Geist, Geist_Mono } from 'next/font/google'
import { VercelToolbar } from '@vercel/toolbar/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'morris.codes',
  description: 'Aaron Morris and his code',
  metadataBase: new URL(
    process.env.VERCEL_ENV === "production"
      ? "https://morris.codes"
      : "http://localhost:3000"
  ),
  openGraph: {
    title: "morris.codes",
    description: "Aaron Morris and his code",
    url: "https://morris.codes",
    siteName: "morris.codes",
    images: [
      {
        url: "https://morris.codes/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeCookie = (await cookies()).get('theme')?.value;
  const theme = themeCookie === 'light' ? 'light' : 'dark';
  return (
    <html lang="en" className={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme}`}
      >
        {children}
        <VercelToolbar />
      </body>
    </html>
  )
}
