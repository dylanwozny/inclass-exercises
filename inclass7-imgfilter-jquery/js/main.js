// link you JQuery in your html and try out a solution!
// INSTALL NPM lint!!!!
// Enter your JavaScript for the solution here...

const tagSearch = $(".frm-control");
const searchReset = $(".frm-group > a");

let boolResult = 1;

// ----------grab the image div and convert to array-------------//
const imageContainer = $(".thumb-display");
const imagesContainerArray = Array.from(imageContainer);

// -------event on search input--------//
tagSearch.on("input", (e) => {
  // set bool result to hide reset button
  boolResult = 0;
  e.preventDefault();

  // return search value
  const searchValue = (tagSearch.textContent = e.target.value);

  // go through each container in images and gram the p value
  imagesContainerArray.forEach((Element) => {
    const insideTag = Element.querySelector("p").innerHTML;

    // do this if inside tag values match the search
    if (!insideTag.includes(searchValue)) {
      $(Element).addClass("hidden");
      boolResult = 1;
    }
  });

  // show rest button if no matches
  if (boolResult === 1) {
    searchReset.removeClass("hidden");
  }
});

// --------event listen on button-------------------//
searchReset.on("click", (e) => {
  // go through array and remove all hidden tags
  e.preventDefault();
  imagesContainerArray.forEach((Element) => {
    $(Element).removeClass("hidden");
  });
  searchReset.addClass("hidden");
  tagSearch.value = "";
});
