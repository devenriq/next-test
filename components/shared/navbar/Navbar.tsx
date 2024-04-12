'use client'
import { useState } from 'react'
import Image from 'next/image'
import Theme from './Theme'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { NavigationElements } from '@/types'
import { useTheme } from '@/context/ThemeProvider'
import MobileNavbar from './MobileNavbar'
import MenuIcon from '../MenuIcon'
import LanguagePicker from './LanguagePicker'

const Navbar = () => {
  const { theme } = useTheme()
  const t = useTranslations('Navbar')
  const locale = useLocale()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationElements: NavigationElements[] = [
    {
      href: '#about',
      id: 1,
      name: t('about'),
    },
    {
      href: '#courses',
      id: 3,
      name: t('courses'),
    },
    {
      href: '#program',
      id: 4,
      name: t('program'),
    },
    {
      href: '#reviews',
      id: 5,
      name: t('reviews'),
    },
    {
      href: '#contact',
      id: 6,
      name: t('contact'),
    },
  ]

  const toggleOpenMenu = (): void => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full ${theme === 'light' && 'bg-white'} ${!isMenuOpen ? 'backdrop-blur-md' : theme === 'dark' ? 'bg-primary' : ''}`}
    >
      <div className="container mx-auto flex h-[70px] flex-row items-center justify-between px-6">
        <MenuIcon toggleOpenMenu={toggleOpenMenu} />
        <Link href="/">
          <Image
            src={theme === 'dark' ? '/assets/logoDark2.svg' : '/assets/logoLight.svg'}
            alt="Logo"
            width={150}
            height={60}
          />
        </Link>
        <div className="flex gap-2 lg:gap-0">
          <Theme />
          <ul className="hidden px-1 lg:menu lg:menu-horizontal">
            {navigationElements.map((item: NavigationElements) => (
              <li key={item.id}>
                <a
                  className={`cursor-pointer text-base ${theme === 'light' ? ' hover:text-custom-green' : 'hover:text-custom-lightGreen'}`}
                  href="/"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <LanguagePicker defaultValue={locale} />
          </ul>
        </div>
      </div>
      {isMenuOpen && <MobileNavbar navigationElements={navigationElements} />}
    </div>
  )
}

export default Navbar
