document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");
  const categoryProjects = document.querySelectorAll(".category-projects");
  const portfolioExpanded = document.getElementById("portfolio-expanded");

  if (!categoryCards.length || !categoryProjects.length) return;

  
  categoryProjects.forEach((section) => {
    section.classList.add("hidden");
    section.classList.remove("visible");
  });

  
  categoryCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;

      const category = card.getAttribute("data-category");
      const targetSection = document.getElementById(`category-${category}`);

      if (!targetSection) return;

      
      const isCurrentlyExpanded = card.classList.contains("expanded");

      
      categoryCards.forEach((otherCard) => {
        if (otherCard !== card && otherCard.classList.contains("expanded")) {
          otherCard.classList.remove("expanded");
          const otherCategory = otherCard.getAttribute("data-category");
          const otherSection = document.getElementById(
            `category-${otherCategory}`
          );
          if (otherSection) {
            otherSection.classList.remove("visible");
            otherSection.classList.add("hidden");
          }
        }
      });

      
      if (isCurrentlyExpanded) {
        card.classList.remove("expanded");
        targetSection.classList.remove("visible");
        targetSection.classList.add("hidden");
      } else {
        card.classList.add("expanded");
        targetSection.classList.remove("hidden");
        targetSection.classList.add("visible");
        
        
        initializeCarousels(targetSection);
        
        
        initializeDropdowns(targetSection);

        
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      }
    });
  });

  
  function initializeCarousels(container) {
    const carousels = container.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track");
      const slides = carousel.querySelectorAll(".carousel-image");
      const prevBtn = carousel.querySelector(".carousel-btn.prev");
      const nextBtn = carousel.querySelector(".carousel-btn.next");

      if (!track || !slides.length || !prevBtn || !nextBtn) {
        return;
      }

      
      const newPrevBtn = prevBtn.cloneNode(true);
      const newNextBtn = nextBtn.cloneNode(true);
      prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
      nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

      let currentIndex = 0;
      const totalSlides = slides.length;

      const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      newNextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      });

      newPrevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
      });
    });
  }

  
  function initializeDropdowns(container) {
    const dropdowns = container.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const btn = dropdown.querySelector("button");
      if (!btn) return;

      
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      newBtn.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        newBtn.setAttribute(
          "aria-expanded",
          String(dropdown.classList.contains("active"))
        );
      });
    });
  }
});
