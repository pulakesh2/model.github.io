"use strict";
//targeting elements-->
const imageLayout = document.querySelector(".image-layout");
const cardLayout = document.querySelector(".container");
const nextBtn = document.querySelector(".next-btn");
const modelImage = document.querySelector(".model-image");
console.log(modelImage);
let globalModel = "";
//model-->
const ivyLabelle = document.querySelector(".ivy-labelle");
const roseRomero = document.querySelector(".rose-romero");
const msPuiyi = document.querySelector(".ms-puiyi");
const ivanaKnoll = document.querySelector(".ivana-knoll");
const daniDaniels = document.querySelector(".dani-daniels");
const nataliaBarulich = document.querySelector(".natalia-barulich");
const amandaFransson = document.querySelector(".amanda-fransson");
const sommerRay = document.querySelector(".sommer-ray");
const nicoleAniston = document.querySelector(".nicole-aniston");
const serenaBeckere = document.querySelector(".serena-beckere");
const evaLovia = document.querySelector(".eva-lovia");
const amandaTrivizas = document.querySelector(".amanda-trivizas");
const angelaWhite = document.querySelector(".angela-white");
const maddayCastellano = document.querySelector(".madday-castellano");
const filippaFransson = document.querySelector(".filippa-fransson");
// console.log(ivyLabelle);
console.log(msPuiyi.classList[0]);
let imgIndex = Math.floor(Math.random() * 20) + 1;
// let modelIndex = Math.floor(Math.random() * 20) + 1;
// console.log(modelIndex);

// console.log(x);
//Click ViewProfiles-->
const clickMsPuiyi = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/ms Puiyi/ms-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickRoseRomero = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/rose romero/rose-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickIvyLabelle = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/ivy labelle/ivy-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickIvanaKnoll = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/knoll doll/ivy-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickDaniDaniels = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/dani daniels/dani-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickNataliaBarulich = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/natalia/natalia-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickAmanadaFransson = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/amanda fransson/amanda-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickSommerRay = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/sommer ray/sommer-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickNicoleAniston = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/nicole aniston/nicole-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickSerenaBeckere = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/serena becker/serena-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickEvaLovia = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/eva lovia/eva-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickAmandaTrivizas = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/amanda trivizas/amanda-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickAngelaWhite = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/angela white/angela-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickMaddayCastellano = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/madday castellano/madday-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};

const clickFilippaFransson = function (e) {
  cardLayout.classList.add("hidden");
  imageLayout.classList.remove("hidden");
  modelImage.src = `images/filippa fransson/filippa-image-${imgIndex}.png`;
  imgIndex = Math.floor(Math.random() * 20) + 1;
  globalModel = e.target.classList[0];
};
//Click Next button-->
//CONVERT THIS TO SWITCH STATEMENT--->
const clickNextBtn = function () {
  if (globalModel === "ms-puiyi") {
    modelImage.src = `images/ms Puiyi/ms-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "rose-romero") {
    modelImage.src = `images/rose romero/rose-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "ivy-labelle") {
    modelImage.src = `images/ivy labelle/ivy-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "ivana-knoll") {
    modelImage.src = `images/knoll doll/ivy-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "dani-daniels") {
    modelImage.src = `images/dani daniels/dani-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "natalia-barulich") {
    modelImage.src = `images/natalia/natalia-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "amanda-fransson") {
    modelImage.src = `images/amanda fransson/amanda-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "sommer-ray") {
    modelImage.src = `images/sommer ray/sommer-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "nicole-aniston") {
    modelImage.src = `images/nicole aniston/nicole-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "serena-beckere") {
    modelImage.src = `images/serena becker/serena-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "eva-lovia") {
    modelImage.src = `images/eva lovia/eva-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "amanda-trivizas") {
    modelImage.src = `images/amanda trivizas/amanda-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "angela-white") {
    modelImage.src = `images/angela white/angela-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "madday-castellano") {
    modelImage.src = `images/madday castellano/madday-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  } else if (globalModel === "filippa-fransson") {
    modelImage.src = `images/filippa fransson/filippa-image-${imgIndex}.png`;
    imgIndex = Math.floor(Math.random() * 20) + 1;
  }
};

//clicknextbutton-->
// const clickNextBtn = function () {
//   switch (modelIndex) {
//     case modelImage.classList.contains(`${modelIndex}`):
//       break;

//     default:
//       break;
//   }
// };

//Event-->
msPuiyi.addEventListener("click", clickMsPuiyi);
roseRomero.addEventListener("click", clickRoseRomero);
ivyLabelle.addEventListener("click", clickIvyLabelle);
ivanaKnoll.addEventListener("click", clickIvanaKnoll);
daniDaniels.addEventListener("click", clickDaniDaniels);
nataliaBarulich.addEventListener("click", clickNataliaBarulich);
amandaFransson.addEventListener("click", clickAmanadaFransson);
sommerRay.addEventListener("click", clickSommerRay);
nicoleAniston.addEventListener("click", clickNicoleAniston);
serenaBeckere.addEventListener("click", clickSerenaBeckere);
evaLovia.addEventListener("click", clickEvaLovia);
amandaTrivizas.addEventListener("click", clickAmandaTrivizas);
angelaWhite.addEventListener("click", clickAngelaWhite);
maddayCastellano.addEventListener("click", clickMaddayCastellano);
filippaFransson.addEventListener("click", clickFilippaFransson);

//next button event--->
nextBtn.addEventListener("click", clickNextBtn);
