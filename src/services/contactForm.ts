import { VALIDATION_RULES } from "src/constants/validations";
import { THEME_COLORS, FORM_COLORS } from "src/constants/colors";
import { FORM_MESSAGES } from "src/constants/messages";


/* Utility functions */

function setInputColor(element: HTMLElement, color: string): void {
  element.style.color = color
}

function isValidEmail(email: string): boolean {
  return VALIDATION_RULES.email.pattern.test(email)
}

function isLengthValid(value: string, min: number, max: number): boolean {
  const length = value.length
  return length >= min && length <= max
}

/* Validation functions */

function validateFullname(input: HTMLInputElement): void {
  const isValid = isLengthValid(
    input.value,
    VALIDATION_RULES.fullname.min,
    VALIDATION_RULES.fullname.max
  )
  setInputColor(input, isValid ? FORM_COLORS.success : FORM_COLORS.error)
}

function validateEmail(input: HTMLInputElement): void {
  const isValid = isValidEmail(input.value)
  setInputColor(input, isValid ? FORM_COLORS.success : FORM_COLORS.error)
}

function validatePhone(input: HTMLInputElement): void {
  const isValid = isLengthValid(
    input.value,
    VALIDATION_RULES.phone.min,
    VALIDATION_RULES.phone.max
  )
  setInputColor(input, isValid ? FORM_COLORS.success : FORM_COLORS.error)
}

function validateSubject(input: HTMLInputElement): void {
  const isValid = isLengthValid(
    input.value,
    VALIDATION_RULES.subject.min,
    VALIDATION_RULES.subject.max
  )
  setInputColor(input, isValid ? FORM_COLORS.success : FORM_COLORS.error)
}

function validateMessage(input: HTMLTextAreaElement): void {
  const isValid = isLengthValid(
    input.value,
    VALIDATION_RULES.message.min,
    VALIDATION_RULES.message.max
  )
  setInputColor(input, isValid ? FORM_COLORS.success : FORM_COLORS.error)
}

/* Form submission handlers */

function handleSuccessMessage(data: any, response: Response, result: HTMLElement): void {
  result.style.visibility = "visible"
  result.innerHTML = data.message
  result.style.color = response.ok ? FORM_COLORS.brightSuccess : FORM_COLORS.error
}

function handleErrorMessage(result: HTMLElement): void {
  result.style.visibility = "visible"
  result.innerHTML = FORM_MESSAGES.error
  result.style.color = FORM_COLORS.error
}

function handleClearMessage(result: HTMLElement): void {
  setTimeout(() => {
    result.innerHTML = ""
    result.style.visibility = "hidden"
    result.style.color = THEME_COLORS.neutral
  }, 4000)
}

/* MAIN FUNCTIONALITY */

document.addEventListener("DOMContentLoaded", (): void => {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const result = document.getElementById('contact-result') as HTMLElement | null
  const submitButton = document.querySelector('.send-btn') as HTMLButtonElement | null
  const contactInputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.contact-input')
  
  const fullname = document.getElementById('fullname-input') as HTMLInputElement | null
  const email = document.getElementById('email-input') as HTMLInputElement | null
  const phone = document.getElementById('phone-input') as HTMLInputElement | null
  const subject = document.getElementById('subject-input') as HTMLInputElement | null
  const message = document.getElementById('message-input') as HTMLTextAreaElement | null

  // Early return if critical elements are missing
  if (!form || !result || !fullname || !email || !phone || !subject || !message) {
    console.error("Contact form elements not found")
    return
  }

  // Change in inputs' background colors */
  contactInputs.forEach(input => {
    input.addEventListener('input', (): void => {
      input.style.backgroundColor = input.value !== '' 
      ? FORM_COLORS.inputFilled
      : FORM_COLORS.inputEmpty
    })
  })

  // Validation listeners
  fullname.addEventListener('input', (): void => validateFullname(fullname))
  email.addEventListener('input', (): void => validateEmail(email))
  phone.addEventListener('input', (): void => validatePhone(phone))
  subject.addEventListener('input', (): void => validateSubject(subject))
  message.addEventListener('input', (): void => validateMessage(message))

  // Form submission
  form.addEventListener("submit", async (event: Event): Promise<void> => {
    event.preventDefault()

    // Disabling submit button to prevent double submissions
    if(submitButton) {
      submitButton.disabled = true
      submitButton.style.opacity = '0.6'
      submitButton.style.cursor = 'not-allowed'
    }

    const formData: FormData = new FormData(form);
    const object: Record<string, string> = Object.fromEntries(formData) as Record<string, string>
    const json: string = JSON.stringify(object);

    // Initial message on submit
    result.style.color = THEME_COLORS.neutral
    result.innerHTML = FORM_MESSAGES.loading

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      })

      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`)
      }

      const data = await response.json()
      handleSuccessMessage(data, response, result)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error while submitting contact form:", error.message)
      } else {
        console.error("Error while submitting contact form:", error)
      }
      handleErrorMessage(result)
    } finally {
      form.reset()
      contactInputs.forEach(input => {
        input.style.backgroundColor = "transparent"
      })
      handleClearMessage(result)
      
      // Re-enable submit button
      if (submitButton) {
        submitButton.disabled = false
        submitButton.style.opacity = '1'
        submitButton.style.cursor = 'pointer'
      }
    }

  }) // End of form's submit event listener

})