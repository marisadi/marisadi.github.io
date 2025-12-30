//////////////////////////
//  HOMEOSTASIS (static) //
//////////////////////////

// ----------------------------
// Fisher–Yates shuffle (same as your original)
// ----------------------------
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ----------------------------
// Info Overlay (? + escape) 
// ----------------------------
function initOverlay() {
  var infoBtn = document.querySelector(".infoBtn");
  var panel = document.getElementById("infoPanel");
  if (!infoBtn || !panel) return;

  function openPanel() {
    panel.hidden = false;
    infoBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closePanel() {
    panel.hidden = true;
    infoBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  infoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (panel.hidden) openPanel();
    else closePanel();
  });

  panel.addEventListener("click", function (e) {
    var t = e.target;
    if (t && t.matches("[data-close]")) {
      e.preventDefault();
      closePanel();
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) closePanel();
  });
}

// ----------------------------
// Global view counter (CounterAPI) with fallback
// ----------------------------
var updatePV = 0;

function setViewNumber(n) {
  var el = document.getElementById("js-post-view-number");
  if (el) el.textContent = String(n);
}

async function incrementGlobalViews() {
  if (typeof window.Counter !== "function") {
    throw new Error("CounterAPI not loaded");
  }

  const counter = new window.Counter({
    version: "v1",
    namespace: "marisadimonda",
  });

  const res = await counter.up("homeostasis");

  // ✅ CounterAPI returns { count: number } (not value)
  const raw =
    (res && res.count) ??
    (res && res.value) ?? // keep older/other shapes just in case
    (res && res.data && (res.data.count ?? res.data.value));

  const v = Number(raw);

  if (!Number.isFinite(v)) {
    console.warn("CounterAPI raw response:", res);
    throw new Error("CounterAPI returned non-numeric value");
  }

  return v;
}

function incrementLocalViewsFallback() {
  var KEY = "homeostasis_views_local";
  var v = (Number(localStorage.getItem(KEY)) || 0) + 1;
  localStorage.setItem(KEY, String(v));
  return v;
}

// ----------------------------
// Scramble 
// ----------------------------
function scramble() {
  var el = document.getElementById("js-shuffledParagraph");
  if (!el) return;

  // preserve original so reloads shuffle the same source
  if (!el.dataset.originalHtml) el.dataset.originalHtml = el.innerHTML;
  if (!el.dataset.originalText) el.dataset.originalText = el.textContent;

  var threshold =
    "75352661899996803128590943015828544157622723232797974994024519187426300725723237260095445589405889761838859530193806858611118928532398324873176552222453423268236009847701230939769943066363755545042762754722565568059703732753143102180966059486814894770487161267258206727324399870841743535281786393902623165066056214529198998976704492803590285030975418751025376785303335581593483030023086594139560776471521676449990908464893388963440715345966638047826276349712772155987121598997230376554506408831668759525694455854936317608210956000165635304010870467172796284806992101169285180063109050331229847088270579395896185852698448827084110836521659382175548567861273031038991695437873811248978648453411462955367065051926860680984668337856961790128838436381320743447651992918752018957033068722149128372289836968766019507696969994853642297268731298258254740722836239422596065283014567656056921911442692334291818636503004247584688164221826734050561209796917198848000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

  if (parseFloat(updatePV) > threshold) {
    // char mode
    var array = el.dataset.originalText.split("");
    shuffle(array);
    el.textContent = array.join("");
    el.style.opacity = 1;
  } else {
    // word mode (includes <br> if it’s already spaced in your HTML)
    var html = el.dataset.originalHtml;
    var array = html.split(" ").filter(Boolean);
    shuffle(array);
    el.innerHTML = array.join(" ");
    el.style.opacity = 1;
  }
}

// ----------------------------
// Boot
// ----------------------------
document.addEventListener("DOMContentLoaded", async function () {
  initOverlay();

  try {
    updatePV = await incrementGlobalViews();
    setViewNumber(updatePV);
  } catch (e) {
    console.warn("Counter blocked; hiding view count.", e);
    setViewNumber("— filtering detected – cannot count"); // or "views unavailable"
  }

  scramble();
});