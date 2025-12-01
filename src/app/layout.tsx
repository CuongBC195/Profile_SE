import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Professional Portfolio | Bui Chi Cuong',
  description: 'Modern portfolio for IT professionals showcasing skills, projects, and expertise',
  keywords: 'IT, developer, programming, technology, portfolio, full-stack',
  authors: [{ name: 'Bui Chi Cuong' }],
  openGraph: {
    title: 'IT Professional Portfolio | Bui Chi Cuong',
    description: 'Modern portfolio for IT professionals',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="QnTYZtQxO2rzbWZ-HQ7hwP3rwUMLqUUGhz5MSi4Guhc" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-zinc-400 selection:bg-white selection:text-black`}>
        <div className="fixed-bg" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
