const hamIcon = document.querySelector('.ham-icon')
const closeIcon = document.querySelector('.close-icon')
const navMenu = document.querySelector('.header-element .navbar')
const body = document.getElementById('body')


hamIcon.addEventListener('click', ()=> {
  displayMenu()
})

closeIcon.addEventListener('click', ()=> {
  hideMenu()
})

function displayMenu() {
  navMenu.style.minHeight = '105vh'
  navMenu.style.height = '105vh'
  navMenu.style.overflow = 'unset'
  closeIcon.style.opacity = '0.9'
  body.style.overflow = 'hidden'
}

function hideMenu() {
  navMenu.style.minHeight = '0vh'
  navMenu.style.height = '0vh'
  navMenu.style.overflow = 'hidden'
  closeIcon.style.opacity = '0'
  body.style.overflow = 'unset'
}