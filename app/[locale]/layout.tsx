import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider, useMessages } from 'next-intl'

import Navbar from '@/components/shared/navbar/Navbar'
import { ThemeProvider, ThemeWrapper } from '@/context/ThemeProvider'
import { plusJakartaSans } from '@/styles/fonts'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const Layout = ({ children, params: { locale } }: Readonly<RootLayoutProps>) => {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={plusJakartaSans.className}>
        <ThemeProvider>
          <ThemeWrapper>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Navbar />
              {children}
            </NextIntlClientProvider>
            <Analytics />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
