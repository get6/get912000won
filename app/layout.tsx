import Providers from "@/app/Providers"
import Bottom from "@/app/ui/layout/Bottom"
import Header from "@/app/ui/layout/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900`}>
        <Providers>
          <Header />
          {children}
          <Bottom />
        </Providers>
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google tag (gtag.js) */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-YV4EWVLLM0" />
            <Script id="google-analytics">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-YV4EWVLLM0');
            `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
