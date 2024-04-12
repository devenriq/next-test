import { useTheme } from '@/context/ThemeProvider'
import { useRouter, usePathname } from '../../../navigation'
import { useState, useTransition } from 'react'
import { useParams } from 'next/navigation'
import { Language, LanguagePickerProps } from '@/types'
import { languages } from '@/constants/filters'

const MobileLanguagePicker = ({ defaultValue }: LanguagePickerProps) => {
  const { theme } = useTheme()
  const router = useRouter()
  const [_, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const initialLanguage = languages.find((language) => language.code === defaultValue)
    return initialLanguage || languages[0]
  })

  const handleLanguage = (language: Language) => () => {
    setCurrentLanguage(language)
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: language.code },
      )
    })
  }
  return (
    <div
      title="Change Language"
      className="dropdown dropdown-end flex items-center rounded-md transition-colors duration-300"
    >
      <div
        tabIndex={0}
        role="button"
        className={`btn h-10 min-h-10 px-8 text-h5 font-normal leading-h4`}
        aria-label="Language"
      >
        {currentLanguage.fullname}
      </div>
      <div
        tabIndex={0}
        className="dropdown-content top-px mt-16 max-h-[calc(100vh-10rem)] w-[150px] overflow-y-auto rounded-box border border-white/5 bg-base-100 text-base-content shadow-2xl outline outline-1 outline-black/5"
      >
        <ul className="menu menu-sm gap-1">
          {languages.map((item) => (
            <li onClick={handleLanguage(item)} key={item.code}>
              <button className={`${currentLanguage.code === item.code ? 'active' : ''}`}>
                <span
                  className={`badge badge-outline badge-sm rounded-md !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-60 `}
                >
                  {item.name}
                </span>
                <span>{item.fullname}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileLanguagePicker
