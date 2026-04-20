import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'antbryx — Software, shipped fast',
  description: 'Custom software, POS, and inventory systems for retail businesses and startups. Delivered in weeks, not months.',
  keywords: ['software development', 'custom software', 'POS systems', 'inventory management', 'retail software', 'startup development'],
  authors: [{ name: 'antbryx' }],
  openGraph: {
    title: 'antbryx — Software, shipped fast',
    description: 'Custom software, POS, and inventory systems for retail businesses and startups. Delivered in weeks, not months.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'antbryx — Software, shipped fast',
    description: 'Custom software, POS, and inventory systems for retail businesses and startups. Delivered in weeks, not months.',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0a]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
