document.addEventListener("DOMContentLoaded", () => {
  const navList = document.querySelector(".nav-list");
  if (!navList) return;

  const links = Array.from(navList.querySelectorAll("a"))
    .map(a => a.getAttribute("href"))
    .filter(href => href && href.endsWith(".html"));

  const current = window.location.pathname.split("/").pop();

  const index = links.indexOf(current);
  if (index === -1) return;

  const prev = links[index - 1];
  const next = links[index + 1];

  const prevEl = document.querySelector(".work-prev");
  const nextEl = document.querySelector(".work-next");

  if (prev && prevEl) {
    prevEl.href = prev;
    prevEl.hidden = false;
  }

  if (next && nextEl) {
    nextEl.href = next;
    nextEl.hidden = false;
  }
});
