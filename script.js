const watchBtn = document.getElementById("watchBtn");
const heroVideo = document.getElementById("heroVideo");

watchBtn.addEventListener("click", () => {
  heroVideo.src =
    "https://www.youtube.com/embed/9lkXgkwCapk?autoplay=1&mute=0&controls=1&rel=0&playsinline=1";
});