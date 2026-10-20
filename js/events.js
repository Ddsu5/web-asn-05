// Task 5: use the requested mouseover and mouseout events.
const hoverBox = document.getElementById("hover-box");
const originalColor = getComputedStyle(hoverBox).backgroundColor;
hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "#f7dfb3";
});
hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = originalColor;
});

// Task 6: show the input value each time a key is released.
const liveInput = document.getElementById("live-input");
const liveOutput = document.getElementById("live-output");
function updatePreview() {
  liveOutput.textContent = liveInput.value || "Your text will appear here.";
}
liveInput.addEventListener("keyup", updatePreview);
// Also support paste, touch keyboards and other input methods.
liveInput.addEventListener("input", updatePreview);

// Task 7: input values are strings, so convert them to numbers first.
document.getElementById("calculator").addEventListener("submit", function (event) {
  event.preventDefault();
  const firstInput = document.getElementById("first-number");
  const secondInput = document.getElementById("second-number");
  const operation = document.getElementById("operation").value;
  const output = document.getElementById("calculator-result");

  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    output.textContent = "Please enter both numbers.";
    return;
  }
  const a = Number(firstInput.value);
  const b = Number(secondInput.value);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    output.textContent = "Please enter valid finite numbers.";
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        output.textContent = "Cannot divide by zero.";
        return;
      }
      result = a / b;
      break;
    default:
      output.textContent = "Please select a valid operation.";
      return;
  }
  if (!Number.isFinite(result)) {
    output.textContent = "The result is too large. Try smaller numbers.";
    return;
  }
  output.textContent = a + " " + operation + " " + b + " = " + result;
});
