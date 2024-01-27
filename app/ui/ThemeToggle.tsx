"use client"

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

function ToggleIcon() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <MoonIcon className="h-6 w-6 hover:cursor-pointer dark:text-gray-400" />
      ) : (
        <SunIcon className="h-6 w-6 hover:cursor-pointer dark:text-gray-400" />
      )}
    </button>
  )
}

export default function ThemeToggle() {
  return <ToggleIcon />
}
