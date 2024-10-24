import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'


export const metadata: Metadata = {
  title: "Khaled Khaouani ",
  description: 'A full stack web developer specializing in Next.js and React I have a diverse skill set that allows me to tackle complex challenges with ease', 
  creator : "khaled khaouani",
  icons : [
    {rel : "icon",url:"/images/img4.jpg",fetchPriority:"auto"}
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Analytics />
        </body>
    </html>
  )
}
