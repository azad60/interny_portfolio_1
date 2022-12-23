var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
   autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView:2,
      spaceBetween:0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});


const text= document.getElementById('text');
text.innerHTML= text.textContent.replace(/\S/g,"<h6>$&</h6>");
const ele = document.querySelectorAll('h6');
for(var i=1; i<ele.length; i++){
    ele[i].style.transform="rotate("+i*18+"deg)";
}
