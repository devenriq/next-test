export interface NavigationElements {
  id: number
  name: string
  href: string
}

export interface Language {
  code: string
  name: string
  fullname: string
}

export interface LanguagePickerProps {
  defaultValue: string
}

export interface MobileNavbarProps {
  navigationElements: NavigationElements[]
}

export interface TypingTextProps {
  strings: string[]
}
