import type { Metadata } from "next"
import type { ReactNode } from "react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css"

export const metadata: Metadata = {
  title: "Thư viện trường THPT Phan Châu Trinh ",
  description: "ĐỌC MỘT CUỐN SÁCH, ĐI MUÔN DẶM ĐƯỜNG",
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

