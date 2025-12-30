(() => {
  const btn = document.querySelector(".burger");
  const menu = document.querySelector("#mobileMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
})();