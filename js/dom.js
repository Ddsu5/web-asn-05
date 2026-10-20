// Task 2: change the paragraph's text when the button is clicked.
const message = document.getElementById("message");
document.getElementById("change-text").addEventListener("click", function () {
  message.textContent = "JavaScript changed this paragraph using the DOM!";
});

// Task 3: update the div's background and font size independently.
const styleBox = document.getElementById("style-box");
let alternateColor = false;
let largeFont = false;
document.getElementById("change-color").addEventListener("click", function () {
  alternateColor = !alternateColor;
  styleBox.style.backgroundColor = alternateColor ? "#f7dfb3" : "#e7eee0";
});
document.getElementById("change-size").addEventListener("click", function () {
  largeFont = !largeFont;
  styleBox.style.fontSize = largeFont ? "24px" : "16px";
});

// Task 4: create an li and remove the last li, if one exists.
const itemList = document.getElementById("item-list");
const listStatus = document.getElementById("list-status");
let nextItem = 3;
document.getElementById("add-item").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Study item " + nextItem;
  nextItem++;
  itemList.appendChild(item);
  listStatus.textContent = itemList.children.length + " items in the list.";
});
document.getElementById("remove-item").addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
    listStatus.textContent = itemList.children.length + " items in the list.";
  } else {
    listStatus.textContent = "The list is already empty.";
  }
});
