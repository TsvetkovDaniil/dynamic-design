import { useLayoutEffect, useState } from 'react'

export const useTheme = (currentTheme) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || currentTheme
  )

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return [theme, setTheme]
}
