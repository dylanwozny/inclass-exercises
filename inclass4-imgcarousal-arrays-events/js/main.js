//npx eslint js/main.js --fix

// your js here...
const images = ["mountain1.jpg", "mountain2.jpg", "mountain3.jpg"];
let currentImage = 0;

// grab image element and set
const imageElement = document.querySelector(".carousel>img");
imageElement.src = `images/${images[currentImage]}`;

// add event listener to click
document.querySelector(".carousel").addEventListener("click", (evt) => {
  const { target } = evt;

  if (target.classList.contains("control")) {
    // logic for prev of next
    if (target.classList.contains("next")) {
      currentImage += 1;
    } else if (target.classList.contains("prev")) {
      currentImage -= 1;
    }
    // stop from going outside loop
    if (currentImage >= images.length) {
      currentImage = 0;
    } else if (currentImage < 0) {
      currentImage = 2;
    }
    // display new current image
    imageElement.src = `images/${images[currentImage]}`;
    console.log(currentImage);
  }
});
