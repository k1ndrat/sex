console.log("f*ck");

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("#hh1");
const end2 = section.querySelector("#hh2");
const black = document.querySelector(".intro:after");

const controller = new ScrollMagic.Controller();

var color = window
  .getComputedStyle(document.querySelector(".intro"), ":after")
  .getPropertyValue("background-color");

const scene = new ScrollMagic.Scene({
  duration: 17000,
  triggerElement: intro,
  triggerHook: 0,
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);

// text anim

const textAnim = gsap.fromTo(text, { opacity: 1 }, { duration: 3, opacity: 0 });
// const textAnim = gsap.fromTo(text, { opacity: 1 }, { duration: 3, opacity: 0 });

const scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  // .addIndicators()
  .addTo(controller);

// Video anim

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos);
  video.currentTime = delay;
}, 33.3);

const textAnim2 = gsap.fromTo(
  end,
  { opacity: 0, y: -200 },
  { opacity: 1, y: 0 }
);

const scene3 = new ScrollMagic.Scene({
  duration: "50%",
  triggerElement: section,
  triggerHook: 0.5,
})
  // .addIndicators()
  .setTween(textAnim2)
  .addTo(controller);

const textAnim3 = gsap.fromTo(
  end2,
  1,
  { opacity: 0, y: -200 },
  { opacity: 1, y: 0 }
);

console.log(section.offsetHeight);

const scene4 = new ScrollMagic.Scene({
  offset: section.offsetHeight / 2,
  duration: "50%",
  triggerElement: section,
  triggerHook: 0.5,
})
  // .addIndicators()
  // .setPin(section)
  .setTween(textAnim3)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  duration: "50%",
  triggerElement: section,
  triggerHook: 0,
})
  // .addIndicators()
  .setPin(section)
  .addTo(controller);
