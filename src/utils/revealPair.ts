import { gsap } from "../libs/gsap";

interface IRevealPair {
  trigger: string | Element;
  img: string | Element;
  info: string | Element;
  reversed?: boolean;
}

export function revealPair({ trigger, img, info, reversed = false }: IRevealPair) {
  const direction: 1 | -1 = reversed ? -1 : 1

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Image animation (with rotation)
  timeline.from(img, {
    opacity: 0,
    rotateY: 90 * direction,
    duration: 2,
    ease: "back.out(1.4)",
    onComplete() {
      gsap.to(img, { rotateY: 0, duration: 0.4, ease: "sine.out" });
    }
  }, 0); // Starts at 0

  // Info animation (slightly delayed)
  timeline.from(info, {
    opacity: 0,
    y: 80,
    duration: 2,
    ease: "power4.out"
  }, 0.1); // Starts 0.1s after image for subtle stagger

  return timeline;
}
