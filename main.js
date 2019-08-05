// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const todos = [
  `Be able to mark todos "done".`,
  `Allow user interaction through the DOM`,
  `Add dates to todos.`,
];

// Add an event listener to the ADD button to run a function that we'll write shortly that adds todos.
const addButton = document.querySelector('.add-todo');
addButton.onclick = addToList;

// Now write the function that the event listener will run. It will take what's in the user input and add it to the todo list array.
function addToList() {
  // Place in a variable the node element for the add todo input box.
  const inputBox = document.querySelector('.todo-input');

  // Place in a variable the text that the user typed into that input box. You can "dot off" the variable above to find a property that's on that element. If you're not sure if you have it, try console logging what you've got!
  const userInput = inputBox.value;

  // Now put that variable in your todo list. You have a function for that!
  addTodo(userInput);
  
  // For now, call your function that prints the whole list to see if it was added.
  printList();
}


// Add an event listener to the REMOVE button to run a function that we'll write shortly that removes todos.
const removeButton = document.querySelector('.remove-todo');
removeButton.onclick = removeFromList;


// Now write the function that the event listener will run. It will take what's in the user input and remove it from the todo list array.
function removeFromList() {
  // Place in a variable the node element for the remove todo input box.
  const inputBox = document.querySelector('index-input');

  // Place in a variable the text that the user typed into that input box.
  const userInput = inputBox.value;

  // Remove the todo at that index from the array. We have a function for that!
  removeTodo(userInput);
  
  // For now, call your function that prints the whole list to see if it was added.
  printList();
}

// Write a function that adds an li


// A function that prints a todo.
// For now, just console log it!
function printTodo(todo) {
  console.log(todo);
}

// A function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
function printList() {
  let i = 0;
  while (i < todos.length) {
    printTodo(todos[i]);
    i = i + 1;
  }
}

// A function that adds an item to our todo list.
// Where on the list should we add it?
function addTodo(todo) {
  todos.push(todo);
}

// A function that removes an item at a given index from our todo list.
function removeTodo(i) {
  todos.splice(i, 1);
}