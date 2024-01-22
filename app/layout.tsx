import Providers from "@/app/Providers"
import Bottom from "@/app/ui/layout/Bottom"
import Header from "@/app/ui/layout/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const title = "IA교육지원금 912,000원"
const description = "42서울 지원금을 위한 출석 시간 계산기 😃"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://get6.github.io/get912000won"
      : "http://localhost:3000"
  ),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
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
          <div className="flex flex-col h-full lg:h-screen">
            <Header />
            {children}
            <Bottom />
          </div>
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
