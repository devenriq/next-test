export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId)
  console.log({ section })
  if (section != null) {
    const sectionTop = section.offsetTop - 64
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    })
  }
}
