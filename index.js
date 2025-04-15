

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: "top 6%",
  end: "200% 0%",
  trigger: ".panel-2",
  toggleClass: { targets: "nav", className: "nav-active" },
});

ScrollTrigger.create({
  start: "top 6%",
  trigger: ".panel-2",
  toggleClass: { targets: "nav ul li a", className: "a-active" },
});

gsap.to(".container", {
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: ".panel-3",
    start: "top bottom",
    end: "bottom 50%",
    toggleActions: "play reverse restart complete"
  }
});

gsap.to(".container-2", {
  x: 900,
  duration: 3,
  scrollTrigger: {
    trigger: ".panel-3",
    start: "top bottom",
    end: "bottom 50%",
    toggleActions: "play reverse restart complete"
  }
});

// gsap.to("nav", {
//   height: 0,
//   scrollTrigger: {
//     trigger: ".scroll-track",
//     start:"top 6%",
//     end: "bottom top",
//   }
// })

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-track",
    start: "top top",
    end: "bottom top",
    scrub: .5,
  }
});

tl.to(".sticky-container", {scale: 2.4})
  .to(".side-image", {opacity: 0, delay: -.5})
  .to(".main-image", {scale: 1, delay:-.5})
  .to(".image1", {y: -40, delay:-.5})
  .to(".image3", {x: 40, y: -40, delay:-.5})
  .to(".image4", {x: -40, y: -40,delay:-.5})
  .to(".image7", {x: 40, y: 40,delay:-.5})
;

const divHolder = document.getElementById('main-div');
divHolder.style.display = 'none';

function displayButtons() {
  divHolder.style.display = 'flex';
  addNewButtons.style.display = 'none';
}

const addNewButtons = document.getElementById('addnewbuttons');
addNewButtons.addEventListener('click', displayButtons);
