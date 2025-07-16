// Bisa diperluas dengan GSAP animation tambahan nanti
gsap.from(".fade", {
  duration: 1.5,
  opacity: 0,
  y: 30,
  stagger: 0.3,
  ease: "power2.out"
});
