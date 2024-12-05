import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/auth-context'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vercel Invoice Tracker',
  description: 'Track your Vercel invoices with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <AuthProvider>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <div className="container mx-auto py-8 px-4">
                {children}
              </div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

