// Select the header element
const header = document.querySelector(".header");

// Function to toggle the sticky class based on scroll position
function toggleStickyHeader() {
  if (window.scrollY > 10) { // Adjust the scroll position (e.g., 10px) as needed
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add a scroll event listener to trigger the class toggle
window.addEventListener("scroll", toggleStickyHeader);

// Run the toggleStickyHeader function on page load
toggleStickyHeader();

// teachers Swiper
var teachersSwiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  fade: true,
  grabCursor: true,
  slidesPerGroupSkip: 1,
  loop: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 4 ,
      slidesPerGroup: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Frequently Asked Questions
document.addEventListener('DOMContentLoaded', function () {
  let accordions = document.querySelectorAll('.q-box .accordion');

  accordions.forEach(acco => {
      acco.onclick = () => {
          accordions.forEach(subAcco => { subAcco.classList.remove('active') });
          acco.classList.add('active');
      }
  });
});


