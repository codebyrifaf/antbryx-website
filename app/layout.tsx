import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

const headingFont = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'AntBryx',
  description: 'Custom software, POS, and inventory systems for retail businesses and startups. Delivered in weeks, not months.',
  keywords: ['software development', 'custom software', 'POS systems', 'inventory management', 'retail software', 'startup development'],
  authors: [{ name: 'AntBryx' }],
  icons: {
    icon: '/antbryx-logo.png',
    apple: '/antbryx-logo.png',
  },
  openGraph: {
    title: 'AntBryx — Software, shipped fast',
    description: 'Custom software, POS, and inventory systems for retail businesses and startups. Delivered in weeks, not months.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AntBryx — Software, shipped fast',
    description: 'Custom software, POS, and inventory systems for retail businesses and startups. Delivered in weeks, not months.',
  },
}

export const viewport = {
  themeColor: '#162f30',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} bg-[#162f30]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
