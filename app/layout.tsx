import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VibeTemplate - AI-Native Development Framework',
  description: 'From Idea to App, AI Makes It Possible. The ultimate AI-powered development ecosystem.',
  keywords: ['AI', 'development', 'framework', 'code generation', 'automation'],
  authors: [{ name: 'VibeTemplate Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'VibeTemplate - AI-Native Development Framework',
    description: 'From Idea to App, AI Makes It Possible',
    type: 'website',
    url: 'https://vibetemplate.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}