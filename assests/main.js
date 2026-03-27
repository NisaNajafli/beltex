
document.getElementById("year").textContent = new Date().getFullYear();

(function () {
  const header = document.querySelector("header");
  if (!header) return;

  const syncHeaderOffset = () => {
    document.documentElement.style.setProperty(
      "--header-offset",
      `${header.offsetHeight}px`,
    );
  };

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
    syncHeaderOffset();
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", syncHeaderOffset);

  const mainButton = document.getElementById("main-button");
  if (mainButton) {
    mainButton.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
})();
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        faqItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      }
    });
  });
});