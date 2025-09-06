
// apps/web/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AsheenRoot',
  description: 'Build anything with voice, canvas, and AI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 bg-black text-white text-xl font-bold">
          <nav className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/builder">Builder</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/chat">Chat</Link>
            <Link href="/account">Account</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">© 2025 AsheenRoot</footer>
      </body>
    </html>
  )
}
