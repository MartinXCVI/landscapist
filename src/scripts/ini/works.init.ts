import { worksAnimations } from "../animations/works.animations";
import { cleanUpScrollTriggers } from "@utils/cleanUpScrollTriggers";

document.addEventListener("DOMContentLoaded", (): void => {
  worksAnimations()
})

// Clean up when leaving the page
window.addEventListener("beforeunload", (): void => {
  cleanUpScrollTriggers()
})