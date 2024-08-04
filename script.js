"use strict";

// variable
const body = document.querySelector("body");
const brightnesBtn = document.querySelector(".brightnes");

// flag var
let isBrightnesCheck = 0;

// brightnes codding
brightnesBtn.addEventListener("click", function () {
  if (isBrightnesCheck === 0) {
    body.style.backgroundColor = "#303030";
    isBrightnesCheck = 1;
  } else {
    body.style.backgroundColor = "lightcyan";
    isBrightnesCheck = 0;
  }
});
