import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: '3 Variant Technology — Custom Software for Modern Business',
  description: 'A small, capable team building custom digital solutions — web, mobile, AI, cloud, and commerce. From idea to development, deployment, and scale.',
  keywords: ['custom software development', 'web development', 'mobile app development', 'AI and machine learning', 'AI automation', 'cloud development', 'Shopify development', 'WordPress development', 'ERP and CRM solutions'],
  authors: [{ name: '3 Variant Technology' }],
  openGraph: {
    title: '3 Variant Technology — Custom Software for Modern Business',
    description: 'Small team. Serious technology. Big possibilities. We take projects from idea to development, deployment, and scaling.',
    type: 'website',
    url: 'https://3variant.tech',
    siteName: '3 Variant Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Variant Technology — Custom Software for Modern Business',
    description: 'Small team. Serious technology. Big possibilities. We take projects from idea to development, deployment, and scaling.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
