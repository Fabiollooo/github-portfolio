document.addEventListener("DOMContentLoaded", () => {
  const revealSections = Array.from(document.querySelectorAll(".reveal-section"));

  if (revealSections.length) {
    if ("IntersectionObserver" in window) {
      const revealImmediatelyIfVisible = () => {
        revealSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight - 20) {
            section.classList.add("visible");
          }
        });
      };

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );

      revealSections.forEach((section) => revealObserver.observe(section));
      revealImmediatelyIfVisible();
    } else {
      revealSections.forEach((section) => section.classList.add("visible"));
    }
  }

  document.querySelectorAll(".dropdown button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
      btn.setAttribute("aria-expanded", String(btn.parentElement.classList.contains("active")));
    });
  });

  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-image");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");

    if (!track || !slides.length || !prevBtn || !nextBtn) {
      return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  });
});
