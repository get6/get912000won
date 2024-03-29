"use client"

import { ThemeProvider } from "next-themes"
import { RecoilRoot } from "recoil"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  )
}
