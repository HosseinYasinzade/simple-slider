"use strict";

// variable
const body = document.querySelector("body");
const brightnesBtn = document.querySelector(".brightnes");
const backgroundChange = document.querySelector(".bg");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const sliderImage = document.querySelector(".slider-img");

// flag var
let isBrightnesCheck = 0;
let imgIndex = 1;

// automatic change
const go_next = setInterval(function () {
  imgIndex++;
  sliderImage.src = `./images/img-${imgIndex}.jpg`;
  if (imgIndex === 4) {
    imgIndex = 0;
  }
}, 3000);

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
nextBtn.addEventListener("click", function () {
  imgIndex++;
  sliderImage.src = `./images/img-${imgIndex}.jpg`;
  if (imgIndex === 4) {
    imgIndex = 0;
  }
});

//  slider prev btn

prevBtn.addEventListener("click", function () {
  imgIndex--;
  if (imgIndex === 0) {
    imgIndex = 4;
  }
  sliderImage.src = `./images/img-${imgIndex}.jpg`;
});
