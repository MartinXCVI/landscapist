import { gsap } from "../../libs/gsap"

export function aboutAnimations():void {
  // Fade right
  gsap.from('.about-title', {
    x: -80,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  })
}