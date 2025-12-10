import { contactAnimations } from "../animations/contact.animations";
import { cleanUpScrollTriggers } from "@utils/cleanUpScrollTriggers";

document.addEventListener("DOMContentLoaded", (): void => {
  contactAnimations()
})

// Clean up when leaving the page
window.addEventListener("beforeunload", (): void => {
  cleanUpScrollTriggers()
})