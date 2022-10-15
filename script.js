console.log("f*ck");

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("#hh1");
const end2 = section.querySelector("#hh2");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 17000,
  triggerElement: intro,
  triggerHook: 0,
})
  //   .addIndicators()
  .setPin(intro)
  .addTo(controller);

// text anim

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 }, 3);

const scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
  //   delay: 1000,
})
  .setTween(textAnim)
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
  //   console.log(scrollpos);
  video.currentTime = delay;
}, 33.3);

const textAnim2 = TweenMax.fromTo(
  end,
  1,
  { opacity: 0, x: 0, y: -200 },
  { opacity: 1, x: 0, y: 0 }
);

const scene3 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: section,
  triggerHook: 0.5,
  //   delay: 1000,
})
  //   .addIndicators()
  .setTween(textAnim2)
  .addTo(controller);

const textAnim3 = TweenMax.fromTo(
  end2,
  1,
  { opacity: 0, x: 0, y: -200 },
  { opacity: 1, x: 0, y: 0 }
);

const scene4 = new ScrollMagic.Scene({
  //   start: 100,
  offset: "700",
  duration: 500,
  triggerElement: section,
  triggerHook: 0.7,
  //   delay: 1000,
})
//   .addIndicators()
  .setTween(textAnim3)
  .setPin(section)
  .addTo(controller);
