document.addEventListener("DOMContentLoaded", () => {
  const primaryList = document.getElementById("primaryNavList");
  const mobileList = document.getElementById("mobileNavList");
  if (!primaryList || !mobileList) return;

  // Clone the <li> items into mobile
  mobileList.innerHTML = "";
  primaryList.querySelectorAll("li").forEach((li) => {
    mobileList.appendChild(li.cloneNode(true));
  });

  // Optional: set aria-current="page" correctly for both navs
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".nav a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    const file = href.split("/").pop().toLowerCase();
    if (file === current) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
});