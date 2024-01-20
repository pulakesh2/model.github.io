"use strict";

const btns = document.querySelectorAll(".btn");
const btnOpen = document.querySelector(".btn-open");
const imgs = document.querySelectorAll(".image");
const container = document.querySelector(".container");
const form = document.querySelector(".form");
const userName = document.getElementById("name");
const accountName = document.querySelector(".page-name");
userName.value = "";

const btnAnimation = function (e) {
  e.preventDefault();
  const button = e.target;
  button.classList.toggle("btn-hover");
};

const openPage = function () {
  console.log(userName.value);
  accountName.textContent = userName.value;
  form.classList.add("form-hide");
  // container.classList.add("container-show");
};

for (const btn of btns) {
  btn.addEventListener("click", btnAnimation);
}

const imgAnimation = function (e) {
  const image = e.target;
  image.classList.toggle("image-hover");
};

for (const img of imgs) {
  img.addEventListener("click", imgAnimation);
}

btnOpen.addEventListener("click", function (e) {
  e.preventDefault();
  openPage();
  setTimeout(() => {
    container.classList.add("container-show");
  }, 300);
});
