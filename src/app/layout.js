import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nishad Telecom',
  description: 'Developed by Dream Maker System Solutions',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
      <body className={inter.className}>

        {children}
        </body>
      
    </html>
  )
}
