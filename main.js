// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const todos = [
  `Be able to mark todos "done".`,
  `Allow user interaction through the DOM`,
  `Add dates to todos.`,
];

// Rewrite your print todo function to put the todo on the dom instead of in the console.
function printTodo(todo) {
  // Use `document.createElement` to make an li
  const li = document.createElement('li');

  // Put that todo string that you took in as a parameter as text inside the li tag. Don't use innerHTML!
  li.innerText = todo;

  // Put the ul that's already in our html file in a variable.
  const ul = document.querySelector('.todo-list');

  // Append the li we made to the ul as the last child.
  ul.appendChild(li);
}


// Add an event listener to the ADD button to run a function that we'll write shortly that adds todos.
const addButton = document.querySelector('.add-todo');
addButton.onclick = addToList;

// Now write the function that the event listener will run. It will take what's in the user input and add it to the todo list array.
function addToList() {
  // Place in a variable the node element for the add todo input box.
  const inputBox = document.querySelector('.todo-input');

  // Place in a variable the text that the user typed into that input box. You can "dot off" the variable above to find a property that's on that element. If you're not sure if you have it, try console logging what you've got!
  const userInput = inputBox.value;

  // Now put that todo string in your todo list. You have a function for that!
  addTodo(userInput);

  // Now use that print function to add the todo to the dom!

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
  
  // Here's where we'll add some code in a minute, but... not yet!

}

// Write a function that erases everything from the list.
function clearList() {
  // Grab the todo list ul and put it in a variable
  const list = document.querySelector('#todo-list');

  // Remove all children of that list.
  // My favorite way uses `.hasChildNodes()` and `.remove()` and `.firstChild`, but there are other ways if you wanna research them instead!
  while (list.hasChildNodes()) {
    list.firstChild.remove();
  }
}

// NOW. You can go back up two functions to where we left off in our remove-one-item-from-the-list function, run your erase-everything-from-the-list function, and then call your function that prints everything individually.
// That print function should be calling your print-one-item function, and if that's adding it to the list, you've got it!
// The way I named functions, this means now adding only two lines back up there:
// clearList();
// printList();



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