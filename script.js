document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  const featureCards = document.querySelectorAll(".feature-card");
  const animationDelay = 1600;

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const expanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
      mobileMenuButton.setAttribute("aria-expanded", !expanded);
    });
  }

  readMoreButtons.forEach((button) => {
    const testimonial = button.parentNode;
    const shortComment = testimonial.querySelector(".short-comment");
    const detailedComment = testimonial.querySelector(".detailed-comment");
    let isExpanded = false;

    button.addEventListener("click", function () {
      isExpanded = !isExpanded;

      if (isExpanded) {
        shortComment.classList.add("hidden");
        detailedComment.classList.remove("hidden");
        this.textContent = "Read Less";
      } else {
        shortComment.classList.remove("hidden");
        detailedComment.classList.add("hidden");
        this.textContent = "Read More";
      }
    });
  });

  function animateFeaturesSequentially() {
    featureCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * animationDelay);
    });
  }

  animateFeaturesSequentially();
});
