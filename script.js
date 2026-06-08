function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const character = document.querySelector(".character");
const profileSection = document.querySelector("#profile");

function toggleCharacterVisibility() {
  const profileBottom = profileSection.offsetTop;

  if (window.scrollY >= profileBottom) {
    character.classList.add("visible");
  } else {
    character.classList.remove("visible");
  }
}

window.addEventListener("scroll", toggleCharacterVisibility);
window.addEventListener("load", toggleCharacterVisibility);

(() => {
  const grid = document.getElementById("cardGrid");
  if (!grid) return;

  let lastOpenedCard = null;

  function scrollWithHeaderOffset(el) {
    const header = document.querySelector(".header");
    const headerH = header ? header.getBoundingClientRect().height : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 8; // extra 8px gap
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function closeAll() {
    grid.querySelectorAll(".expanded-panel:not([hidden])").forEach((panel) => {
      panel.hidden = true;
    });

    grid
      .querySelectorAll(".interactable-card[aria-expanded='true']")
      .forEach((card) => {
        card.setAttribute("aria-expanded", "false");
      });
  }

  
grid.addEventListener("click", (e) => {
    if (e.target.closest(".expanded-panel-close")) {
      closeAll();

      if (lastOpenedCard) {
        scrollWithHeaderOffset(lastOpenedCard);
      }
      return;
    }


    // Clicked a card?
    const card = e.target.closest(".interactable-card");
    if (!card) return;

    const panelId = card.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    const isOpen = card.getAttribute("aria-expanded") === "true";

    closeAll();

    if (!isOpen) {
      lastOpenedCard = card;
      card.setAttribute("aria-expanded", "true");

      panel.hidden = false;

      scrollWithHeaderOffset(panel);
    }
  });
})();

//w3 modal
