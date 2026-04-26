document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    { src: "img/gallery/2026/01-01-26.jpg", name: "New Year Day - Flight to Antalya", location: "Alanya, Turkey", year: "2026", description: "New Years day flight !" + "<br>" + "New Year new me" },
    { src: "img/gallery/2026/02-01-26.jpg", name: "Antalya Waterfront Fortress", location: "Alanya, Turkey", year: "2026", description: "-" },//02/01/26
    /* { src: "img/gallery/2026/2026-3.jpg", name: "Alanya Moment 3", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/06-01-26.jpg", name: "Gozukucuklu Peak - Mountain & Sea", location: "Alanya, Turkey", year: "2026", description: "-" },//06/01/26
    /* { src: "img/gallery/2026/2026-5.jpg", name: "Alanya Moment 5", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    /* { src: "img/gallery/2026/2026-6.jpg", name: "Alanya Moment 6", location: "Alanya, Turkey", year: "2026", description: "-" },*/ 
    { src: "img/gallery/2026/06-01-26 (2).jpg", name: "Mahmultlar Strip & Coast", location: "Alanya, Turkey", year: "2026", description: "-" },
    /* { src: "img/gallery/2026/2026-8.jpg", name: "Alanya Moment 8", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/06-01-26(1).jpg", name: "Mahmultar - Beachside rd", location: "Alanya, Turkey", year: "2026", description: "-" },//06/01/26
    /* { src: "img/gallery/2026/2026-10.jpg", name: "Alanya Moment 10", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/08-01-26.jpg", name: "Antalya Departure - Sunrise flight", location: "Alanya, Turkey", year: "2026", description: "-" }, //08/01/26
    /* { src: "img/gallery/2026/2026-12.jpg", name: "Alanya Moment 12", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/08-01-26(1).jpg", name: " Taurus Mountain(s) - Antalya", location: "Alanya, Turkey", year: "2026", description: "-" },//08/01/26

   
    /* 2025 */
    /*{ src: "img/gallery/2025/20250913_193542000_iOS 1.jpg", name: "13/09/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250913_193542000_iOS.jpg", name: "Gwiazda Block - Szczecin", location: "Szczecin, Poland", year: "2025", description: "Areal photo of the Mercedes block," + "<br>" + " I live in the northern block in the image." },
    /* { src: "img/gallery/2025/20250904_225823329_iOS.jpg", name: "04/09/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250822_164452492_iOS.jpg", name: "Bogusława Street - Szczecin", location: "Szczecin, Poland", year: "2025", description: "Bogusława Rd." + "<br>" + " Popular pedestrian street in Szczecin." },
    /* { src: "img/gallery/2025/20250815_174511895_iOS.jpg", name: "15/08/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250815_174506610_iOS.jpg", name: "15/08/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250629_195641190_iOS.jpg", name: "Szczecin Urban Scene", location: "Szczecin, Poland", year: "2025", description: "-" },
    { src: "img/gallery/2025/20250623_025957806_iOS.jpg", name: "Purple Lightning - Szczecin", location: "Szczecin, Poland", year: "2025", description: "The second most rare colour of lightning to ever exist." },
    { src: "img/gallery/2025/20250604_185458159_iOS.jpg", name: "Industrial Sunset", location: "Szczecin, Poland", year: "2025", description: "-" },
    /* { src: "img/gallery/2025/20250603_184647903_iOS.jpg", name: "03/06/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250519_193152124_iOS.jpg", name: "19/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250519_192959666_iOS.jpg", name: "Wały Chrobrego Palace", location: "Szczecin, Poland", year: "2025", description: "Wały Chrobrego," + "<br>" + " A grand Neo-Baroque government building built between 1902-1921." },
    { src: "img/gallery/2025/20250519_192754762_iOS.jpg", name: "National Museum - Szczecin", location: "Szczecin, Poland", year: "2025", description: "National Museum," + "<br>" + " Beside the Wały Chrobrego government building." },
    { src: "img/gallery/2025/20250519_191904193_iOS.jpg", name: "St. James Cathedral - Szczecin", location: "Szczecin, Poland", year: "2025", description: "St.James cathedral, " + "<br>" + " built in 1187 (110m)." },
    { src: "img/gallery/2025/20250519_182101256_iOS.jpg", name: "PŻM Tower - Shipping Headquarters", location: "Szczecin, Poland", year: "2025", description: "PŻM Tower," + "<br>" + " One of Europe's largest bulk cargo shippings operators (128m)." },
    { src: "img/gallery/2025/20250509_201531053_iOS.jpg", name: "St. James Cathedral - Detail View", location: "Szczecin, Poland", year: "2025", description: "St.James cathedral, " + "<br>" + " closer POV (110m)." },
    /* { src: "img/gallery/2025/20250509_195934908_iOS.jpg", name: "09/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250509_195929567_iOS.jpg", name: "09/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250509_195837243_iOS.jpg", name: "09/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250509_195753837_iOS.jpg", name: "Philharmonic Hall - Szczecin", location: "Szczecin, Poland", year: "2025", description: "Philharmonic Hall, " + "<br>" + " A historic concert venue in Szczecin." }
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
      const compactMatch = text.match(/\b(\d{4})(\d{2})(\d{2})\b/);
      if (!compactMatch) {
        return null;
      }

      const compactYear = Number(compactMatch[1]);
      const compactMonth = Number(compactMatch[2]);
      const compactDay = Number(compactMatch[3]);
      const compactParsed = new Date(compactYear, compactMonth - 1, compactDay);
      const compactValid =
        compactParsed.getFullYear() === compactYear &&
        compactParsed.getMonth() === compactMonth - 1 &&
        compactParsed.getDate() === compactDay;

      return compactValid ? compactParsed.getTime() : null;
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

  const getImageYear = (imageData) => {
    if (imageData.year) {
      return String(imageData.year);
    }

    const fromPath = imageData.src.match(/img\/gallery\/(\d{4})\//);
    if (fromPath) {
      return fromPath[1];
    }

    const parsedDate = getImageDateValue(imageData);
    if (parsedDate !== null) {
      return String(new Date(parsedDate).getFullYear());
    }

    return t("Unknown");
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

  const createYearDivider = (yearLabel) => {
    const divider = document.createElement("div");
    divider.className = "gallery-year-divider";
    divider.setAttribute("aria-label", `Gallery year ${yearLabel}`);

    const yearText = document.createElement("span");
    yearText.textContent = yearLabel;

    divider.appendChild(yearText);
    return divider;
  };

  let lastRenderedYear = null;

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
      const imageData = sortedGalleryImages[i];
      const currentYear = getImageYear(imageData);

      if (currentYear !== lastRenderedYear) {
        frag.appendChild(createYearDivider(currentYear));
        lastRenderedYear = currentYear;
      }

      frag.appendChild(createCard(imageData));
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
