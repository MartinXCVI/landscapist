import { gsap } from "../libs/gsap"

/**
* Fade From Left or Right
* @param target Element or selector
* @param direction 'left' | 'right'
*/
export function fadeSide(target: string | Element, direction: 'left'|'right') {
  gsap.from(target, {
    x: direction === 'left' ? -60 : 60,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      toggleActions: "play none none none",
    }
  })
}