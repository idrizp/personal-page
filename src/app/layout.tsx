import Navigation from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Idriz Pelaj',
  description: 'Idriz Pelaj\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className='w-full p-4 text-center bg-stone-900'>
          <p className='font-bold'>Made by Idriz Pelaj &copy; {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  )
}
