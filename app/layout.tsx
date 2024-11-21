// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'AI Code Editor Navigator - Find Your Perfect AI Coding Assistant',
    template: '%s | AI Code Editor Navigator'
  },
  description: 'Discover and compare the best AI-powered code editors and coding assistants. A comprehensive directory of intelligent coding tools to enhance your development workflow.',
  keywords: ['AI code editor', 'coding assistant', 'AI programming', 'code completion', 'developer tools'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name or Company',
  publisher: 'Your Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI Code Editor Navigator',
    description: 'Comprehensive directory of AI-powered code editors and coding assistants',
    url: 'https://your-domain.com',
    siteName: 'AI Code Editor Navigator',
    images: [
      {
        url: 'https://your-domain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Code Editor Navigator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Code Editor Navigator',
    description: 'Find the perfect AI coding assistant for your development needs',
    creator: '@yourtwitterhandle',
    images: ['https://your-domain.com/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" />
        {/* You can add custom fonts or other head elements here */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* You can add a header component here */}
          <main className="flex-grow">
            {children}
          </main>
          {/* You can add a footer component here */}
          <footer className="bg-gray-50 border-t border-gray-200 py-4 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} AI Code Editor Navigator. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
