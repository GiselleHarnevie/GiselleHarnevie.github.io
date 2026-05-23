function toggleMenu()
{
    const menu= document.querySelector(".menu-links")
    const icon= document.querySelector(".hamburger-icon")
    
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
  const grid = document.getElementById("sampleGrid");
  if (!grid) return;

  function closeAll() {
    grid.querySelectorAll(".sample-expand:not([hidden])").forEach(panel => {
      panel.hidden = true;
    });

    grid.querySelectorAll(".sample-card[aria-expanded='true']").forEach(card => {
      card.setAttribute("aria-expanded", "false");
    });
  }

  grid.addEventListener("click", (e) => {
    // Close button inside expanded panel
    if (e.target.closest(".sample-expand-close")) {
      closeAll();
      return;
    }

    // Clicked a card?
    const card = e.target.closest(".sample-card");
    if (!card) return;

    const panelId = card.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    const isOpen = card.getAttribute("aria-expanded") === "true";

    closeAll();

    if (!isOpen) {
      card.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
})();

// video play please
const videos = document.querySelectorAll("video")

videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
  })
})