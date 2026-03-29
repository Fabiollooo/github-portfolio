document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    { src: "img/portraits/me.png", location: "Limerick, Ireland", year: "2026" },
    { src: "img/portraits/self_portrait.png", location: "Limerick, Ireland", year: "2026" },
    { src: "img/wd_projects/project1/wd_project1_img1.png", location: "Web Dev Studio", year: "2025" },
    { src: "img/wd_projects/project1/wd_project1_img2.png", location: "Web Dev Studio", year: "2025" },
    { src: "img/wd_projects/project1/wd_project1_img3.png", location: "Web Dev Studio", year: "2025" },
    { src: "img/wd_projects/project1/wd_project1_img4.png", location: "Web Dev Studio", year: "2025" },
    { src: "img/cd_projects/project1/cd_project_img1.png", location: "Coding Project Lab", year: "2025" },
    { src: "img/cd_projects/project1/cd_project_img2.png", location: "Coding Project Lab", year: "2025" },
    { src: "img/cd_projects/project1/cd_project_img3.png", location: "Coding Project Lab", year: "2025" },
    { src: "img/cd_projects/project1/cd_project_img4.png", location: "Coding Project Lab", year: "2025" },
    { src: "img/cd_projects/project1/cd_project_img5.png", location: "Coding Project Lab", year: "2025" },
    { src: "img/cd_projects/project2/cd_project2_img1.png", location: "Claddaghwatch Project", year: "2025" },
    { src: "img/cd_projects/project2/cd_project2_img2.png", location: "Claddaghwatch Project", year: "2025" },
    { src: "img/cd_projects/project2/cd_project2_img3.png", location: "Claddaghwatch Project", year: "2025" },
    { src: "img/cd_projects/project2/cd_project2_img4.png", location: "Claddaghwatch Project", year: "2025" },
    { src: "img/cd_projects/project2/cd_project2_img5.png", location: "Claddaghwatch Project", year: "2025" },
    { src: "img/cd_projects/project2/cd_project2_img6.png", location: "Claddaghwatch Project", year: "2025" }
  ];

  const feed = document.getElementById("galleryFeed");
  const sentinel = document.getElementById("gallerySentinel");

  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("galleryLightboxImg");
  const lightboxCaption = document.getElementById("galleryLightboxCaption");
  const lightboxLocation = document.getElementById("galleryLightboxLocation");
  const lightboxYear = document.getElementById("galleryLightboxYear");
  const lightboxClose = document.getElementById("galleryLightboxClose");

  if (!feed || !sentinel) {
    return;
  }

  const BATCH_SIZE = 8;
  let cursor = 0;
  let observer;

  const toCaption = (src) => {
    const file = src.split("/").pop() || "photo";
    return file
      .replace(/\.[^/.]+$/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const createCard = (imageData) => {
    const { src, location, year } = imageData;
    const card = document.createElement("article");
    card.className = "gallery-card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = toCaption(src);
    img.loading = "lazy";
    img.decoding = "async";

    const caption = document.createElement("p");
    caption.className = "gallery-card-caption";
    caption.textContent = toCaption(src);

    card.appendChild(img);
    card.appendChild(caption);

    card.addEventListener("click", () => {
      if (!lightbox || !lightboxImg || !lightboxCaption || !lightboxLocation || !lightboxYear) {
        return;
      }
      lightboxImg.src = src;
      lightboxImg.alt = toCaption(src);
      lightboxCaption.textContent = toCaption(src);
      lightboxLocation.textContent = location || "Unknown";
      lightboxYear.textContent = year || "Unknown";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });

    return card;
  };

  const appendBatch = () => {
    if (!galleryImages.length) {
      if (!feed.querySelector(".gallery-empty")) {
        const empty = document.createElement("p");
        empty.className = "gallery-empty";
        empty.textContent = "No images yet. Add your photos in the galleryFeed image array.";
        feed.appendChild(empty);
      }
      sentinel.hidden = true;
      if (observer) {
        observer.disconnect();
      }
      return;
    }

    if (cursor >= galleryImages.length) {
      sentinel.hidden = true;
      if (observer) {
        observer.disconnect();
      }
      return;
    }

    const frag = document.createDocumentFragment();
    const end = Math.min(cursor + BATCH_SIZE, galleryImages.length);

    for (let i = cursor; i < end; i += 1) {
      frag.appendChild(createCard(galleryImages[i]));
    }

    cursor = end;
    feed.appendChild(frag);
    if (cursor >= galleryImages.length) {
      sentinel.hidden = true;
      if (observer) {
        observer.disconnect();
      }
    }
  };

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          appendBatch();
        }
      });
    },
    { rootMargin: "320px 0px" }
  );

  observer.observe(sentinel);

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.hidden = true;
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) {
        lightbox.hidden = true;
        document.body.style.overflow = "";
      }
    });
  }

  appendBatch();
});
