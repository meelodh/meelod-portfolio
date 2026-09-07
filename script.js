document.addEventListener("DOMContentLoaded", () => {

  /* ==================================
     SMOOTH PROJECT SCROLL
  ================================== */

  const projectButton = document.querySelector('a[href="#projects"]');

  if (projectButton) {
    projectButton.addEventListener("click", (event) => {
      event.preventDefault();

      const projects = document.querySelector("#projects");

      if (projects) {
        projects.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }


  /* ==================================
     SCROLL REVEAL
  ================================== */

  const revealElements = document.querySelectorAll(
    ".section-heading, .project-card"
  );

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {

    revealElements.forEach((element, index) => {
      element.classList.add("reveal");

      if (element.classList.contains("project-card")) {
        element.style.setProperty(
          "--reveal-delay",
          `${index * 90}ms`
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observerInstance.unobserve(entry.target);
          }
        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("reveal-visible");
    });

  }


  /* ==================================
     EXTERNAL LINK SECURITY
  ================================== */

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });


  /* ==================================
     BUTTON KEYBOARD EFFECT
  ================================== */

  const interactiveButtons = document.querySelectorAll(
    ".social-button, .resume-button, .primary-button"
  );

  interactiveButtons.forEach((button) => {

    button.addEventListener("keydown", (event) => {

      if (event.key === "Enter") {
        button.classList.add("keyboard-active");

        setTimeout(() => {
          button.classList.remove("keyboard-active");
        }, 180);
      }

    });

  });


  /* ==================================
     COMING SOON PROJECT
  ================================== */

  const comingSoonLinks = document.querySelectorAll(".coming-soon");

  comingSoonLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });


  console.log("Meelod Hassan Portfolio loaded successfully.");

});

