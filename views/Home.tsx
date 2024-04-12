import dynamic from 'next/dynamic'

import HeroSection from './sections/HeroSection'

const About = dynamic(() => import('./sections/AboutSection'))

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
    </>
  )
}

export default Home
