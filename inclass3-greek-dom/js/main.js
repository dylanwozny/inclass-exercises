// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

// grab elements
let mainForm = document.querySelector(".feature.frm");

// add event listener for submit and tell it what to do
// prevent form from being sent to database
mainForm.addEventListener("submit", function (event) {
  // grabbing html element from form
  let frm = event.target;
  let tag = frm.elements.tags;
  let error = document.querySelector("p.feature.error");

  // remove hidden class, and reset error message on submit
  error.classList.remove("hidden");
  error.innerHTML = "";

  // validation for no empty fields
  // MAKE ELSE IF INSTEAD, FALT BETTER THAN NESTED

  if (tag.value.trim() === "") {
      error.innerHTML = "No empty tags please";
      console.log("1");
  }

  else if(/\s/.test(tag.value)){
    error.innerHTML = "No spaces in tag names please";
    console.log("2");
  }

  else{
    document.querySelector("p.feature.tags").innerHTML +=
    "#" + tag.value + "<br/>";
    console.log("3");
  }

  tag.value = "";

  // debug and prevent from sending to DB
  console.log("button pressed..");
  event.preventDefault();
});
