"use client"

import { SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <SunIcon
      className="h-6 w-6 hover:cursor-pointer dark:text-gray-400"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  )
}
