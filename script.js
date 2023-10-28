// href clicked active link start 
const currentHTMLPage = window.location.href;
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  if (currentHTMLPage.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
// href clicked active link end

// swiper js 
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


