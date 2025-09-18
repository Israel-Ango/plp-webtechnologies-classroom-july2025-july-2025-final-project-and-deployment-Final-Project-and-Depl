// ==============================
// Mobile Menu Toggle
// ==============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ==============================
// Scroll Animation (fade-in cards)
// ==============================
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});