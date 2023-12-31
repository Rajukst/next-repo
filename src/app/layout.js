import TanstackProvider from '@/Components/Providers/TanstackProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nishad Telecom',
  description: 'Developed by Dream Maker System Solutions',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
  
      <body className={inter.className}>
      <TanstackProvider>
      {children}
      </TanstackProvider>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </body>
    </html>
  )
}
