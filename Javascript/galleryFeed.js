document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = [
    { src: "img/gallery/2026/20260101_151615227_iOS.jpg", name: "New Year Day - Flight to Antalya", location: "Alanya, Turkey", year: "2026", description: "New Years day flight !" + "<br>" + "New Year new me", type: "vertical" },
    { src: "img/gallery/2026/20260102_104254141_iOS.jpg", name: "Antalya Waterfront Fortress", location: "Alanya, Turkey", year: "2026", description: "-", type: "horizontal" },//02/01/26
    /* { src: "img/gallery/2026/2026-3.jpg", name: "Alanya Moment 3", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/20260106_124708085_iOS.jpg", name: "Gozukucuklu Peak - Mountain & Sea", location: "Alanya, Turkey", year: "2026", description: "-", type: "horizontal" },//06/01/26
    /* { src: "img/gallery/2026/2026-5.jpg", name: "Alanya Moment 5", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    /* { src: "img/gallery/2026/2026-6.jpg", name: "Alanya Moment 6", location: "Alanya, Turkey", year: "2026", description: "-" },*/ 
    { src: "img/gallery/2026/20260106_131606556_iOS.jpg", name: "Mahmultlar Strip & Coast", location: "Alanya, Turkey", year: "2026", description: "-", type: "vertical" },
    /* { src: "img/gallery/2026/2026-8.jpg", name: "Alanya Moment 8", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/20260106_132906902_iOS.jpg", name: "Mahmultar - Beachside rd", location: "Alanya, Turkey", year: "2026", description: "-", type: "vertical" },//06/01/26
    /* { src: "img/gallery/2026/2026-10.jpg", name: "Alanya Moment 10", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/20260108_052923268_iOS.jpg", name: "Antalya Departure - Sunrise flight", location: "Alanya, Turkey", year: "2026", description: "-", type: "vertical" }, //08/01/26
    /* { src: "img/gallery/2026/2026-12.jpg", name: "Alanya Moment 12", location: "Alanya, Turkey", year: "2026", description: "-" }, */
    { src: "img/gallery/2026/20260108_053345557_iOS.jpg", name: " Taurus Mountain(s) - Antalya", location: "Alanya, Turkey", year: "2026", description: "-", type: "horizontal" },//08/01/26

   
    /* 2025 */
    /*{ src: "img/gallery/2025/20250913_193542000_iOS 1.jpg", name: "13/09/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250913_193542000_iOS.jpg", name: "Gwiazda Block - Szczecin", location: "Szczecin, Poland", year: "2025", description: "Areal photo of the Mercedes block," + "<br>" + " I live in the northern block in the image.", type: "horizontal" },
    /* { src: "img/gallery/2025/20250904_225823329_iOS.jpg", name: "04/09/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250822_164452492_iOS.jpg", name: "Bogusława Street - Szczecin", location: "Szczecin, Poland", year: "2025", description: "Bogusława Rd." + "<br>" + " Popular pedestrian street in Szczecin.", type: "vertical" },
    /* { src: "img/gallery/2025/20250815_174511895_iOS.jpg", name: "15/08/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250815_174506610_iOS.jpg", name: "15/08/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250629_195641190_iOS.jpg", name: "Szczecin Urban Scene", location: "Szczecin, Poland", year: "2025", description: "-", type: "vertical" },
    { src: "img/gallery/2025/20250623_025957806_iOS.jpg", name: "Purple Lightning - Szczecin", location: "Szczecin, Poland", year: "2025", description: "The second most rare colour of lightning to ever exist.", type: "horizontal" },
    { src: "img/gallery/2025/20250604_185458159_iOS.jpg", name: "Industrial Sunset", location: "Szczecin, Poland", year: "2025", description: "-", type: "vertical" },
    /* { src: "img/gallery/2025/20250603_184647903_iOS.jpg", name: "03/06/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250519_193152124_iOS.jpg", name: "19/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250519_192959666_iOS.jpg", name: "Wały Chrobrego Palace", location: "Szczecin, Poland", year: "2025", description: "Wały Chrobrego," + "<br>" + " A grand Neo-Baroque government building built between 1902-1921.", type: "vertical" },
    { src: "img/gallery/2025/20250519_192754762_iOS.jpg", name: "National Museum - Szczecin", location: "Szczecin, Poland", year: "2025", description: "National Museum," + "<br>" + " Beside the Wały Chrobrego government building.", type: "horizontal" },
    { src: "img/gallery/2025/20250519_191904193_iOS.jpg", name: "St. James Cathedral - Szczecin", location: "Szczecin, Poland", year: "2025", description: "St.James cathedral, " + "<br>" + " built in 1187 (110m).", type: "vertical" },
    { src: "img/gallery/2025/20250519_182101256_iOS.jpg", name: "PŻM Tower - Shipping Headquarters", location: "Szczecin, Poland", year: "2025", description: "PŻM Tower," + "<br>" + " One of Europe's largest bulk cargo shippings operators (128m).", type: "vertical" },
    { src: "img/gallery/2025/20250509_201531053_iOS.jpg", name: "St. James Cathedral - Detail View", location: "Szczecin, Poland", year: "2025", description: "St.James cathedral, " + "<br>" + " closer POV (110m).", type: "vertical" },
    /* { src: "img/gallery/2025/20250509_195934908_iOS.jpg", name: "09/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250509_195929567_iOS.jpg", name: "09/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    /* { src: "img/gallery/2025/20250509_195837243_iOS.jpg", name: "09/05/25", location: "Szczecin, Poland", year: "2025", description: "-" }, */
    { src: "img/gallery/2025/20250509_195753837_iOS.jpg", name: "Philharmonic Hall - Szczecin", location: "Szczecin, Poland", year: "2025", description: "Philharmonic Hall, " + "<br>" + " A historic concert venue in Szczecin.", type: "horizontal" },


    /* 2024 */

    { src: "img/gallery/2024/20240415_192708425_iOS.jpg", name: "Spring Day 1", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20240416_083942639_iOS.jpg", name: "Spring Day 2", location: "Unknown", year: "2024", description: "-" }, */
    /* { src: "img/gallery/2024/20240416_085753514_iOS.jpg", name: "Spring Day 3", location: "Unknown", year: "2024", description: "-" }, */


    { src: "img/gallery/2024/20240416_104615195_iOS.jpg", name: "Spring Day 4", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240416_105221780_iOS.jpg", name: "Spring Day 5", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240416_125426720_iOS.jpg", name: "Spring Day 6", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240416_125530430_iOS.jpg", name: "Spring Day 7", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240416_134158245_iOS.jpg", name: "Spring Day 8", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240417_142207294_iOS.jpg", name: "April Moment 1", location: "Unknown", year: "2024", description: "-", type: "vertical" }, //April
    { src: "img/gallery/2024/20240418_095557046_iOS.jpg", name: "April Moment 2", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240419_133807523_iOS.jpg", name: "April Moment 3", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20240419_141711048_iOS.jpg", name: "April Moment 4", location: "Unknown", year: "2024", description: "-" }, */
    { src: "img/gallery/2024/20240523_201454886_iOS.jpg", name: "Summer Scene 1", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20240523_201519144_iOS.jpg", name: "Summer Scene 2", location: "Unknown", year: "2024", description: "-" }, */
    { src: "img/gallery/2024/20240525_185801237_iOS.jpg", name: "Summer Scene 3", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20240529_202743930_iOS.jpg", name: "Summer Scene 4", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20240529_202749917_iOS.jpg", name: "Summer Scene 5", location: "Unknown", year: "2024", description: "-" },*/    
    /* { src: "img/gallery/2024/20260619_155919530_iOS.jpg", name: "Summer Scene 6", location: "Unknown", year: "2024", description: "-" }, */
    { src: "img/gallery/2024/20240630_192430858_iOS.jpg", name: "Summer Scene 7", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20241218_170000202_iOS.jpg", name: "Winter Holiday 1", location: "Unknown", year: "2024", description: "-" }, */
    { src: "img/gallery/2024/20241227_172531732_iOS.jpg", name: "Winter Holiday 2", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20241227_173436167_iOS.jpg", name: "Winter Holiday 3", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20241227_173453661_iOS.jpg", name: "Winter Holiday 4", location: "Unknown", year: "2024", description: "-" }, */
    // { src: "img/gallery/2024/20241227_174126296_iOS.jpg", name: "Winter Holiday 5", location: "Unknown", year: "2024", description: "-" },
    { src: "img/gallery/2024/20241227_174133734_iOS.jpg", name: "Winter Holiday 6", location: "Unknown", year: "2024", description: "-", type: "horizontal" },
    { src: "img/gallery/2024/20241227_174225948_iOS.jpg", name: "Winter Holiday 7", location: "Unknown", year: "2024", description: "-", type: "horizontal" },
    { src: "img/gallery/2024/20241227_175052230_iOS.jpg", name: "Winter Holiday 8", location: "Unknown", year: "2024", description: "-", type: "vertical" }, //Dec
    { src: "img/gallery/2024/20241228_154645392_iOS.jpg", name: "Winter Holiday 9", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    /* { src: "img/gallery/2024/20250102_152152526_iOS.jpg", name: "New Year 2025 - 1", location: "Unknown", year: "2024", description: "-" }, */
    { src: "img/gallery/2024/20250105_202434874_iOS.jpg", name: "New Year 2025 - 2", location: "Unknown", year: "2024", description: "-", type: "vertical" }, //Dec
    { src: "img/gallery/2024/20250105_202440448_iOS.jpg", name: "New Year 2025 - 3", location: "Unknown", year: "2024", description: "-", type: "vertical" },
    { src: "img/gallery/2024/20250105_202928293_iOS.jpg", name: "New Year 2025 - 4", location: "Unknown", year: "2024", description: "-", type: "vertical" }
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
      const compactMatch = text.match(/(\d{4})(\d{2})(\d{2})/);
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
    const { src, name, location, year, description = "-", type = "vertical" } = imageData;
    const displayName = name || toCaption(src);
    const card = document.createElement("article");
    card.className = "gallery-card" + (type === "horizontal" ? " gallery-card--landscape" : "");

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
