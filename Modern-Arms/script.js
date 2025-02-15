

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: "top 6%",
  end: "bottom 6%",
  trigger: ".panel-2",
  toggleClass: { targets: "nav", className: "nav-active" },
});

ScrollTrigger.create({
  start: "top 6%",
  end: "bottom 6%",
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
  .to(".image7", {x: 40, y: 40,delay:-.5});


const addnewbuttons = document.getElementById('addnewbuttons');
addnewbuttons.addEventListener('click', addbutton);

function addbutton(){
  const yuhh = document.getElementById('yuhh');
  const newbutton = document.createElement('button');
  const newbutton2 = document.createElement('button');
  const newbutton3 = document.createElement('button');
  yuhh.append(newbutton, newbutton2, newbutton3);
  newbutton.style.position = 'absolute';
  newbutton.style.top = '45%';
  newbutton.style.left = '40%';
  newbutton.style.zIndex = '3';
  newbutton.style.height = '10%';
  newbutton.style.width = '5%';
  newbutton.style.backgroundImage = "url('Modern-Arms/pictures/rifle silhouette.png')";
  newbutton.style.backgroundPosition = 'center';
  newbutton2.style.position = 'absolute';
  newbutton2.style.top = '45%';
  newbutton2.style.left = '50%';
  newbutton2.style.zIndex = '3';
  newbutton2.style.height = '10%';
  newbutton2.style.width = '5%';
  newbutton2.style.backgroundImage = "url('Modern-Arms/pictures/pistol silhouette.png')";
  newbutton3.style.position = 'absolute';
  newbutton3.style.top = '45%';
  newbutton3.style.left = '60%';
  newbutton3.style.zIndex = '3';
  newbutton3.style.height = '10%';
  newbutton3.style.width = '5%';
  newbutton3.style.backgroundImage = "url('Modern-Arms/pictures/armor silhouette.jpeg')";
};