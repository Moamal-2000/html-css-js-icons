"use strict";

const iconStructures = document.querySelectorAll(".structure"),
  titles = document.querySelectorAll(".icon .title"),
  soundEffect = new Audio("sound-effect.mp3");

soundEffect.volume = 0.005;

for (let i = 0; i < iconStructures.length; i++) {
  iconStructures[i].onmousemove = () => {
    titles[i].classList.add("active");
    iconStructures[i].onmouseout = () => titles[i].classList.remove("active");
  };
  iconStructures[i].onmouseenter = () => soundEffect.play();
}
