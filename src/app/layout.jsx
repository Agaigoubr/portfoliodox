import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio ibrahim agaigou',
  description: 'Portfolio ibrahim agaigou',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
      
        {children}
        <h1 c>site web 40/100 الموقع قي قيادة التطور </h1>
      </body>
    </html>
  )
}
