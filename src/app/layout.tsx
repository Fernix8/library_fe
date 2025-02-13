import type { Metadata } from "next"
import type { ReactNode } from "react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css"

export const metadata: Metadata = {
  title: "Memorial Books",
  description: "The Best Libraries That Every Book Lover Must Visit!",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

