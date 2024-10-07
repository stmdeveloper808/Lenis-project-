
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Tailwind CSS is typically installed and configured at the project level, not within a JavaScript file.
// However, if you're using a CDN for Tailwind CSS (as seen in your HTML file), no additional installation is needed in this script.

// If you want to ensure Tailwind CSS is loaded before your JavaScript runs, you can add a check:
document.addEventListener('DOMContentLoaded', (event) => {
  if (window.tailwind) {
    console.log('Tailwind CSS is loaded and ready to use');
  } else {
    console.warn('Tailwind CSS is not detected. Make sure it\'s properly included in your HTML.');
  }
});

// GSAP animation for the grid elements





document.querySelectorAll(".elem").forEach(elem => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();
  let xTransform = gsap.utils.random(-100, 100);
  
  tl.set(image, {
    transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
  }, "start")
  .to(image, {
    scale: 0,
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  }, "start")
  .to(elem, {
    xPercent: xTransform,
    ease: "power4.easeInOut",
    scrollTrigger: {
      trigger: image,
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  }, "start");
});
