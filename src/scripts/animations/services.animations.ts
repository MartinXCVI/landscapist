import { gsap } from "../../libs/gsap"
import { revealPair } from "@utils/revealPair";

export function servicesAnimations(): void {
  // Fade right
  gsap.from(".services-intro-wrapper", {
    opacity: 0,
    x: -80,
    duration: 2,
    ease: "power2.out"
  })

  gsap.from(".services-intro-title", {
    // Fade left
    opacity: 0,
    x: 200,
    duration: 2,
    ease: "power2.out"
  })

  gsap.from('.services-blockquote', {
    // Zoom-out
    opacity: 0,
    scale: 1.2,
    filter: "blur(6px)",
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-blockquote",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onComplete() {
      // Removing blur for better performance afterwards
      gsap.set(".services-blockquote", { filter: "blur(0px)", clearProps: "filter" });
    }
  })
}

export function mainServicesAnimations(): void {
  document.querySelectorAll(".service-card").forEach((card) => {
    const isReversed = card.classList.contains("reverse")
    const img = card.querySelector(".service-card-fig")
    const info = card.querySelector(".service-card-info")

    if (!img || !info) return

    revealPair({
      trigger: card,
      img,
      info,
      reversed: isReversed
    })
  })
}