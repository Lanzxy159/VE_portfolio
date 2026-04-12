const watchBtn = document.getElementById("watchBtn");
const heroVideo = document.getElementById("heroVideo");

watchBtn.addEventListener("click", () => {
  heroVideo.src =
    "https://www.youtube.com/embed/9lkXgkwCapk?autoplay=1&mute=0&controls=1&rel=0&playsinline=1";
});




const filters = document.querySelectorAll(".filter");
const container = document.querySelector(".row-container");
const allCards = Array.from(document.querySelectorAll(".card"));

filters.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button UI
    filters.forEach(f => f.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    // split cards
    let matched = [];
    let unmatched = [];

    allCards.forEach(card => {
      const match =
        category === "all" || card.dataset.category === category;

      if (match) {
        matched.push(card);
      } else {
        unmatched.push(card);
      }
    });

    // 🔥 CLEAR container
    container.innerHTML = "";

    // 🔥 APPEND in correct order
    matched.forEach(card => {
      card.classList.remove("hide");
      container.appendChild(card);
    });

    // optional: hide others OR keep them hidden
    unmatched.forEach(card => {
      card.classList.add("hide");
      container.appendChild(card);
    });

  });
});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const videoId = card.dataset.video;
  const type = card.dataset.type;
  const iframe = card.querySelector(".yt-preview");
  const img = card.querySelector("img");

  card.addEventListener("mouseenter", () => {

    img.style.display = "none";
    iframe.style.display = "block";

    if (type === "youtube") {
      iframe.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
    }

    if (type === "drive") {
      iframe.src =
        `https://drive.google.com/file/d/${videoId}/preview`;
    }
  });

  card.addEventListener("mouseleave", () => {
    iframe.src = "";
    iframe.style.display = "none";
    img.style.display = "block";
  });
});