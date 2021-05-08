const deleteBtn = document.querySelector(".remove-btn");
const conHead = document.querySelector(".con-head");
const container = document.querySelector(".container");

function delContainer() {
  conHead.removeChild(container);
}

deleteBtn.addEventListener("click", () => {
  delContainer();
});

/*Define your texts in an array*/
const placeholders = ["Seoul", "New York", "Amsterdam", "London"];
const length = placeholders.length;
let counter = 0;
/*Store the object to a variable*/
const inquire = document.getElementById("inquire");

function ChangePlaceholder() {
  /*Compare with placeholders length*/
  if (counter >= length) {
    counter = 0;
  }
  /*Update placeholder text*/
  inquire.setAttribute("placeholder", "Try: " + placeholders[counter]);
  /*Update counter as Index*/
  counter++;
}
/*Call ChangePlaceholder() function after 1 seconds, [1000 millisecond = 1 second]*/
setInterval(ChangePlaceholder, 1500);

