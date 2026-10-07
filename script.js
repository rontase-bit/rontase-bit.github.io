(() => {
  "use strict";

  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  const backToTop = document.getElementById("backToTop");
  const printButton = document.getElementById("printButton");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") body.classList.add("dark");

  function updateThemeButton() {
    if (!themeToggle) return;
    const dark = body.classList.contains("dark");
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme"
    );
    themeToggle.textContent = dark ? "☀" : "◐";
  }

  updateThemeButton();

  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem(
      "portfolio-theme",
      body.classList.contains("dark") ? "dark" : "light"
    );
    updateThemeButton();
  });

  navToggle?.addEventListener("click", () => {
    if (!primaryNav) return;
    const open = primaryNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );
  });

  primaryNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
      navToggle?.setAttribute("aria-label", "Open navigation");
    });
  });

  printButton?.addEventListener("click", () => window.print());

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.classList.add("imageFallback");
    }, { once: true });
  });

  const updateBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle("visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
/* =========================================================
   FORMSPREE CONTACT FORM
   ========================================================= */

window.formspree =
    window.formspree ||
    function () {
        (formspree.q = formspree.q || []).push(arguments);
    };


formspree("initForm", {
    formElement: "#contact-form",
    formId: "xnpnzzog"
});