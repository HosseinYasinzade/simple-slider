"use strict";

// variable
const body = document.querySelector("body");
const brightnesBtn = document.querySelector(".brightnes");
const backgroundChange = document.querySelector(".bg");

// flag var
let isBrightnesCheck = 0;

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
