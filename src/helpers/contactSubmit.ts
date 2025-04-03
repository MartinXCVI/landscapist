document.addEventListener("DOMContentLoaded", (): void => {
  /* Declarations */
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const result = document.getElementById('contact-result') as HTMLElement | null
  let contactInputs = document.querySelectorAll<HTMLInputElement>('.contact-input')

  if(!form || ! result) return;

  form.addEventListener("submit", async (event: Event): Promise<void> => {
    event.preventDefault();

    const formData: FormData = new FormData(form);
    const object: Record<string, string> = Object.fromEntries(formData) as Record<string, string>
    const json: string = JSON.stringify(object);
    // Initial message on submit
    result.style.color = "#fdfdfd"
    result.innerHTML = "Please wait..."
    // Attempting to send the email
    try {
      const response: Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      })
      // Storing the response and displaying the success message
      const data: object = await response.json()
      handleSuccessMessage(data, response)
    } catch(error: unknown) {
      if(error instanceof Error) {
        console.error("Error while submitting contact form:", error.message)
      } else {
        console.error("Error while submitting contact form:", error)
      }
      handleErrorMessage()
    } finally { // Reseting the form and clearing the message
      form.reset()
      contactInputs.forEach(input => (input.style.backgroundColor = "transparent"))
      handleClearMessage()
    }
  })

  /* Functions related to the message display */
  const handleSuccessMessage = (data: any, response: Response): void => {
    if(!result) return
    result.style.visibility = "visible"
    result.innerHTML = data.message
    result.style.color = response.ok ? "springgreen" : "#f00000"
  }

  const handleErrorMessage = (): void => {
    if(!result) return
    result.style.visibility = "visible"
    result.innerHTML = "Error - Something went wrong!"
    result.style.color = "#f00000"
  }

  const handleClearMessage = (): void => {
    if(!result) return
    setTimeout(() => {
      result.innerHTML = ""
      result.style.visibility = "hidden"
      result.style.color = "#fdfdfd"
    }, 4000)
  }
  
})