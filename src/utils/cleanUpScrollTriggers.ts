import { ScrollTrigger } from "../libs/gsap"

export function cleanUpScrollTriggers(): void {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}
