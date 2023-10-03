import TanstackProvider from '@/Components/Providers/TanstackProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nishad Telecom',
  description: 'Developed by Dream Maker System Solutions',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/* <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="./fontawesome-icon/css/all.css" rel="stylesheet" />
      </head> */}
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
