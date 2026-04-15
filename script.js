// Hero Vid

const watchBtn = document.getElementById("watchBtn");
const heroVideo = document.getElementById("heroVideo");

watchBtn.addEventListener("click", () => {
  heroVideo.src =
    "https://www.youtube.com/embed/9lkXgkwCapk?autoplay=1&mute=0&controls=1&rel=0&playsinline=1";
});


const filters = document.querySelectorAll(".filter");
const container = document.querySelector(".row-container");
const allCards = Array.from(document.querySelectorAll(".card"));

/* =========================
   FILTER SYSTEM (UNCHANGED)
========================= */
filters.forEach(btn => {
  btn.addEventListener("click", () => {

    filters.forEach(f => f.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    let matched = [];
    let unmatched = [];

    allCards.forEach(card => {

      const categories = card.dataset.category.split(" ");

      const match =
        category === "all" || categories.includes(category);

      if (match) {
        matched.push(card);
      } else {
        unmatched.push(card);
      }

      // visibility control
      card.classList.toggle("hide", !match);
    });

    // reorder (Netflix effect)
    [...matched, ...unmatched].forEach(card => {
      container.appendChild(card);
    });

    // reset scroll
    container.scrollLeft = 0;
  });
});


/* =========================
   SCROLL BUTTON FIX (NEW)
========================= */

const leftBtn = document.querySelector(".scroll-left");
const rightBtn = document.querySelector(".scroll-right");

// dynamic scroll size (IMPORTANT FIX FOR MOBILE)
function getScrollAmount() {
  const card = document.querySelector(".card");
  if (!card) return 300;

  const cardWidth = card.offsetWidth;
  const style = window.getComputedStyle(card);
  const gap = parseInt(style.marginRight || 15);

  return cardWidth + gap;
}


function getCardWidth() {
  const card = document.querySelector(".card");
  return card ? card.offsetWidth + 15 : 300;
}

if (leftBtn && rightBtn && container) {

  rightBtn.addEventListener("click", () => {
    container.scrollBy({
      left: getCardWidth(),
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth"
    });
  });

}


document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".row-container");
  const leftBtn = document.querySelector(".scroll-left");
  const rightBtn = document.querySelector(".scroll-right");

  if (!container || !leftBtn || !rightBtn) {
    console.error("Scroll buttons or container not found");
    return;
  }

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -600, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 600, behavior: "smooth" });
  });

});




// Modals
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(card => {
  const videoId = card.dataset.video;
  const type = card.dataset.type;

  card.addEventListener("click", () => {
    modal.style.display = "flex";

    if (type === "drive") {
      modalVideo.src = `https://drive.google.com/file/d/${videoId}/preview`;
    } else {
      modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
  });
});

// close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = "";
});

// click outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
});


