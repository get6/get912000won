"use client"

import { FaceSmileIcon } from "@heroicons/react/16/solid"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

function ToggleIcon() {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? (
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
