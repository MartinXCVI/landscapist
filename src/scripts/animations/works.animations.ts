import { gsap, ScrollTrigger } from "../../libs/gsap"
import { fadeSide } from "@utils/fadeSide";

export function worksAnimations(): void {
  // Fade right
  gsap.from(".works-intro-title", {
    x: -80,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  })
  // Fade-up
  gsap.from(".works-intro-text", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  })

  // Landscape Works (single items)
  ScrollTrigger.batch(".landscape-figure", {
    onEnter: (elements) => {
      gsap.from(elements, {
        opacity: 0,
        scale: 0.7,
        filter: "blur(8px)",
        duration: 2,
        ease: "power3.out",
        stagger: 0.1,
        onComplete() {
          gsap.set(elements, { filter: "blur(0px)", clearProps: "filter" })
        },
      })
    },
    start: "top 95%",
    once: true
  })


  // Work Cards (paired items)
  document.querySelectorAll(".work-cards-card").forEach((card, index) => {
    const direction = index % 2 === 0 ? "left" : "right"
    fadeSide(card, direction)
  })
}