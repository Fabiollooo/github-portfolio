document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    { src: "img/gallery/2026/01-01-26.jpg", name: "New Year Day - 01/01/26", location: "Alanya, Turkey", year: "2026", description: "New Years day flight !" + "<br>" + "New Year new me" },
    { src: "img/gallery/2026/02-01-26.jpg", name: "02/01/26", location: "Alanya, Turkey", year: "2026", description: "-" },
    /* { src: "img/gallery/2026/2026-3.jpg", name: "Alanya Moment 3", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/06-01-26.jpg", name: "06/01/26", location: "Alanya, Turkey", year: "2026", description: "-" },
    /* { src: "img/gallery/2026/2026-5.jpg", name: "Alanya Moment 5", location: "Alanya, Turkey", year: "2026", description: "-" }, */
/*     { src: "img/gallery/2026/2026-6.jpg", name: "Alanya Moment 6", location: "Alanya, Turkey", year: "2026", description: "-" },
 */    { src: "img/gallery/2026/06-01-26 (2).jpg", name: "06/01/26", location: "Alanya, Turkey", year: "2026", description: "-" },
    /* { src: "img/gallery/2026/2026-8.jpg", name: "Alanya Moment 8", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/06-01-26(1).jpg", name: "06/01/26", location: "Alanya, Turkey", year: "2026", description: "-" },
    /* { src: "img/gallery/2026/2026-10.jpg", name: "Alanya Moment 10", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/08-01-26.jpg", name: "08/01/26", location: "Alanya, Turkey", year: "2026", description: "-" },
    /* { src: "img/gallery/2026/2026-12.jpg", name: "Alanya Moment 12", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/08-01-26(1).jpg", name: "08/01/26", location: "Alanya, Turkey", year: "2026", description: "-" }
  ];

  const feed = document.getElementById("galleryFeed");
  const sentinel = document.getElementById("gallerySentinel");

  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("galleryLightboxImg");
  const lightboxCaption = document.getElementById("galleryLightboxCaption");
  const lightboxLocation = document.getElementById("galleryLightboxLocation");
  const lightboxYear = document.getElementById("galleryLightboxYear");
  const lightboxDescription = document.getElementById("galleryLightboxDescription");
  const lightboxClose = document.getElementById("galleryLightboxClose");

  if (!feed || !sentinel) {
    return;
  }

  const BATCH_SIZE = 8;
  let cursor = 0;
  let observer;

  const t = (sourceText) => {
    if (typeof window.__portfolioTranslate === "function") {
      return window.__portfolioTranslate(sourceText);
    }
    return sourceText;
  };

  const parseDateFromText = (text) => {
    if (!text) {
      return null;
    }

    const match = text.match(/(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2}|\d{4})/);
    if (!match) {
      return null;
    }

    const day = Number(match[1]);
    const month = Number(match[2]);
    let year = Number(match[3]);

    if (match[3].length === 2) {
      year += year >= 70 ? 1900 : 2000;
    }

    const parsed = new Date(year, month - 1, day);
    const isValid =
      parsed.getFullYear() === year &&
      parsed.getMonth() === month - 1 &&
      parsed.getDate() === day;

    return isValid ? parsed.getTime() : null;
  };

  const getImageDateValue = (imageData) => {
    const fromName = parseDateFromText(imageData.name);
    if (fromName !== null) {
      return fromName;
    }
    return parseDateFromText(imageData.src);
  };

  const sortedGalleryImages = [...galleryImages].sort((a, b) => {
    const dateA = getImageDateValue(a);
    const dateB = getImageDateValue(b);

    if (dateA === null && dateB === null) {
      return 0;
    }
    if (dateA === null) {
      return 1;
    }
    if (dateB === null) {
      return -1;
    }
    return dateB - dateA;
  });

  const toCaption = (src) => {
    const file = src.split("/").pop() || "photo";
    return file
      .replace(/\.[^/.]+$/, "")
      /* .replace(/[_-]+/g, " ") */
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const createCard = (imageData) => {
    const { src, name, location, year, description = "-" } = imageData;
    const displayName = name || toCaption(src);
    const card = document.createElement("article");
    card.className = "gallery-card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = displayName;
    img.loading = "lazy";
    img.decoding = "async";

    const caption = document.createElement("p");
    caption.className = "gallery-card-caption";
    caption.textContent = displayName;

    card.appendChild(img);
    card.appendChild(caption);

    card.addEventListener("click", () => {
      if (!lightbox || !lightboxImg || !lightboxCaption || !lightboxLocation || !lightboxYear || !lightboxDescription) {
        return;
      }
      lightboxImg.src = src;
      lightboxImg.alt = displayName;
      lightboxCaption.textContent = displayName;
      lightboxLocation.textContent = location || t("Unknown");
      lightboxYear.textContent = year || t("Unknown");
      lightboxDescription.innerHTML = description || "-";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });

    return card;
  };

  const appendBatch = () => {
    if (!sortedGalleryImages.length) {
      if (!feed.querySelector(".gallery-empty")) {
        const empty = document.createElement("p");
        empty.className = "gallery-empty";
        empty.textContent = t("No images yet. Add your photos in the galleryFeed image array.");
        feed.appendChild(empty);
      }
      sentinel.hidden = true;
      if (observer) {
        observer.disconnect();
      }
      return;
    }

    if (cursor >= sortedGalleryImages.length) {
      sentinel.hidden = true;
      if (observer) {
        observer.disconnect();
      }
      return;
    }

    const frag = document.createDocumentFragment();
    const end = Math.min(cursor + BATCH_SIZE, sortedGalleryImages.length);

    for (let i = cursor; i < end; i += 1) {
      frag.appendChild(createCard(sortedGalleryImages[i]));
    }

    cursor = end;
    feed.appendChild(frag);
    if (cursor >= sortedGalleryImages.length) {
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
    const closeLightbox = () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
    };

    lightboxClose.addEventListener("click", closeLightbox);

    if (lightboxImg) {
      lightboxImg.classList.add("lightbox-image-interactive");
      lightboxImg.addEventListener("click", async () => {
        if (document.fullscreenElement === lightboxImg) {
          await document.exitFullscreen();
          return;
        }

        if (!document.fullscreenElement && lightboxImg.requestFullscreen) {
          try {
            await lightboxImg.requestFullscreen();
          } catch (error) {
            // Ignore fullscreen permission/capability errors.
          }
        }
      });
    }

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
  }

  appendBatch();
});
