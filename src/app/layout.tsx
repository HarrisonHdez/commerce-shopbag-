import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import { Providers } from "@/redux/provider";
import Top from '@/components/Top';
import Chat from '@/components/Chat';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Store - Quality Products',
  description: 'Find the best quality products at Your Store. We offer a wide range of items to choose from.',
}

export default function RootLayout({
  children,
}: {



  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={inter.className}>

        <Providers>{children}</Providers>

        <Chat />
        <Top /> 
      </body>
    </html>
  )
}
