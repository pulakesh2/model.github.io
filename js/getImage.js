const buttons = document.querySelectorAll(".btn");
const imageLarge = document.querySelector(".img__large");
const image__container__large = document.querySelector(
  ".image__container__large"
);

const next = document.querySelector(".next");

const nextImage = () => {
  imageLarge.setAttribute(
    "src",
    `images/${modelFile}/${modelName}-${Math.floor(Math.random() * 20)}.png`
  );
};

let modelName, modelFile;

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    modelFile = e.target.getAttribute("id");
    modelName = e.target.getAttribute("data-model");

    container.classList.add("image__container__hide");

    setTimeout(() => {
      image__container__large.classList.add("image__container__large__show");
      nextImage();
    }, 300);
  });
}

next.addEventListener("click", nextImage);
