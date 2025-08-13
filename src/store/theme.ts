
import { create } from 'zustand'

type Theme = 'light' | 'dark'

type ThemeState = {
  theme: Theme
  toggle: () => void
  set: (t: Theme) => void
}

const getInitial = (): Theme => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggle: () => set((s) => {
    const next = s.theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    return { theme: next }
  }),
  set: (t) => set(() => {
    localStorage.setItem('theme', t)
    document.documentElement.classList.toggle('dark', t === 'dark')
    return { theme: t }
  })
}))

// initialize
export const initTheme = () => {
  const t = getInitial()
  document.documentElement.classList.toggle('dark', t === 'dark')
  useThemeStore.getState().set(t)
}
