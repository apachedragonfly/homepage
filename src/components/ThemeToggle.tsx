"use client"

import { useTheme } from "./ThemeProvider"
import { FaSun, FaMoon } from "react-icons/fa6"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-6 h-6 text-gray-800" />
      ) : (
        <FaSun className="w-6 h-6 text-gray-200" />
      )}
    </button>
  )
} 