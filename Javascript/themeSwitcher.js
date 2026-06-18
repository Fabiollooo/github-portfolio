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
      "--color-bg-main": "#1a0033",
      "--color-bg-gradient-start": "#0f001f",
      "--color-bg-gradient-end": "#1a0033",
      "--color-surface-1": "rgba(255, 0, 128, 0.14)",
      "--color-surface-2": "rgba(0, 217, 255, 0.08)",
      "--color-border-soft": "rgba(0, 217, 255, 0.35)",
      "--color-border-strong": "rgba(0, 217, 255, 0.75)",
      "--color-gold": "#ff0080",
      "--color-gold-light": "#00d9ff",
      "--color-gold-dark": "#cc0066",
      "--color-text-main": "#e6f0ff",
      "--color-text-muted": "#a8d9ff",
      "--color-text-title": "#00d9ff",
      "--color-accent-contrast": "#5c1f45",
      "--color-nav-bg": "rgba(26, 0, 51, 0.88)",
      "--color-footer-bg": "rgba(20, 0, 40, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(0, 217, 255, 0.25), 0 0 24px rgba(0, 217, 255, 0.35), inset 0 0 20px rgba(255, 0, 128, 0.1)"
    },
    {
      "--color-bg-main": "#111827",
      "--color-bg-gradient-start": "#0a0f18",
      "--color-bg-gradient-end": "#111827",
      "--color-surface-1": "rgba(255, 107, 91, 0.14)",
      "--color-surface-2": "rgba(255, 107, 91, 0.05)",
      "--color-border-soft": "rgba(255, 107, 91, 0.3)",
      "--color-border-strong": "rgba(255, 107, 91, 0.7)",
      "--color-gold": "#FF6B5B",
      "--color-gold-light": "#ff9585",
      "--color-gold-dark": "#c22f1f",
      "--color-text-main": "#fce8e3",
      "--color-text-muted": "#dbc4b8",
      "--color-text-title": "#fff5f0",
      "--color-accent-contrast": "#2a1f25",
      "--color-nav-bg": "rgba(17, 24, 39, 0.88)",
      "--color-footer-bg": "rgba(13, 18, 30, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(255, 107, 91, 0.16), 0 0 24px rgba(255, 107, 91, 0.28)"
    },
    {
      "--color-bg-main": "#200A5E",
      "--color-bg-gradient-start": "#1a0848",
      "--color-bg-gradient-end": "#200A5E",
      "--color-surface-1": "rgba(255, 229, 102, 0.14)",
      "--color-surface-2": "rgba(255, 229, 102, 0.05)",
      "--color-border-soft": "rgba(255, 229, 102, 0.3)",
      "--color-border-strong": "rgba(255, 229, 102, 0.7)",
      "--color-gold": "#FFE566",
      "--color-gold-light": "#fff2a3",
      "--color-gold-dark": "#b39d00",
      "--color-text-main": "#f9f5d9",
      "--color-text-muted": "#e0daa8",
      "--color-text-title": "#fffde8",
      "--color-accent-contrast": "#37132f",
      "--color-nav-bg": "rgba(32, 10, 94, 0.88)",
      "--color-footer-bg": "rgba(26, 8, 74, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(255, 229, 102, 0.16), 0 0 24px rgba(255, 229, 102, 0.28)"
    },
    {
      "--color-bg-main": "#0F2D0F",
      "--color-bg-gradient-start": "#061c06",
      "--color-bg-gradient-end": "#0F2D0F",
      "--color-surface-1": "rgba(155, 255, 0, 0.14)",
      "--color-surface-2": "rgba(155, 255, 0, 0.05)",
      "--color-border-soft": "rgba(155, 255, 0, 0.3)",
      "--color-border-strong": "rgba(155, 255, 0, 0.7)",
      "--color-gold": "#9BFF00",
      "--color-gold-light": "#b8ff4d",
      "--color-gold-dark": "#6ba300",
      "--color-text-main": "#e8f5d0",
      "--color-text-muted": "#c4daa8",
      "--color-text-title": "#f5fde8",
      "--color-accent-contrast": "#1a3d1a",
      "--color-nav-bg": "rgba(15, 45, 15, 0.88)",
      "--color-footer-bg": "rgba(12, 35, 12, 0.92)",
      "--shadow-glow": "0 0 0 1px rgba(155, 255, 0, 0.16), 0 0 24px rgba(155, 255, 0, 0.28)"
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
