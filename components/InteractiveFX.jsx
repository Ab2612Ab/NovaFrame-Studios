"use client";

import { useEffect } from "react";

export default function InteractiveFX() {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    const spotlight = document.createElement("div");
    spotlight.className = "pointer-spotlight";
    spotlight.setAttribute("aria-hidden", "true");
    document.body.appendChild(spotlight);

    let raf = 0;
    const updateScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? window.scrollY / max : 0;
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
      });
    };

    const move = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      spotlight.classList.add("visible");
    };

    const leave = () => spotlight.classList.remove("visible");

    const revealItems = Array.from(document.querySelectorAll(".standalone-page section, .project, .service, .step, .process-focus, .contact-form"));
    revealItems.forEach((item) => item.classList.add("fx-reveal"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    updateScroll();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      progress.remove();
      spotlight.remove();
    };
  }, []);

  return null;
}
