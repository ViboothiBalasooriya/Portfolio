function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}





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

  document.querySelectorAll(".details-container, .contact-info-upper-container").forEach((card) => {
  card.style.transformStyle = "preserve-3d";
  card.style.perspective = "1000px";

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside card
    const y = e.clientY - rect.top;  // Mouse Y inside card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.03,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      ease: "power2.out",
      duration: 0.6,
    });
  });
});



  gsap.from(".section__text__p1, .section__text, .title, .section__pic-container", {
    scrollTrigger: {
      trigger: ".section__text__p1",
      start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 2.5,
    ease: "power2.out"
  });

