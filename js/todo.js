// Task 8: the array is the source of truth. Reloading clears it.
let tasks = [];
let nextId = 1;
const taskForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const statusMessage = document.getElementById("todo-status");

function renderTasks() {
  taskList.textContent = "";
  let completedCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const item = document.createElement("li");
    if (task.completed) {
      item.classList.add("completed");
      completedCount++;
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task-" + task.id;
    checkbox.checked = task.completed;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    // textContent displays user input as text, without interpreting HTML.
    label.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "secondary";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete task: " + task.text);

    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      item.classList.toggle("completed", task.completed);
      updateCount();
      statusMessage.textContent = task.completed ? "Task completed." : "Task marked as unfinished.";
    });
    deleteButton.addEventListener("click", function () {
      // splice removes the matching task from the array.
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      renderTasks();
      statusMessage.textContent = "Task deleted.";
      taskInput.focus();
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  }

  document.getElementById("empty-state").hidden = tasks.length > 0;
  document.getElementById("task-count").textContent = completedCount + " of " + tasks.length + " completed";
}

function updateCount() {
  let completedCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completedCount++;
    }
  }
  document.getElementById("task-count").textContent = completedCount + " of " + tasks.length + " completed";
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (text === "") {
    statusMessage.textContent = "Please enter a task first.";
    taskInput.focus();
    return;
  }

  tasks.push({ id: nextId, text: text, completed: false });
  nextId++;
  taskInput.value = "";
  renderTasks();
  statusMessage.textContent = "Task added.";
  taskInput.focus();
});

renderTasks();
