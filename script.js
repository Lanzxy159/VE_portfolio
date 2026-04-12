const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const videoId = card.getAttribute("data-video");
  const iframe = card.querySelector(".yt-preview");
  const thumbnail = card.querySelector("img");

  card.addEventListener("mouseenter", () => {
    thumbnail.style.display = "none";
    iframe.style.display = "block";

    iframe.src =
      `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1`;
  });

  card.addEventListener("mouseleave", () => {
    iframe.src = ""; // stop video properly
    iframe.style.display = "none";
    thumbnail.style.display = "block";
  });
});