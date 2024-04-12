import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Byte The Code',
  description: 'This is a code Bootcamp...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
