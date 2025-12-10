import { gsap } from "../../libs/gsap"

export function contactAnimations(): void {
  // Fade right
  gsap.from('.form-wrapper', {
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  })
}