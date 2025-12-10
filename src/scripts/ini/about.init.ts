import { aboutAnimations } from "../animations/about.animations";
import { cleanUpScrollTriggers } from "@utils/cleanUpScrollTriggers";

document.addEventListener("DOMContentLoaded", (): void => {
  aboutAnimations()
})

// Clean up when leaving the page
window.addEventListener("beforeunload", (): void => {
  cleanUpScrollTriggers()
})