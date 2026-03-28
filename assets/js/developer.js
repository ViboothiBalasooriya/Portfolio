function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);







// gsap part eka

gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".details-container").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 98%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2,
      ease: "power2.out"
    });
  });



  gsap.from(".section__text__p1, .section__text, .title, .section__pic-container", {
    scrollTrigger: {
      trigger: ".section__text__p1",
      start: "top 90%",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out"
  });

document.querySelectorAll(".details-container, .contact-info-upper-container").forEach((card) => {
  // Set perspective to parent
  card.style.transformStyle = "preserve-3d";
  card.style.transformOrigin = "center";

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      rotationX: 4,
      rotationY: -4,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      duration: 0.5,
      ease: "power3.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
      duration: 0.5,
      ease: "power3.out"
    });
  });
});