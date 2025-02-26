import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sn0wAlgo - Lightning Fast Jailbreak Algorithms',
  description: 'Next-generation hyper-speed algorithms for Jailbreak.',
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
