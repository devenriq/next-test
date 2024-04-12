import { useTheme } from '@/context/ThemeProvider'
import { MobileNavbarProps, NavigationElements } from '@/types'
import MobileLanguagePicker from './MobileLanguagePicker'
import { useLocale } from 'next-intl'

const MobileNavbar = ({ navigationElements }: MobileNavbarProps) => {
  const { theme } = useTheme()
  const locale = useLocale()

  return (
    <div className={`z-50 flex h-screen w-full flex-col items-center gap-10 pt-24 lg:hidden`}>
      <ul className="flex flex-col space-y-2 py-2 text-center">
        {navigationElements.map((item: NavigationElements) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`block py-2 ${theme === 'light' ? 'hover:text-secondary' : 'hover:text-accent'} text-h5 leading-h4`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <MobileLanguagePicker defaultValue={locale} />
    </div>
  )
}

export default MobileNavbar
