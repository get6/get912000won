import RootProvider from "@/app/RootProvider"
import Bottom from "@/app/ui/layout/Bottom"
import Header from "@/app/ui/layout/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IA교육지원금 912,000원",
  description:
    "42서울 지원금 지급을 위한 160시간이 충족하는지 도움을 주는 계산기입니다",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <RootProvider>{children}</RootProvider>
        <Bottom />
      </body>
    </html>
  )
}
