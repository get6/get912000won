"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { RecoilRoot } from "recoil"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  )
}
