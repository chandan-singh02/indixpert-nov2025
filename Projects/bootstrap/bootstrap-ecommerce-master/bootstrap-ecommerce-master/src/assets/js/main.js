import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  // Product favorite / heart toggle
  const favButtons = document.querySelectorAll(".fav");
  favButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-active");
      const icon = btn.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");
      }
    });
  });

  // Newsletter form (footer) - prevent real submit, just demo
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (input && input.value) {
        alert(`Thanks! We'll send updates to ${input.value}`);
        newsletterForm.reset();
      }
    });
  }
});
