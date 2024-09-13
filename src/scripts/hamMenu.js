const hamIcon = document.querySelector('.ham-icon')
const closeIcon = document.querySelector('.close-icon')
const navMenu = document.querySelector('.header-element .navbar')


hamIcon.addEventListener('click', ()=> {
  displayMenu()
})

closeIcon.addEventListener('click', ()=> {
  hideMenu()
})

function displayMenu() {
  navMenu.style.minHeight = '101vh'
  navMenu.style.overflow = 'unset'
  closeIcon.style.opacity = '0.9'
}

function hideMenu() {
  navMenu.style.minHeight = '0vh'
  navMenu.style.overflow = 'hidden'
  closeIcon.style.opacity = '0'
}