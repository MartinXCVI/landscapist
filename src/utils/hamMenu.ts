document.addEventListener("DOMContentLoaded", (): void => {

  const hamIcon = document.querySelector(".ham-icon") as HTMLElement | null
  const closeIcon = document.querySelector(".close-icon") as HTMLElement | null
  const navMenu = document.querySelector(".header-element .navbar") as HTMLElement | null

  if(!hamIcon || !closeIcon || !navMenu) return

  function toggleMenu(isOpen: boolean): void {
    if(navMenu && closeIcon) {
      navMenu.style.minHeight = isOpen ? "105vh" : "0vh"
      navMenu.style.height = isOpen ? "105vh" : "0vh"
      navMenu.style.overflow = isOpen ? "unset" : "hidden"
      closeIcon.style.opacity = isOpen ? "0.9" : "0"
    }
  }

  hamIcon.addEventListener("click", () => toggleMenu(true))
  closeIcon.addEventListener("click", () => toggleMenu(false))
  
})