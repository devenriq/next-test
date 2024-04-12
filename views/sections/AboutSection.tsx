'use client'

import { turretRoad } from '@/styles/fonts'
import { useTheme } from '../../context/ThemeProvider'
import Image from 'next/image'

const About: React.FC = () => {
  const { theme } = useTheme()

  return (
    <section
      data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}
      className="mx-auto flex flex-col px-6 py-16 lg:px-32 lg:py-16"
      id="section-about"
    >
      <div className="md:hidden">
        <p className={`${turretRoad.className} text-center text-base`}>
          # Transforma tu futuro profesional
        </p>
        <h1 className="text-center text-h5 font-bold">
          <span className="font-bold leading-h4">Aprenderás las </span>
          <span className="font-bold leading-h4">tecnologías </span>
          <span className="font-bold leading-h4 text-custom-green">más demandadas</span>
        </h1>
      </div>

      <div className="hidden md:flex md:w-full">
        <div className="mx-auto w-1/2 pr-8 md:flex-col lg:mt-16">
          <div className="mb-4 lg:mb-6">
            <h3 className={`${turretRoad.className} text-left text-base lg:text-h5`}>
              # Transforma tu futuro profesional
            </h3>
            <h1 className="text-h5 font-bold lg:text-h3">
              <span className="leading-h2">Aprenderás las </span>
              <span className="leading-h5">tecnologías </span>
              <span className="leading-h5 text-custom-green">más demandadas</span>
            </h1>
          </div>
          <div className="text-left lg:text-h6">
            <p className="mb-2 md:mb-4">
              En Byte The Code hacemos que la educación en programación sea{' '}
              <strong>accesible</strong>, de <strong>alta calidad</strong> y{' '}
              <strong>100% en vivo</strong>. Ofrecemos becas para ayudar a financiar la formación y
              asegurar habilidades altamente demandadas.
            </p>
            <p className="mb-2 md:mb-4">
              Trabajamos con nuestros graduados para ayudarlos a <strong>encontrar empleo</strong>{' '}
              en la industria de la tecnología. Nuestro enfoque en la empleabilidad significa que
              nuestros estudiantes adquieren habilidades blandas y{' '}
              <strong>experiencia práctica</strong>.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <Image
            src="/assets/aboutUsDecoratorsDesk.png"
            alt="AboutUsDecoratorsDesk"
            width={433}
            height={556}
            className="mx-auto"
          />
        </div>
      </div>

      <div className="relative mx-auto mb-6 mt-16 w-335 md:hidden">
        <Image
          src="/assets/aboutUs.png"
          alt="AboutUs"
          width={248}
          height={343.609}
          className="absolute inset-0 z-10 mx-auto w-248"
        />
        <Image
          src="/assets/aboutUsDecorators.svg"
          alt="AboutUsDecorators"
          width={335}
          height={429.711}
          className="relative left-0 z-20 mx-auto mt-[-42px]"
        />
      </div>
      <div className="text-left md:hidden">
        <p className="mb-2 md:mb-4">
          En Byte The Code hacemos que la educación en programación sea <strong>accesible</strong>,
          de <strong>alta calidad</strong> y <strong>100% en vivo</strong>. Ofrecemos becas para
          ayudar a financiar la formación y asegurar habilidades altamente demandadas.
        </p>
        <p className="mb-2 mt-10 md:mb-4">
          Trabajamos con nuestros graduados para ayudarlos a <strong>encontrar empleo</strong> en la
          industria de la tecnología. Nuestro enfoque en la empleabilidad significa que nuestros
          estudiantes adquieren habilidades blandas y <strong>experiencia práctica</strong>.
        </p>
      </div>
    </section>
  )
}
export default About
