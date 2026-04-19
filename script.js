// Hero Vid

const watchBtn = document.getElementById("watchBtn");
const heroVideo = document.getElementById("heroVideo");

watchBtn.addEventListener("click", () => {
  heroVideo.src =
    "https://www.youtube.com/embed/9lkXgkwCapk?autoplay=1&mute=0&controls=1&rel=0&playsinline=1";
});


const filters = document.querySelectorAll(".filter");
const allCards = Array.from(document.querySelectorAll(".card"));

/* =========================
   FILTER SYSTEM (FIXED)
========================= */
filters.forEach(btn => {
  btn.addEventListener("click", () => {

    filters.forEach(f => f.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    allCards.forEach(card => {

      const categories = card.dataset.category.split(" ");

      const match =
        category === "all" || categories.includes(category);

      card.classList.toggle("hide", !match);
    });

    // reset ALL row scrolls
    document.querySelectorAll(".row-container").forEach(container => {
      container.scrollLeft = 0;
    });

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


