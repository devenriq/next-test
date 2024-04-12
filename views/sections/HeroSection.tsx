'use client'

import TypingText from '@/components/shared/TypingText'
import { scrollToSection } from '@/lib/utils'
import { turretRoad } from '@/styles/fonts'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const HeroSection = () => {
  const t = useTranslations('Hero')

  const option1 = t('TextOption1')
  const option2 = t('TextOption2')
  const option3 = t('TextOption3')

  const options = [option1, option2, option3]

  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section
      className="relative flex min-h-screen min-w-full items-center overflow-hidden"
      id="section-hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-gray-800 to-transparent opacity-80"></div>
        <video
          autoPlay
          id="video"
          loop
          muted
          className="size-full object-cover"
          preload="none" // Load the video asynchronously to enhance the performance
          onLoad={() => setVideoLoaded(true)}
        >
          <source src="/assets/btcBg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
        <button
          className="btn btn-circle btn-outline btn-accent cursor-pointer"
          onClick={() => {
            scrollToSection('section-about')
          }}
          aria-label="scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>
      <div className="container relative mx-auto px-6">
        <div data-aos={'fade-right'}>
          <h1
            className={` ${turretRoad.className} mb-6 text-h3 font-bold leading-h4 text-white sm:text-h2 md:mb-8 md:pt-6 md:text-h2 md:leading-h3 xl:text-h1 xl:leading-h2`}
          >
            {t('MainTitle')}
            <br className="sm:hidden md:inline" />
            <span>{t('Subtitle')}</span>
            <TypingText strings={options} />
          </h1>
          <p className="mb-4 text-left text-lg font-regular leading-h5 text-white md:mb-6 md:block md:max-w-640 ">
            {t('Description')}
          </p>

          <div className="flex gap-2 md:gap-10">
            {/* <button
              className="mr-8 w-248 border-2 border-custom-lightGreen py-4 text-base text-custom-lightGreen hover:bg-custom-lightGreen hover:text-custom-darkGreen "
              // onClick={() => {
              //   scrollToSection('section-courses')
              // }}
            >
              <strong>Cursos disponibles</strong>
            </button> */}
            <button className="btn btn-outline text-custom-gray lg:btn-lg hover:bg-custom-gray hover:text-custom-darkGreen">
              {t('AvailableCourses')}
            </button>
            <button className="btn btn-accent lg:btn-lg">{t('RegisterNow')}</button>

            {/* <button
              className="hidden w-248  border-2 border-custom-lightGreen bg-custom-lightGreen px-6  py-4 text-base hover:bg-transparent hover:text-custom-lightGreen md:block"
              // onClick={() =>
              //   window.open(
              //     'https://wa.me/+51959337592?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20cursos',
              //     '_blank',
              //   )
              // }
            >
              ¡Quiero inscribirme!
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
