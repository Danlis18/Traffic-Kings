let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = total - 1;
  if (currentIndex >= total) currentIndex = 0;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateMatches() {
  document.getElementById("cs2-matches").innerHTML = `
    <li>CS2: NAVI vs FaZe — LIVE</li>
    <li>Virtus.pro vs Astralis — 17:30</li>
    <li>FaZe vs G2 — 14:00</li>
  `;

  document.getElementById("football-matches").innerHTML = `
    <li>Футбол: Реал vs Барселона — 1:0</li>
    <li>Manchester City vs Arsenal — 18:00</li>
    <li>Bayern vs Dortmund — 21:00</li>
  `;

  document.getElementById("other-sports").innerHTML = `
    <li>UFC: McGregor vs Chandler — ожидание</li>
    <li>Теннис: Djokovic vs Alcaraz — 3:2</li>
    <li>Формула-1: Гран-при Монако — В эфире</li>
  `;
}

// Автоматичне оновлення подій кожні 3 секунди
setInterval(updateMatches, 3000);

// Анімації при скролі
AOS.init();

// Swiper-слайдер
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 3000
  }
});
