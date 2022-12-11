// "use strict";

// let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

// let counter = setInterval(() => {
//   let dateNow = new Date().getTime();
//   let dateDiff = countDownDate - dateNow;

//   let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

//   document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
//   document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
//   document.querySelector(".minutes").innerHTML =
//     minutes < 10 ? `0${minutes}` : minutes;
//   document.querySelector(".seconds").innerHTML =
//     seconds < 10 ? `0${seconds}` : seconds;

//   if (dateDiff < 0) {
//     clearInterval(counter);
//   }
// }, 1000);

// let p = document.querySelector("p");

// function textToSpans(ele, textEle) {
//   let chars = Array.from(textEle.trim());
//   ele.textContent = "";
//   chars.forEach((char) => {
//     let span = document.createElement("span");
//     span.appendChild(document.createTextNode(char));
//     ele.appendChild(span);

//     if (span.textContent !== " ") span.classList.add("shine-effect");
//   });
// }

// function addTransDelay(className, delay) {
//   let spans = document.querySelectorAll(`.${className}`);
//   let transitionDelay = delay;
//   for (let i = 0; i < spans.length; i++) {
//     spans[i].style.transition = `${delay}s ${transitionDelay}s`;
//     transitionDelay += delay;
//   }
// }

// function ShineEffect(color, className) {
//   let spans = document.querySelectorAll(`.${className}`);
//   for (let i = 0; i < spans.length; i++) {
//     setTimeout(() => {
//       spans[i].style.color = color;
//     }, 100);
//   }
// }

// // function ShineEffectBack(className) {
// //   let spans = document.querySelectorAll(`.${className}`);
// //   spans.forEach((span) => {
// //     setTimeout(() => {
// //       span.style.color = "";
// //     }, 50);
// //   });
// // }

// setTimeout(() => {
//   textToSpans(p, p.textContent);
//   addTransDelay("shine-effect", 0.02);
//   ShineEffect("#b3b3b3", "shine-effect");
//   // ShineEffectBack("shine-effect");
// }, 100);

const iconStructures = document.querySelectorAll(".structure"),
  titles = document.querySelectorAll(".icon .title"),
  soundEffect = new Audio("sound-effect.mp3");

soundEffect.volume = 0.01;

for (let i = 0; i < iconStructures.length; i++) {
  iconStructures[i].onmousemove = () => {
    titles[i].classList.add("active");
    iconStructures[i].onmouseout = () => titles[i].classList.remove("active");
  };
  iconStructures[i].onmouseenter = () => soundEffect.play();
}
