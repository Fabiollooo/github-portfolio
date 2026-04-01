document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "portfolio-language";
  const DEFAULT_LANGUAGE = "en";
  const langToggle = document.getElementById("langToggle");
  const originalDocumentTitle = document.title;
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();

  const translations = {
    en: {
      pageTitle: "Fabian G | Portfolio",
      pageDescription: "Fabian Golebiowski - Software Development student portfolio showcasing coding, web, and group projects.",
      primaryNavigation: "Primary navigation",
      toggleNavigation: "Toggle navigation",
      switchLanguage: "Switch language",
      navHome: "Home",
      navAbout: "About",
      navPortfolio: "Portfolio",
      navContact: "Contact",
      navGallery: "Gallery",
      heroEyebrow: "Software Development Student",
      heroBuildAs: "I build as a",
      heroRole1: "Coder",
      heroRole2: "Programmer",
      heroRole3: "Developer",
      heroRole4: "Builder",
      heroCopy: "Dedicated and ambitious Software Development student at TUS Moylish, focused on shipping clean, practical solutions across C++, C#, SQL, and modern web technologies.",
      downloadCv: "Download CV",
      getInTouch: "Get In Touch",
      aboutTitle: "About Me",
      aboutP1: "I am Fabian Golebiowski, a third-year Software Development student at <a href=\"https://tus.ie/campuses/moylish\" target=\"_blank\" rel=\"noreferrer\">TUS Moylish Campus</a>. I enjoy turning ideas into useful digital products, especially in web development and applied software projects.",
      aboutP2: "Beyond coursework, I explore Unreal Engine game development, data-heavy workflows in Excel, and practical full-stack foundations.",
      readMore: "Read More",
      skillsTitle: "Technical Skills & Tools",
      skillsLanguages: "Languages",
      skillsTools: "Tools & Frameworks",
      skillsSummary: "I build with practical toolchains that support both software engineering and web development delivery from concept to deployment.",
      educationTitle: "Education",
      educationCollegeLabel: "College:",
      educationCollegeCourse: "BSc in Software Development 2023-2027",
      educationSecondaryLabel: "Secondary School:",
      leavingTitle: "Leaving Certificate Results",
      subjectPolish: "Polish:",
      subjectMaths: "Maths:",
      subjectHistory: "History:",
      subjectBiology: "Biology:",
      subjectGeography: "Geography:",
      subjectEnglish: "English:",
      subjectGerman: "German:",
      subjectIrish: "Irish:",
      totalPoints: "Total Points:",
      selectedWork: "Selected Work",
      portfolioTitle: "Portfolio",
      codingProjectsTitle: "Coding Projects",
      codingProjectsDesc: "Programming-focused builds using C++, C#, and problem-solving fundamentals.",
      webProjectsTitle: "Web Development",
      webProjectsDesc: "Responsive website projects built with HTML, CSS, JavaScript, and PHP patterns.",
      groupProjectsTitle: "Group Projects",
      groupProjectsDesc: "Collaborative projects emphasizing planning, communication, and team delivery.",
      viewProjects: "View Projects",
      contactTitle: "Get In Touch",
      contactHeading: "Let's work together",
      contactCopy: "I am always interested in new opportunities and impactful projects. If you want to collaborate or discuss a role, send a message and I will get back to you.",
      mapLocation: "Limerick, Ireland",
      labelName: "Name",
      labelEmail: "Email",
      labelSubject: "Subject",
      placeholderSubject: "Subject",
      labelMessage: "Message",
      placeholderMessage: "Your message",
      submit: "Submit",
      reset: "Reset",
      goToTop: "Go to top",
      scrollToTop: "Scroll to top",
      footerLocation: "Limerick, Ireland",
      footerCopy: "(c) 2026 Fabian Golebiowski. All rights reserved.",
      openColorThemes: "Open color themes",
      colorPalettes: "Color palettes",
      paletteDefault: "Default",
      paletteGold: "Gold",
      paletteRose: "Rose",
      paletteObsidian: "Obsidian",
      paletteOcean: "Ocean",
      paletteForest: "Forest",
      paletteNight: "Night"
    },
    pl: {
      pageTitle: "Fabian G | Portfolio",
      pageDescription: "Fabian Golebiowski - portfolio studenta Informatyki prezentujace projekty programistyczne, webowe i grupowe.",
      primaryNavigation: "Nawigacja glowna",
      toggleNavigation: "Przelacz nawigacje",
      switchLanguage: "Przelacz jezyk",
      navHome: "Start",
      navAbout: "O mnie",
      navPortfolio: "Portfolio",
      navContact: "Kontakt",
      navGallery: "Galeria",
      heroEyebrow: "Student Software Development",
      heroBuildAs: "Tworze jako",
      heroRole1: "Koder",
      heroRole2: "Programista",
      heroRole3: "Deweloper",
      heroRole4: "Tworca",
      heroCopy: "Zaangazowany i ambitny student Software Development w TUS Moylish, skupiony na tworzeniu czystych i praktycznych rozwiazan w C++, C#, SQL oraz nowoczesnych technologiach webowych.",
      downloadCv: "Pobierz CV",
      getInTouch: "Skontaktuj sie",
      aboutTitle: "O mnie",
      aboutP1: "Jestem Fabian Golebiowski, studentem trzeciego roku Software Development na <a href=\"https://tus.ie/campuses/moylish\" target=\"_blank\" rel=\"noreferrer\">TUS Moylish Campus</a>. Lubie zamieniac pomysly w uzyteczne produkty cyfrowe, szczegolnie w web developmencie i projektach praktycznych.",
      aboutP2: "Poza studiami rozwijam sie w Unreal Engine, analizie danych w Excelu oraz praktycznych podstawach full-stack.",
      readMore: "Czytaj wiecej",
      skillsTitle: "Umiejetnosci techniczne i narzedzia",
      skillsLanguages: "Jezyki",
      skillsTools: "Narzedzia i frameworki",
      skillsSummary: "Pracuje na praktycznych narzedziach, ktore wspieraja tworzenie oprogramowania i web development od pomyslu do wdrozenia.",
      educationTitle: "Edukacja",
      educationCollegeLabel: "Uczelnia:",
      educationCollegeCourse: "Inzynieria oprogramowania 2023-2027",
      educationSecondaryLabel: "Szkola srednia:",
      leavingTitle: "Wyniki Leaving Certificate",
      subjectPolish: "Polski:",
      subjectMaths: "Matematyka:",
      subjectHistory: "Historia:",
      subjectBiology: "Biologia:",
      subjectGeography: "Geografia:",
      subjectEnglish: "Angielski:",
      subjectGerman: "Niemiecki:",
      subjectIrish: "Irlandzki:",
      totalPoints: "Lacznie punktow:",
      selectedWork: "Wybrane projekty",
      portfolioTitle: "Portfolio",
      codingProjectsTitle: "Projekty programistyczne",
      codingProjectsDesc: "Projekty skoncentrowane na programowaniu w C++, C# i rozwiazywaniu problemow.",
      webProjectsTitle: "Web Development",
      webProjectsDesc: "Responsywne projekty stron tworzone z uzyciem HTML, CSS, JavaScript i PHP.",
      groupProjectsTitle: "Projekty grupowe",
      groupProjectsDesc: "Projekty zespolowe stawiajace na planowanie, komunikacje i wspolne dowozenie wynikow.",
      viewProjects: "Zobacz projekty",
      contactTitle: "Skontaktuj sie",
      contactHeading: "Wspolpracujmy",
      contactCopy: "Jestem zawsze otwarty na nowe mozliwosci i ciekawe projekty. Jesli chcesz wspolpracowac lub porozmawiac o roli, napisz do mnie.",
      mapLocation: "Limerick, Irlandia",
      labelName: "Imie",
      labelEmail: "Email",
      labelSubject: "Temat",
      placeholderSubject: "Temat",
      labelMessage: "Wiadomosc",
      placeholderMessage: "Twoja wiadomosc",
      submit: "Wyslij",
      reset: "Resetuj",
      goToTop: "Do gory",
      scrollToTop: "Przewin do gory",
      footerLocation: "Limerick, Irlandia",
      footerCopy: "(c) 2026 Fabian Golebiowski. Wszelkie prawa zastrzezone.",
      openColorThemes: "Otworz motywy kolorystyczne",
      colorPalettes: "Palety kolorow",
      paletteDefault: "Domyslna",
      paletteGold: "Zlota",
      paletteRose: "Rozana",
      paletteObsidian: "Obsydian",
      paletteOcean: "Ocean",
      paletteForest: "Las",
      paletteNight: "Noc"
    }
  };

  const phraseTranslations = {
    en: {
      "Fabian G | Gallery": "Fabian G | Gallery",
      "Coding Projects | Fabian G": "Coding Projects | Fabian G",
      "Web Development Projects | Fabian G": "Web Development Projects | Fabian G",
      "Group Projects | Fabian G": "Group Projects | Fabian G",
      "Continuous photo gallery by Fabian Golebiowski in a Pinterest-style masonry feed.": "Continuous photo gallery by Fabian Golebiowski in a Pinterest-style masonry feed.",
      "Coding projects by Fabian Golebiowski including WinForms and C++ system builds.": "Coding projects by Fabian Golebiowski including WinForms and C++ system builds.",
      "Web development projects by Fabian Golebiowski including CodeIgniter and PHP/MySQL builds.": "Web development projects by Fabian Golebiowski including CodeIgniter and PHP/MySQL builds.",
      "Group and collaboration projects by Fabian Golebiowski including leadership and delivery-focused work.": "Group and collaboration projects by Fabian Golebiowski including leadership and delivery-focused work.",
      "Personal Feed": "Personal Feed",
      "Photo Gallery": "Photo Gallery",
      "A continuous Pinterest-style stream for photos I take and want to keep visible in one place.": "A continuous Pinterest-style stream for photos I take and want to keep visible in one place.",
      "Most images taken from the iPhone 16 Pro.": "Most images taken from the iPhone 16 Pro.",
      "Scroll continuously. Click an image to view it larger.": "Scroll continuously. Click an image to view it larger.",
      "Image preview": "Image preview",
      "Close image preview": "Close image preview",
      "Expanded gallery image": "Expanded gallery image",
      "Location": "Location",
      "Year": "Year",
      "Description": "Description",
      "Unknown": "Unknown",
      "No images yet. Add your photos in the galleryFeed image array.": "No images yet. Add your photos in the galleryFeed image array.",
      "Portfolio Category": "Portfolio Category",
      "Project Index": "Project Index",
      "Overview": "Overview",
      "Technologies": "Technologies",
      "Features": "Features",
      "Screenshots": "Screenshots",
      "What I Learned": "What I Learned",
      "Technologies Used": "Technologies Used",
      "Project Glimpse": "Project Glimpse",
      "Role and Contribution": "Role and Contribution",
      "Team Collaboration": "Team Collaboration",
      "Status": "Status",
      "Key Features": "Key Features",
      "GitHub Repository": "GitHub Repository",
      "To Do App": "To Do App",
      "Patient Management": "Patient Management",
      "Patient Management System": "Patient Management System",
      "Web Development Projects": "Web Development Projects",
      "Expense Tracker": "Expense Tracker",
      "Group Projects": "Group Projects",
      "Previous screenshot": "Previous screenshot",
      "Next screenshot": "Next screenshot",
      "Limerick, Ireland": "Limerick, Ireland",
      "© 2026 Fabian Golebiowski. All rights reserved.": "© 2026 Fabian Golebiowski. All rights reserved.",
      "Switch language": "Switch language",
      "Open color themes": "Open color themes",
      "Color palettes": "Color palettes",
      "Default": "Default",
      "Gold": "Gold",
      "Rose": "Rose",
      "Obsidian": "Obsidian",
      "Ocean": "Ocean",
      "Forest": "Forest",
      "Night": "Night",
      "WinForms C#": "WinForms C#",
      "Auth + CRUD": "Auth + CRUD",
      "Heap Queue": "Heap Queue",
      "OOP": "OOP",
      "Log-In and Sign-Up page": "Log-In and Sign-Up page",
      "Main tasks dashboard": "Main tasks dashboard",
      "Creating tasks": "Creating tasks",
      "Editing tasks": "Editing tasks",
      "Viewing newly added tasks": "Viewing newly added tasks",
      "Program menu": "Program menu",
      "Adding patients": "Adding patients",
      "Calling each patient": "Calling each patient",
      "Printing current queue": "Printing current queue",
      "Searching for patient": "Searching for patient",
      "Displaying all patients": "Displaying all patients",
      "FurEverPets": "FurEverPets",
      "A focused look at problem-solving projects built with C#, WinForms, and C++ system logic.": "A focused look at problem-solving projects built with C#, WinForms, and C++ system logic.",
      "In Progress": "In Progress",
      "Team Project": "Team Project",
      "Team of 3": "Team of 3",
      "Leadership": "Leadership",
      "Entry screen to budget system": "Entry screen to budget system",
      "Adding a new expense": "Adding a new expense",
      "Viewing all expenses": "Viewing all expenses",
      "Managing an expense": "Managing an expense",
      "Campus Sync preview placeholder": "Campus Sync preview placeholder",
      "FurEverPets project placeholder screenshot": "FurEverPets project placeholder screenshot"
    },
    pl: {
      "Fabian G | Gallery": "Fabian G | Galeria",
      "Coding Projects | Fabian G": "Projekty Programistyczne | Fabian G",
      "Web Development Projects | Fabian G": "Projekty Web Development | Fabian G",
      "Group Projects | Fabian G": "Projekty Grupowe | Fabian G",
      "Continuous photo gallery by Fabian Golebiowski in a Pinterest-style masonry feed.": "Ciagla galeria zdjec Fabiana Golebiowskiego w stylu Pinterest masonry.",
      "Coding projects by Fabian Golebiowski including WinForms and C++ system builds.": "Projekty programistyczne Fabiana Golebiowskiego, w tym WinForms i systemy w C++.",
      "Web development projects by Fabian Golebiowski including CodeIgniter and PHP/MySQL builds.": "Projekty webowe Fabiana Golebiowskiego, w tym rozwiazania CodeIgniter oraz PHP/MySQL.",
      "Group and collaboration projects by Fabian Golebiowski including leadership and delivery-focused work.": "Projekty grupowe i wspolpracy Fabiana Golebiowskiego, z naciskiem na przywodztwo i dowozenie.",
      "Personal Feed": "Osobisty feed",
      "Photo Gallery": "Galeria Zdjec",
      "A continuous Pinterest-style stream for photos I take and want to keep visible in one place.": "Ciagly strumien w stylu Pinterest dla zdjec, ktore robie i chce trzymac w jednym miejscu.",
      "Most images taken from the iPhone 16 Pro.": "Wiekszosc zdjec wykonana iPhone 16 Pro.",
      "Scroll continuously. Click an image to view it larger.": "Przewijaj bez konca. Kliknij zdjecie, aby powiekszyc.",
      "Image preview": "Podglad obrazu",
      "Close image preview": "Zamknij podglad obrazu",
      "Expanded gallery image": "Powiekszone zdjecie z galerii",
      "Location": "Lokalizacja",
      "Year": "Rok",
      "Description": "Opis",
      "Unknown": "Nieznane",
      "No images yet. Add your photos in the galleryFeed image array.": "Brak zdjec. Dodaj fotografie w tablicy galleryFeed.",
      "Portfolio Category": "Kategoria Portfolio",
      "Project Index": "Indeks Projektow",
      "Overview": "Przeglad",
      "Technologies": "Technologie",
      "Features": "Funkcje",
      "Screenshots": "Zrzuty Ekranu",
      "What I Learned": "Czego sie Nauczylem",
      "Technologies Used": "Uzyte Technologie",
      "Project Glimpse": "Podglad Projektu",
      "Role and Contribution": "Rola i Wklad",
      "Team Collaboration": "Wspolpraca Zespolowa",
      "Status": "Status",
      "Key Features": "Kluczowe Funkcje",
      "GitHub Repository": "Repozytorium GitHub",
      "To Do App": "Aplikacja To Do",
      "Patient Management": "Zarzadzanie Pacjentami",
      "Patient Management System": "System Zarzadzania Pacjentami",
      "Web Development Projects": "Projekty Web Development",
      "Expense Tracker": "Monitor Wydatkow",
      "Group Projects": "Projekty Grupowe",
      "Previous screenshot": "Poprzedni zrzut",
      "Next screenshot": "Nastepny zrzut",
      "Limerick, Ireland": "Limerick, Irlandia",
      "© 2026 Fabian Golebiowski. All rights reserved.": "© 2026 Fabian Golebiowski. Wszelkie prawa zastrzezone.",
      "Switch language": "Przelacz jezyk",
      "Open color themes": "Otworz motywy kolorow",
      "Color palettes": "Palety kolorow",
      "Default": "Domyslny",
      "Gold": "Zloty",
      "Rose": "Rozany",
      "Obsidian": "Obsydian",
      "Ocean": "Ocean",
      "Forest": "Las",
      "Night": "Noc",
      "WinForms C#": "WinForms C#",
      "Auth + CRUD": "Autoryzacja + CRUD",
      "Heap Queue": "Kopiec Kolejki",
      "OOP": "Programowanie Obiektowe",
      "Log-In and Sign-Up page": "Strona Logowania i Rejestracji",
      "Main tasks dashboard": "Glowny pulpit zadan",
      "Creating tasks": "Tworzenie zadan",
      "Editing tasks": "Edycja zadan",
      "Viewing newly added tasks": "Przegladanie nowych zadan",
      "Program menu": "Menu programu",
      "Adding patients": "Dodawanie pacjentow",
      "Calling each patient": "Wywolywanie kazdego pacjenta",
      "Printing current queue": "Drukowanie biezacej kolejki",
      "Searching for patient": "Wyszukiwanie pacjenta",
      "Displaying all patients": "Wyswietlanie wszystkich pacjentow",
      "FurEverPets": "FurEverPets",
      "A focused look at problem-solving projects built with C#, WinForms, and C++ system logic.": "Szczegolowe spojrzenie na projekty rozwiazywania problemow zbudowane z C#, WinForms i logiki systemowej C++.",
      "In Progress": "W Trakcie",
      "Team Project": "Projekt Zespolowy",
      "Team of 3": "Zespol 3 osob",
      "Leadership": "Przywodztwo",
      "Entry screen to budget system": "Ekran wprowadzania do systemu budzetu",
      "Adding a new expense": "Dodawanie nowego wydatku",
      "Viewing all expenses": "Przegladanie wszystkich wydatkow",
      "Managing an expense": "Zarzadzanie wydatkiem",
      "Campus Sync preview placeholder": "Podglad Campus Sync zastepczy",
      "FurEverPets project placeholder screenshot": "Zrzut ekranu zastepczy projektu FurEverPets"
    }
  };

  const getTextTranslation = (language, sourceText) => {
    const map = phraseTranslations[language] || phraseTranslations.en;
    return map[sourceText] || sourceText;
  };

  const updatePlainTextNodes = (language) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }
        const tagName = parent.tagName;
        if (tagName === "SCRIPT" || tagName === "STYLE" || tagName === "NOSCRIPT") {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.hasAttribute("data-i18n") || parent.hasAttribute("data-i18n-html")) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.textContent || !node.textContent.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      if (!originalTextNodes.has(node)) {
        originalTextNodes.set(node, node.textContent);
      }
      const baseText = originalTextNodes.get(node);
      const trimmed = baseText.trim();
      const translated = getTextTranslation(language, trimmed);
      if (translated !== trimmed) {
        const leading = baseText.match(/^\s*/)?.[0] || "";
        const trailing = baseText.match(/\s*$/)?.[0] || "";
        node.textContent = `${leading}${translated}${trailing}`;
      } else {
        node.textContent = baseText;
      }
    });
  };

  const updateCommonAttributes = (language) => {
    const targets = Array.from(document.querySelectorAll("[aria-label], [title], [placeholder], meta[name='description']"));
    const attrs = ["aria-label", "title", "placeholder", "content"];

    targets.forEach((element) => {
      if (!originalAttributes.has(element)) {
        const stored = {};
        attrs.forEach((attr) => {
          if (element.hasAttribute(attr)) {
            stored[attr] = element.getAttribute(attr);
          }
        });
        originalAttributes.set(element, stored);
      }

      const stored = originalAttributes.get(element);
      attrs.forEach((attr) => {
        if (stored[attr]) {
          element.setAttribute(attr, getTextTranslation(language, stored[attr]));
        }
      });
    });

    document.title = getTextTranslation(language, originalDocumentTitle);
  };

  const applyLanguage = (langCode) => {
    const language = translations[langCode] ? langCode : DEFAULT_LANGUAGE;
    const dictionary = translations[language];

    document.documentElement.setAttribute("lang", language);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (dictionary[key]) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      if (dictionary[key]) {
        if (element.tagName.toLowerCase() === "title") {
          document.title = dictionary[key];
        } else {
          element.setAttribute("title", dictionary[key]);
        }
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (dictionary[key]) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-meta-description]").forEach((element) => {
      const key = element.getAttribute("data-i18n-meta-description");
      if (dictionary[key]) {
        element.setAttribute("content", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-data-location]").forEach((element) => {
      const key = element.getAttribute("data-i18n-data-location");
      if (dictionary[key]) {
        element.setAttribute("data-location", dictionary[key]);
      }
    });

    if (langToggle) {
      const options = Array.from(langToggle.querySelectorAll(".lang-option"));
      options.forEach((option) => {
        option.classList.toggle("active", option.getAttribute("data-lang") === language);
      });
      langToggle.setAttribute("data-lang", language);
    }

    updatePlainTextNodes(language);
    updateCommonAttributes(language);

    window.__portfolioLanguage = language;
    window.__portfolioTranslate = (sourceText) => getTextTranslation(language, sourceText);

    document.dispatchEvent(new CustomEvent("languageChanged", { detail: { language } }));
    localStorage.setItem(STORAGE_KEY, language);
  };

  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  const initialLanguage = translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;

  applyLanguage(initialLanguage);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
      const next = current === "en" ? "pl" : "en";
      applyLanguage(next);
    });
  }
});
