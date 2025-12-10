import { servicesAnimations } from "../animations/services.animations";
import { mainServicesAnimations } from "../animations/services.animations";
import { cleanUpScrollTriggers } from "@utils/cleanUpScrollTriggers";

document.addEventListener("DOMContentLoaded", (): void => {
  servicesAnimations()
  mainServicesAnimations()
})

// Clean up when leaving the page
window.addEventListener("beforeunload", (): void => {
  cleanUpScrollTriggers()
})