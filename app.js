// Get the "Add Task" button and the task list from the HTML
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to create a new task element (li) with a checkbox and task text
function createTaskElement(task) {
  // Create a new li element and add the "task" class
  const li = document.createElement("li");
  li.classList.add("task");

  // Create a checkbox input element and add the "checkbox" class
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkbox");

  // Add the "click" event listener to the checkbox for removing the task
  checkBox.addEventListener("click", removeTask);

  // Create a span element for the task text and add the "task-text" class
  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = task;

  // Append the checkbox and task text span to the li element
  li.appendChild(checkBox);
  li.appendChild(taskSpan);

  // Return the created li element
  return li;
}

// Function to add a new task to the task list
function addTask() {
  // Get the new task input value
  const newTaskInput = document.getElementById("new-task");
  const task = newTaskInput.value;

  // Check if the input value is not empty
  if (task !== "") {
    // Create a new task element and append it to the task list
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);

    // Clear the input value
    newTaskInput.value = "";
  }
}

// Function to remove a task when the checkbox is clicked
function removeTask(event) {
  // Get the clicked checkbox and its parent li element
  const checkBoxClicked = event.target;
  const li = checkBoxClicked.parentElement;

  // Add the "delete" class to the li element to apply the fade-out effect
  li.classList.add("delete");

  // Remove the li element from the DOM after the fade-out transition ends
  li.addEventListener("transitionend", function () {
    li.remove();
  });
}

// Add the "click" event listener to the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Add the "keydown" event listener to the document to listen for the "Enter" key
document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    addTask();
  }
});
