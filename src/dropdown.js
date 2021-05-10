const langBtn = document.querySelector(".language");
const languageList = document.querySelector(".dropdownlist");
// const language = ['English', 'Korean', 'Deutsch', 'Espanol', 'Francais'];

function makeList() {
  // Establish the array which acts as a data source for the list
  let listData = ["English", "Korean", "Deutsch", "Espanol", "Francais"];
  let listElement = document.createElement("ul");
  listElement.setAttribute("class", "language-dropdown");
  // Set up a loop that goes through the items in listItems one at a time
  let numberOfListItems = listData.length;
  // Add it to the page
  languageList.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    listItem = document.createElement("li");
    underLine = document.createElement("hr");
    // Add the item text
    listItem.innerHTML = listData[i];

    // Add listItem to the listElement
    let langList = listElement.appendChild(listItem);
    langList.appendChild(underLine);
  }
}


// Usage
langBtn.addEventListener("click", makeList);
window.addEventListener("click", function(e) {
languageList.removeChild(listElement);
})