//global // grab the correct elements
let featureImg = document.querySelector("img.feature");
let featureP = document.querySelector("p.title");
let featureLink = document.querySelector("a");

//define event listeners. evt is so we can access the event object(evt is when the link is clicked).
function featureLinkHandler(evt) {
  let featureLinkTitle = document.querySelector("a.feature").title;

  featureImg.alt = featureLinkTitle;
  featureImg.src = featureLink.href;
  featureImg.classList.remove("hidden");

  // call on evt object to stop deafult browser actions !
  evt.preventDefault();
}

//On mouse over
function featurePHandlerOn(evt) {
  featureP.innerHTML = featureImg.alt;
}
//on mouse out}
function featurePHandlerOut(evt) {
  featureP.innerHTML = "";
}

// add event listeners
featureImg.addEventListener("mouseover", featurePHandlerOn);
featureImg.addEventListener("mouseout", featurePHandlerOut);
featureLink.addEventListener("click", featureLinkHandler);
