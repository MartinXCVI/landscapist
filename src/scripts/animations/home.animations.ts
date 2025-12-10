import { gsap } from "../../libs/gsap"
import { fadeSide } from "@utils/fadeSide";

export function homeAnimations(): void {
  // Fade-up
  gsap.from(".home-introduction", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home-introduction",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  })
 
  // Zoom-out blockquote animation
  gsap.from(".home-services-blockquote", {
    opacity: 0,
    scale: 1.2,
    filter: "blur(6px)",
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".home-services-blockquote",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onComplete() {
      // Removing blur for better performance afterwards
      gsap.set(".home-services-blockquote", { filter: "blur(0px)" });
    }
  })
}

export function homeServicesAnimations() {
  const containers = Array.from(document.querySelectorAll(".home-services-container"))

  type AnimationItem = {
    element: Element;
    direction: 'left' | 'right';
  }

  // Batching figures
  const figures: AnimationItem[] = containers.map((container, index) => ({
    element: container.querySelector(".home-services-figure"),
    direction: (index % 2 === 1 ? "right" : "left") as 'left' | 'right'
  })).filter((item): item is AnimationItem => item.element !== null)

  // Batching contents
  const contents: AnimationItem[] = containers.map((container, index) => ({
    element: container.querySelector(".home-services-content"),
    direction: (index % 2 === 1 ? "left" : "right") as 'left' | 'right'
  })).filter((item): item is AnimationItem => item.element !== null)

  // Animate in batches
  figures.forEach(({ element, direction }) => fadeSide(element, direction))
  contents.forEach(({ element, direction }) => fadeSide(element, direction))
}