"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Wraps a <section> and reveals any child with the `reveal` class on scroll.
 * Add `data-reveal="left"` / `"right"` / `"scale"` to a child for a variant.
 */
export default function AnimatedSection({ id, className = "", children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        const variant = el.dataset.reveal;
        const from = { opacity: 0, duration: 0.9, ease: "power3.out" };
        if (variant === "left") from.x = -50;
        else if (variant === "right") from.x = 50;
        else if (variant === "scale") from.scale = 0.92;
        else from.y = 44;

        gsap.from(el, {
          ...from,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
