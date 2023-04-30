document.addEventListener("DOMContentLoaded", function () {
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
});

let myTabs = document.querySelectorAll('.tabs-info .list-group > a.list-group-item');
let tabTitleElement = document.getElementById('tab-title');
myTabs.forEach((tab) => {
  tab.addEventListener('shown.bs.tab', function () {
    tabTitleElement.innerHTML = this.innerHTML
  })
})

let cardSwiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


let swiperTwo = new Swiper(".swiperTwo", {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



let swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: false,
  simulateTouch: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 0,
      freeMode: false,
      simulateTouch: false,
    },
  },
});

let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,
  freeMode: false,
  simulateTouch: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: false,
      simulateTouch: false,
    },
  },
});




let swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  
});