"use client"

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

function ToggleIcon() {
  const { theme, setTheme } = useTheme()

  if (theme === "dark") {
    return (
      <MoonIcon
        className="h-6 w-6 hover:cursor-pointer dark:text-gray-400"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    )
  }
  return (
    <SunIcon
      className="h-6 w-6 hover:cursor-pointer dark:text-gray-400"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  )
}

export default function ThemeToggle() {
  return <ToggleIcon />
}
