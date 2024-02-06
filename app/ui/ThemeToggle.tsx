"use client"

import { SunIcon, MoonIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function ToggleIcon() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount)
    return (
      <ArrowPathIcon className="h-6 w-6 hover:cursor-pointer dark:text-gray-400" />
    )

  if (resolvedTheme === "dark") {
    return (
      <MoonIcon
        onClick={() => setTheme("light")}
        className="h-6 w-6 hover:cursor-pointer dark:text-gray-400"
      />
    )
  } else {
    return (
      <SunIcon
        onClick={() => setTheme("dark")}
        className="h-6 w-6 hover:cursor-pointer dark:text-gray-400"
      />
    )
  }
}

export default function ThemeToggle() {
  return <ToggleIcon />
}
