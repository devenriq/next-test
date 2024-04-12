'use client'
import { useCallback, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from '@/views/Home'

const Page = () => {
  const matches = 768

  // scroll handler for adding/removing aoe-animation class
  const scrollHandler = useCallback(
    (/* event: Event */) => {
      const aosElements = document.querySelectorAll('[data-aos]')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.25) entry.target.classList.add('aos-animate')
          // enable re-animation only on bigger screens
          else matches && entry.target.classList.remove('aos-animate')
        })
      })
      aosElements.forEach((element) => {
        observer.observe(element)
      })
    },
    [matches],
  )

  useEffect(() => {
    // AOS initialization
    AOS.init({ anchorPlacement: 'top-bottom', duration: 500 })
  }, [])

  useEffect(() => {
    // remove animation delay on small screens
    if (!matches)
      document.querySelectorAll('[data-aos]').forEach((element) => {
        element.removeAttribute('data-aos-delay')
      })
    // fix for scrolling inside a container instead of window
    window.addEventListener('scroll', scrollHandler, {
      capture: true,
      passive: true,
    })

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [matches, scrollHandler])

  return <Home />
}

export default Page
