export function $<T extends HTMLElement = HTMLElement>(key: string) {
  const el = document.querySelector(key)
  if (el === null) return null
  return el as T
}