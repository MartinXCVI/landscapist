document.addEventListener("DOMContentLoaded", (): void => {
  /* Declarations */
  const hamIcon = document.querySelector(".ham-icon") as HTMLElement | null
  const closeBtn = document.querySelector(".close-btn") as HTMLElement | null
  const navMenu = document.querySelector(".header-element .navbar") as HTMLElement | null
  const navList = document.querySelector('.nav-list') as HTMLElement | null
  const navLinks = document.querySelectorAll('.header-element .navbar .nav-list .nav-item .nav-link') as NodeListOf<HTMLElement>

  if(!hamIcon || !closeBtn || !navMenu || !navList) return

  function toggleMenu(isOpen: boolean): void {
    if(navMenu && closeBtn && hamIcon && navList) {
      // Setting attributes and styles on menu toggle
      navMenu.setAttribute("aria-hidden", isOpen ? "false" : "true")
      navList.setAttribute("aria-hidden", isOpen ? "false" : "true")
      hamIcon.setAttribute("aria-expanded", isOpen.toString())
      navMenu.style.minHeight = isOpen ? "105vh" : "0vh"
      navMenu.style.height = isOpen ? "105vh" : "0vh"
      navMenu.style.overflow = isOpen ? "unset" : "hidden"
      closeBtn.style.opacity = isOpen ? "0.8" : "0"

      /* Toggling tabindex on all navigation links */
      // When menu is closed, set tabindex to -1 (removes from tab order)
      // When menu is open, set tabindex to 0 (adds to tab order)
      navLinks.forEach(link => {
        link.tabIndex = isOpen ? 0 : -1
      })

      /* Focus management */
      if(isOpen) {
        setTimeout((): void => closeBtn.focus(), 100) // focus on close button when menu opens
      } else {
        setTimeout((): void => hamIcon.focus(), 100) // focus back to hamburger button when menu closes
      }
    }
  }

  // Initial state on page load
  const isDesktop = window.innerWidth > 991
  if(!isDesktop) {
    toggleMenu(false) // Start with menu closed on mobile
  } else {
    // On desktop, keeping links focusable but mobile menu elements hidden
    navLinks.forEach(link => {
      link.tabIndex = 0 // Always focusable on desktop
    })
  }

  /* EVENT LISTENERS */
  // Opening the nav menu
  hamIcon.addEventListener("click", () => toggleMenu(true))
  // Closing the nav menu
  closeBtn.addEventListener("click", () => toggleMenu(false))
  // Escape key support: Allowing users to close the menu with the 'Esc' key:
  document.addEventListener('keydown', (event): void => {
    if(event.key === "Escape" && navMenu?.getAttribute('aria-hidden') === 'false') {
      toggleMenu(false)
    }
  })
  
})