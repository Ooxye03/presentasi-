// GSAP basic animation per slide
window.addEventListener('load', () => {
  const titles = document.querySelectorAll('.fade');
  gsap.from(titles, {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1.4,
    ease: "power2.out"
  });
});
