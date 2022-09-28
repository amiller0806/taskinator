var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);

// Now the script.js file finds the <form> element in the page 
// and saves it to the variable formEl, so that we can interact with the 
// form and access some of its child HTML elements.
// This particular listener listens for the following two events within the form:

// When a user clicks a <button> element with a type attribute 
// that has a value of "submit", like the button we currently have 
// in the form