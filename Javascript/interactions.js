document.addEventListener("DOMContentLoaded", () => {
	const scrollToTopBtn = document.getElementById("scrollToTopBtn");
	const navLinks = Array.from(document.querySelectorAll(".professional-nav .nav-link"));
	const sections = Array.from(document.querySelectorAll(".reveal-section"));

	const setActiveLink = () => {
		const offset = 140;
		const current = sections.find((section) => {
			const top = section.offsetTop - offset;
			const bottom = top + section.offsetHeight;
			return window.scrollY >= top && window.scrollY < bottom;
		});

		navLinks.forEach((link) => {
			const isActive = current && link.getAttribute("href") === `#${current.id}`;
			link.classList.toggle("active", Boolean(isActive));
		});
	};

	if (scrollToTopBtn) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				scrollToTopBtn.classList.add("show");
			} else {
				scrollToTopBtn.classList.remove("show");
			}
			setActiveLink();
		});

		scrollToTopBtn.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}

	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					revealObserver.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.18 }
	);

	sections.forEach((section) => revealObserver.observe(section));
	setActiveLink();
});