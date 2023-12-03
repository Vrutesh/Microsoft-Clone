// go-to-top-btn
// let calcScrollValue = () => {
//   let gototopbtn = document.querySelector(".back-to-top");
//   let pos = document.documentElement.scrollTop;

//   if (pos > 300) {
//     gototopbtn.style.display = "flex";
//     gototopbtn.style.bottom = "0px";
//     gototopbtn.style.right = "20px";

//     if (pos > 1850) {
//       gototopbtn.style.display = "flex";
//       gototopbtn.style.position = "fixed";
//     }
//   } else {
//     gototopbtn.style.display = "none";
//   }

//   gototopbtn.addEventListener("click", () => {
//     document.documentElement.scrollTop = 0;
//   });
// };

// window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;

//   swiper

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
  },

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
