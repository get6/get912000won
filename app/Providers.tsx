"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { RecoilRoot } from "recoil"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) return null

  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  )
}
