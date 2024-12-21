function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -100,
    opacity: 0,
    duration: 0.7,
    delay: 1,
    stagger: 0.1,
  });

  tl.from(".hero .part-one h1", {
    x: -500,
    opacity: 0,
    duration: 1,
  });
  tl.from(".hero .part-one p", {
    x: -500,
    opacity: 0,
    duration: 0.7,
  });
  tl.from(".hero .part-one .btn2", {
    opacity: 0,
    duration: 0.7,
  });
  tl.from(
    ".hero .part-two img",
    {
      opacity: 0,
      duration: 0.7,
      x: -200,
    },
    "-=1"
  ); //delay in time line -=1 is refer to start 1 second 1st

  tl.from(".brandNames img", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });
}

page1Animation()

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
gsap.from(".text h2", {
    x: -100,
    opacity: 0,
    duration: 0.7,
    scrollTrigger:{
        trigger: ".services h2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".text p", {
    x: -100,
    opacity: 0,
    duration: 0.7,
    scrollTrigger:{
        trigger: ".services p",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".cards .card", {
    x: -100,
    opacity: 0,
    duration: 0.7,
    scrollTrigger:{
        trigger: ".services .cards",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".cards .card-black", {
    x: -100,
    opacity: 0,
    duration: 0.7,
    scrollTrigger:{
        trigger: ".services .cards",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".group", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
        trigger: ".group",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 0%",
        scrub: 2,
    }
})
gsap.from(".group .text-sec", {
    x: -30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
        trigger: ".group",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 0%",
        scrub: 2,
    }
})
gsap.from(".group .image-sec", {
    x: -30,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
        trigger: ".group",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 0%",
        scrub: 2,
    }
})

gsap.from(".text-headings h2", {
    x: -100,
    opacity: 0,
    duration: 0.7,
    scrollTrigger:{
        trigger: ".section2 .text-headings h2",
        scroller: "body",
        // markers: true,
        start: "top 110%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".text-headings p", {
    x: -100,
    opacity: 0,
    duration: 0.7,
    scrollTrigger:{
        trigger: ".section2 .text-headings p",
        scroller: "body",
        // markers: true,
        start: "top 110%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".text-bar", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
        trigger: ".section2 .group2",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 0",
        scrub: 2,
    }
})
gsap.from(".bar", {
    y: 100,
    opacity: 0,
    duration: 0.4,
    scrollTrigger:{
        trigger: ".section2 .group2",
        scroller: "body",
        // markers: true,
        start: "top 150%",
        end: "top 0",
        scrub: 2,
    }
})



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
        input.checked = false;
        // function RemoveCheck(){
        //   addCheck();
        // }
        // function addCheck(){
        //   input.checked = true;
        //   RemoveCheck()
        // }
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