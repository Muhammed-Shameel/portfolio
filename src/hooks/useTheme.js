import { useSyncExternalStore } from "react"

/*
 * One tiny external store instead of per-component state, so every ThemeToggle
 * instance on the page (navbar, drawer, footer) shows the same label at once.
 * The class itself lives on <html> and is set before paint by the inline
 * script in index.html — this module only reads and changes it.
 */
const STORAGE_KEY = "portfolio-theme"
const CHROME_COLOR = { dark: "#131210", light: "#F6F3ED" }

const listeners = new Set()

let current =
  typeof document === "undefined" ||
  document.documentElement.classList.contains("dark")
    ? "dark"
    : "light"

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return current
}

function applyTheme(next) {
  if (typeof document === "undefined") return
  const root = document.documentElement

  // .theme-anim cross-fades surfaces and self-removes (see index.css)
  root.classList.add("theme-anim")
  root.classList.toggle("dark", next === "dark")
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* private mode — the theme still applies for this visit */
  }

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute("content", CHROME_COLOR[next])

  current = next
  listeners.forEach((listener) => listener())
  window.setTimeout(() => root.classList.remove("theme-anim"), 450)
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark")

  return {
    theme,
    isDark: theme === "dark",
    setTheme: applyTheme,
    toggleTheme: () => applyTheme(theme === "dark" ? "light" : "dark"),
  }
}
