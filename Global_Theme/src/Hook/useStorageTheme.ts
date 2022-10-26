import { ThemeType } from '../Themes/Themes'

export function useStorageTheme(key: string, tema: ThemeType) {
  localStorage.setItem(key, JSON.stringify(tema))
}
