var btn1 = document.querySelector("#burger");
var input = document.querySelector("#burger");
// var sidebar = document.querySelector(".sidebar")
let isClicked = false; // Initialize the state

btn1.addEventListener("click", () => {
  if (!isClicked) {
    document.querySelector(".sidebar").style.right = "0";
    document.querySelector(".sidebar").style.display = "block";
    input.checked = true;
  } else {
    document.querySelector(".sidebar").style.right = "-130%";
    document.querySelector(".sidebar").style.display = "none";
    input.checked = false;
  }
  isClicked = !isClicked;
});
let backToTopBtn = document.querySelector(".button");
window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.querySelectorAll(".anchors h4").forEach((listItem) => {
  listItem.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove 'active' class from all list items
    document.querySelectorAll(".anchors h4").forEach((item) => {
      item.classList.remove("active");
    });

    // Add 'active' class to the clicked list item
    this.classList.add("active");

    // Scroll to the target section
    var targetSection = document.querySelector(
      this.querySelector("a").getAttribute("href")
    );

    gsap.to(window, {
      scrollTo: { y: targetSection, offsetY: 60 },
      duration: 1,
      ease: "power3.inOut",
    });
  });
});
gsap.registerPlugin(ScrollTrigger);
document
  .querySelectorAll(".sidebar .side-bar-anchors h4")
  .forEach((listItem) => {
    listItem.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".sidebar").style.right = "-130%";
      document.querySelector(".sidebar").style.display = "none";
      input.checked = false;
      // Remove 'active' class from all list items
      document
        .querySelectorAll(".sidebar .side-bar-anchors h4")
        .forEach((item) => {
          item.classList.remove("active");
        });

      // Add 'active' class to the clicked list item
      this.classList.add("active");

      // Scroll to the target section
      var targetSection = document.querySelector(
        this.querySelector("a").getAttribute("href")
      );

      gsap.to(window, {
        scrollTo: { y: targetSection, offsetY: 60 },
        duration: 1,
        ease: "power3.inOut",
      });
    });
  });
gsap.registerPlugin(ScrollTrigger);
// tl.from(".text h2",{
//     x: -100,
//     opacity: 0,
//     duration: 0.5,
// })
// tl.from(".text p",{
//     x: 100,
//     opacity: 0,
//     duration: 0.5,
// })

// gsap.from(".text h2", {
//     x: -100,
//     opacity: 0,
//     duration: 0.7,
//     scrollTrigger:{
//         trigger: ".services h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 0",
//         scrub: 2,
//     }
// })
// gsap.from(".text p", {
//     x: 100,
//     opacity: 0,
//     duration: 0.7,
//     scrollTrigger:{
//         trigger: ".services p",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 0",
//         scrub: 2,
//     }
// })
// gsap.from(".cards .card", {
//     x: 100,
//     opacity: 0,
//     duration: 0.7,
//     scrollTrigger:{
//         trigger: ".services .cards",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 0",
//         scrub: 2,
//     }
// })
// gsap.from(".cards .card-black", {
//     x: -100,
//     opacity: 0,
//     duration: 0.7,
//     scrollTrigger:{
//         trigger: ".services .cards",
//         scroller: "body",
//         markers: true,
//         start: "top 80%",
//         end: "top 0",
//         scrub: 2,
//     }
// })
