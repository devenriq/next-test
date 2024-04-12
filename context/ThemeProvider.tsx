'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  theme: string
  changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(storedTheme)
  }, [])

  if (!isMounted) return <>Loading...</>

  const changeTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const { theme } = context

  return <div data-theme={theme}>{children}</div>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
