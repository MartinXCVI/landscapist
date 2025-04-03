document.addEventListener("DOMContentLoaded", (): void => {

  let contactInputs = document.querySelectorAll<HTMLInputElement>('.contact-input')
  const fullname = document.getElementById('fullname-input') as HTMLInputElement | null
  const email = document.getElementById('email-input') as HTMLInputElement | null
  const phone = document.getElementById('phone-input') as HTMLInputElement | null
  const subject = document.getElementById('subject-input') as HTMLInputElement | null
  const message = document.getElementById('message-input') as HTMLInputElement | null

  const redColor: string = '#f00000'
  const greenColor: string = '#007000'

  function colorize(element: HTMLElement, color: string): void {
    element.style.color = color
  }

  /* Change in inputs' background colors */
  contactInputs.forEach(input => input.addEventListener('input', (): void => {
    input.value !== '' 
    ? input.style.backgroundColor = '#fdfdfdbb' 
    : input.style.backgroundColor = 'transparent'
  }))

  /* VALIDATIONS */

  if(!fullname || !email || !phone || !subject || !message) return;

  // fullname validation
  fullname.addEventListener('input', (): void => {
    const fullNameLength: number = fullname.value.length
    if(fullname.value.length < 3) {
      colorize(fullname, redColor)
    } else if (3 < fullNameLength && fullNameLength <= 75) {
      colorize(fullname, greenColor)
    }
  })

  // email validation
  email.addEventListener('input', (): void => {
    !emailRegEx(email.value)
    ? colorize(email, redColor)
    : colorize(email, greenColor)
  })

  function emailRegEx(email: string): boolean {
    const regEx: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regEx.test(email)
  }

  // phone validation
  phone.addEventListener('input', (): void => {
    const phoneLength: number = phone.value.length
    phoneLength < 7 || phoneLength > 15
    ? colorize(phone, redColor)
    : colorize(phone, greenColor)
  })

  // subject validation 
  subject.addEventListener('input', (): void => {
    const subjectLength: number = subject.value.length
    subjectLength < 6 || subjectLength > 70
    ? colorize(subject, redColor)
    : colorize(subject, greenColor)
  })

  // message validation
  message.addEventListener('input', (): void => {
    const messageLength: number = message.value.length
    messageLength < 30 || messageLength > 500
    ? colorize(message, redColor)
    : colorize(message, greenColor)
  })

})