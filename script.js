"use strict";
// variable
const body = document.querySelector("body");
const brightnesBtn = document.querySelector(".brightnes");
const backgroundChange = document.querySelector(".bg");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const sliderImage = document.querySelector(".slider-img");
const dots = document.querySelectorAll(".dot");
// flag var
let isBrightnesCheck = 0;
let imgIndex = 1;
// function
function moveImg() {
  if (imgIndex !== 0) {
    document.querySelector(`.dot-${imgIndex}`).classList.toggle("dot-active");
  }
  if (imgIndex === 4) {
    imgIndex = 0;
  }
  imgIndex++;
  sliderImage.src = `./images/img-${imgIndex}.jpg`;
  document.querySelector(`.dot-${imgIndex}`).classList.toggle("dot-active");
}
// automatic change
const go_next = setInterval(moveImg, 3000);
go_next;
// brightnes codding
brightnesBtn.addEventListener("click", function () {
  if (isBrightnesCheck === 0) {
    body.style.backgroundColor = "#303030";
    brightnesBtn.textContent = "Light Mode";
    backgroundChange.style.backgroundColor = "blue";
    isBrightnesCheck = 1;
  } else {
    body.style.backgroundColor = "lightcyan";
    brightnesBtn.textContent = "Dark Mode";
    backgroundChange.style.backgroundColor = "blueviolet";
    isBrightnesCheck = 0;
  }
});
// slider next btn
nextBtn.addEventListener("click", moveImg);
//  slider prev btn
prevBtn.addEventListener("click", function () {
  if (imgIndex !== 0) {
    document.querySelector(`.dot-${imgIndex}`).classList.toggle("dot-active");
  }
  if (imgIndex === 0) {
    imgIndex = 4;
  }
  imgIndex--;
  sliderImage.src = `./images/img-${imgIndex}.jpg`;
  document.querySelector(`.dot-${imgIndex}`).classList.toggle("dot-active");
});
// controller with dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    document.querySelector(`.dot-${imgIndex}`).classList.toggle("dot-active");
    imgIndex = i + 1;
    sliderImage.src = `./images/img-${i + 1}.jpg`;
    document.querySelector(`.dot-${imgIndex}`).classList.toggle("dot-active");
  });
}
