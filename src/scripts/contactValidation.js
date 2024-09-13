let contactInputs = document.querySelectorAll('.contact-input')
const fullname = document.getElementById('fullname-input')
const email = document.getElementById('email-input')
const phone = document.getElementById('phone-input')
const subject = document.getElementById('subject-input')
const message = document.getElementById('message-input')

const redColor = '#f00000'
const greenColor = '#007000'

function colorize(element, color) {
  element.style.color = color
}

/* change in inputs' colors */
contactInputs.forEach(input => input.addEventListener('input', ()=> {
  input.value !== '' 
  ? input.style.backgroundColor = '#fdfdfdbb' 
  : input.style.backgroundColor = 'transparent'
}))

/* validations */

// fullname validation
fullname.addEventListener('input', ()=> {
  if(fullname.value.length < 3) {
    colorize(fullname, redColor)
  } else if (3 < fullname.value.length <= 75) {
    colorize(fullname, greenColor)
  }
})

// email validation
email.addEventListener('input', ()=> {
  !emailRegEx(email.value)
  ? colorize(email, redColor)
  : colorize(email, greenColor)
})

function emailRegEx(email) {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regEx.test(email)
}

// phone validation
phone.addEventListener('input', ()=> {
  phone.value.length < 10 || phone.value.length > 10
  ? colorize(phone, redColor)
  : colorize(phone, greenColor)
})

// subject validation 
subject.addEventListener('input', ()=> {
  subject.value.length < 6 || subject.value.length > 70
  ? colorize(subject, redColor)
  : colorize(subject, greenColor)
})

// message validation
message.addEventListener('input', ()=> {
  message.value.length < 30 || message.value.length > 500
  ? colorize(message, redColor)
  : colorize(message, greenColor)
})
