// from the exercise.
const strong = function (value) {
  return "<strong>" + value + "</strong>";
};

// from the exercise
const updateInnerHTML = function (selector, newValue) {
  document.querySelector(selector).innerHTML = newValue;
};

// enter your code below.

//---italic function---
const italics = function (value) {
  value = "<i>" + value + "</i>";
  return value;
};

// grab html and store in var
let noteText = document.querySelector("span.note").innerHTML;

noteText = italics(noteText);

//--Calls--update html
updateInnerHTML("span.note", noteText);
