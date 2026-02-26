let translations = {};

async function loadLang(lang) {
  try {
    const res = await fetch(`./lang/${lang}.json`);
    if (!res.ok) throw new Error("JSON topilmadi!");
    translations = await res.json();

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[key]) el.textContent = translations[key];
    });

    localStorage.setItem("lang", lang);
  } catch(e) {
    console.error("i18n xatolik:", e);
  }
}

function setLang(lang) {
  loadLang(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  loadLang(lang);
});