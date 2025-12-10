import { homeAnimations, homeServicesAnimations } from "../animations/home.animations";
import { cleanUpScrollTriggers } from "@utils/cleanUpScrollTriggers";

document.addEventListener('DOMContentLoaded', (): void => {
  homeAnimations()
  homeServicesAnimations()
})

// Clean up when leaving the page
window.addEventListener("beforeunload", (): void => {
  cleanUpScrollTriggers()
})