import { useEffect, useRef } from 'react'
import { TypingTextProps } from '@/types'
import Typed from 'typed.js'

const TypingText = ({ strings }: TypingTextProps) => {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 200, // velocidad de escritura
      backSpeed: 100, // velocidad de borrado
      loop: true,
      cursorChar: '_',
    }

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options)

      return () => {
        typed.destroy()
      }
    }
  }, [strings])

  return <span ref={typedRef} className="text-custom-lightGreen"></span>
}

export default TypingText
