document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "portfolio-palette-index";

  const palettes = [
    {
      "--color-bg-main": "#080808",
      "--color-bg-gradient-start": "#060606",
      "--color-bg-gradient-end": "#121212",
      "--color-surface-1": "rgba(255, 122, 0, 0.13)",
      "--color-surface-2": "rgba(255, 122, 0, 0.04)",
      "--color-border-soft": "rgba(255, 122, 0, 0.3)",
      "--color-border-strong": "rgba(255, 122, 0, 0.78)",
      "--color-gold": "#ff7a00",
      "--color-gold-light": "#ffab52",
      "--color-gold-dark": "#b25100",
      "--color-text-main": "#e4ddd4",
      "--color-text-muted": "#b9ac9f",
      "--color-text-title": "#fff4e8",
      "--color-accent-contrast": "#1f1204",
      "--color-nav-bg": "rgba(8, 8, 8, 0.9)",
      "--color-footer-bg": "rgba(5, 5, 5, 0.94)",
      "--shadow-glow": "0 0 0 1px rgba(255, 122, 0, 0.2), 0 0 24px rgba(255, 122, 0, 0.32)"
    },
    {
      "--color-bg-main": "#1e1e1e",
      "--color-bg-gradient-start": "#0d0d0d",
      "--color-bg-gradient-end": "#1a1a1a",
      "--color-surface-1": "rgba(255, 255, 255, 0.08)",
      "--color-surface-2": "rgba(255, 255, 255, 0.04)",
      "--color-border-soft": "rgba(255, 255, 255, 0.16)",
      "--color-border-strong": "rgba(255, 215, 0, 0.5)",
      "--color-gold": "#ffd700",
      "--color-gold-light": "#ffe066",
      "--color-gold-dark": "#b8860b",
      "--color-text-main": "#d9dde4",
      "--color-text-muted": "#a9b2be",
      "--color-text-title": "#f4f7fb",
      "--color-accent-contrast": "#151515",
      "--color-nav-bg": "rgba(12, 12, 14, 0.82)",
      "--color-footer-bg": "rgba(10, 10, 12, 0.86)",
      "--shadow-glow": "0 0 0 1px rgba(255, 215, 0, 0.12), 0 0 24px rgba(255, 215, 0, 0.2)"
    },
    {
      "--color-bg-main": "#1e0a16",
      "--color-bg-gradient-start": "#330e24",
      "--color-bg-gradient-end": "#1e0a16",
      "--color-surface-1": "rgba(255, 155, 184, 0.14)",
      "--color-surface-2": "rgba(255, 155, 184, 0.05)",
      "--color-border-soft": "rgba(255, 160, 185, 0.3)",
      "--color-border-strong": "rgba(255, 79, 129, 0.7)",
      "--color-gold": "#ff4f81",
      "--color-gold-light": "#ffa0b9",
      "--color-gold-dark": "#7a003f",
      "--color-text-main": "#fce8ef",
      "--color-text-muted": "#e3bcc9",
      "--color-text-title": "#fff4f8",
      "--color-accent-contrast": "#2c121c",
      "--color-nav-bg": "rgba(30, 10, 22, 0.88)",
      "--color-footer-bg": "rgba(26, 8, 19, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(255, 79, 129, 0.16), 0 0 24px rgba(255, 79, 129, 0.28)"
    },
    {
      "--color-bg-main": "#0c0a0f",
      "--color-bg-gradient-start": "#1a1a2e",
      "--color-bg-gradient-end": "#0c0a0f",
      "--color-surface-1": "rgba(158, 110, 255, 0.14)",
      "--color-surface-2": "rgba(158, 110, 255, 0.05)",
      "--color-border-soft": "rgba(200, 162, 255, 0.3)",
      "--color-border-strong": "rgba(158, 110, 255, 0.72)",
      "--color-gold": "#9e6eff",
      "--color-gold-light": "#c8a2ff",
      "--color-gold-dark": "#5e2b97",
      "--color-text-main": "#d8d8e7",
      "--color-text-muted": "#a8a8c2",
      "--color-text-title": "#f2ecff",
      "--color-accent-contrast": "#191227",
      "--color-nav-bg": "rgba(12, 10, 15, 0.9)",
      "--color-footer-bg": "rgba(8, 7, 11, 0.94)",
      "--shadow-glow": "0 0 0 1px rgba(158, 110, 255, 0.17), 0 0 24px rgba(158, 110, 255, 0.3)"
    },
    {
      "--color-bg-main": "#2c5364",
      "--color-bg-gradient-start": "#0f2027",
      "--color-bg-gradient-end": "#2c5364",
      "--color-surface-1": "rgba(227, 251, 255, 0.16)",
      "--color-surface-2": "rgba(227, 251, 255, 0.06)",
      "--color-border-soft": "rgba(180, 238, 248, 0.4)",
      "--color-border-strong": "rgba(0, 195, 255, 0.7)",
      "--color-gold": "#00c3ff",
      "--color-gold-light": "#74ebd5",
      "--color-gold-dark": "#005a87",
      "--color-text-main": "#d5f6ff",
      "--color-text-muted": "#afdae5",
      "--color-text-title": "#f0fcff",
      "--color-accent-contrast": "#062231",
      "--color-nav-bg": "rgba(15, 32, 39, 0.84)",
      "--color-footer-bg": "rgba(15, 32, 39, 0.9)",
      "--shadow-glow": "0 0 0 1px rgba(0, 195, 255, 0.16), 0 0 24px rgba(0, 195, 255, 0.28)"
    },
    {
      "--color-bg-main": "#0f2e2c",
      "--color-bg-gradient-start": "#193c3a",
      "--color-bg-gradient-end": "#0f2e2c",
      "--color-surface-1": "rgba(141, 251, 197, 0.14)",
      "--color-surface-2": "rgba(141, 251, 197, 0.05)",
      "--color-border-soft": "rgba(141, 251, 197, 0.28)",
      "--color-border-strong": "rgba(109, 242, 154, 0.7)",
      "--color-gold": "#6df29a",
      "--color-gold-light": "#a0ffd6",
      "--color-gold-dark": "#1b604b",
      "--color-text-main": "#d1ffec",
      "--color-text-muted": "#9fe0ca",
      "--color-text-title": "#effff8",
      "--color-accent-contrast": "#10261f",
      "--color-nav-bg": "rgba(15, 46, 44, 0.86)",
      "--color-footer-bg": "rgba(11, 34, 32, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(109, 242, 154, 0.16), 0 0 24px rgba(109, 242, 154, 0.24)"
    },
    {
      "--color-bg-main": "#0d1117",
      "--color-bg-gradient-start": "#0d1117",
      "--color-bg-gradient-end": "#1c1f26",
      "--color-surface-1": "rgba(114, 171, 255, 0.14)",
      "--color-surface-2": "rgba(114, 171, 255, 0.05)",
      "--color-border-soft": "rgba(168, 207, 255, 0.28)",
      "--color-border-strong": "rgba(76, 154, 255, 0.72)",
      "--color-gold": "#4c9aff",
      "--color-gold-light": "#a8cfff",
      "--color-gold-dark": "#1a3c6e",
      "--color-text-main": "#d6dde4",
      "--color-text-muted": "#aeb8c5",
      "--color-text-title": "#f4f7fa",
      "--color-accent-contrast": "#0f1f36",
      "--color-nav-bg": "rgba(13, 17, 23, 0.88)",
      "--color-footer-bg": "rgba(10, 13, 19, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(76, 154, 255, 0.18), 0 0 24px rgba(76, 154, 255, 0.28)"
    }
  ];

  const paletteBtn = document.getElementById("paletteBtn");
  const paletteSlider = document.getElementById("paletteSlider");
  const paletteSteps = paletteSlider ? Array.from(paletteSlider.querySelectorAll("li")) : [];

  if (!paletteBtn || !paletteSlider || !paletteSteps.length) {
    return;
  }

  const updateThemeMetaColor = () => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--color-bg-main").trim();
    if (bgColor) {
      meta.setAttribute("content", bgColor);
    }
  };

  const setPalette = (index) => {
    const safeIndex = Number.isInteger(index) && index >= 0 && index < palettes.length ? index : 0;
    const palette = palettes[safeIndex];

    Object.entries(palette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    if (typeof window.updateParticleColor === "function") {
      window.updateParticleColor(palette["--color-gold-light"] || palette["--color-gold"]);
    }

    paletteSteps.forEach((step, stepIndex) => {
      const selected = stepIndex === safeIndex;
      step.classList.toggle("selected", selected);
      step.setAttribute("aria-selected", String(selected));
    });

    updateThemeMetaColor();
    localStorage.setItem(STORAGE_KEY, String(safeIndex));
  };

  const togglePalette = () => {
    const opened = paletteSlider.classList.toggle("active");
    paletteBtn.setAttribute("aria-expanded", String(opened));
  };

  paletteBtn.addEventListener("click", togglePalette);

  paletteSteps.forEach((step) => {
    const idx = Number(step.dataset.step);

    step.addEventListener("click", () => {
      setPalette(idx);
      paletteSlider.classList.remove("active");
      paletteBtn.setAttribute("aria-expanded", "false");
    });

    step.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setPalette(idx);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!paletteSlider.classList.contains("active")) {
      return;
    }

    if (!event.target.closest("#paletteSwitcher")) {
      paletteSlider.classList.remove("active");
      paletteBtn.setAttribute("aria-expanded", "false");
    }
  });

  const savedIndex = Number.parseInt(localStorage.getItem(STORAGE_KEY), 10);
  setPalette(savedIndex);
});
