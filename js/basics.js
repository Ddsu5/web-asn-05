// Task 0: this external script runs after the HTML is parsed (defer).
const studentName = "Daniyal Akylbek";
const studentGroup = "SE-2530";
console.log("Name: " + studentName);
console.log("Group: " + studentGroup);
alert("Hello, JavaScript World!");

document.getElementById("greeting").addEventListener("click", function () {
  alert("Hello, JavaScript World!");
});

// Task 1: string, number and boolean variables.
let courseName = "Frontend Development";
let assignmentNumber = 5;
let isLearning = true;
console.log("String:", courseName);
console.log("Number:", assignmentNumber);
console.log("Boolean:", isLearning);

document.getElementById("string-value").textContent = courseName;
document.getElementById("number-value").textContent = assignmentNumber;
document.getElementById("boolean-value").textContent = isLearning;

const a = 12;
const b = 4;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

document.getElementById("arithmetic").textContent =
  "12 + 4 = " + (a + b) + "\n" +
  "12 - 4 = " + (a - b) + "\n" +
  "12 × 4 = " + (a * b) + "\n" +
  "12 ÷ 4 = " + (a / b) + "\n" +
  "12 % 4 = " + (a % b);

const introduction = studentName + " from " + studentGroup + " is learning JavaScript.";
console.log(introduction);
document.getElementById("introduction").textContent = introduction;
