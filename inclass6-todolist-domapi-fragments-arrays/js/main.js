

/*
  Add the required JavaScript to handle form submit and add a new todo item to
  the page (in the div.todo-list element).  You will need to use a counter to
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
const todos = document.querySelector('.todo-list');
let todoCount = 0;
const dn = '\u21e9'; // Unicode value of down arrow
const up = '\u21e7'; // Unicode value of up arrow
const side = '\u2192'; // Unicode value of up arrow

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', (evt) => {
  let div;
  let checkbox;
  let label;
  let labelText;
  let todoText;

  todoText = evt.target.elements['todo-item'].value;

  // adding a todo regardless, so might as well increment now...
  todoCount += 1;

  if (todoText === '') {
    todoText = `Todo ${todoCount}`;
  }

  // create required elements
  div = document.createElement('div');
  checkbox = document.createElement('input');
  label = document.createElement('label');
  spanUp = document.createElement('span');
  spanDown = document.createElement('span');
  spanSide = document.createElement('span');

  // create text
  labelText = document.createTextNode(todoText);
  arrowUp = document.createTextNode(up);
  arrowDown = document.createTextNode(dn);
  arrowSide = document.createTextNode(side);

  // put text into newly created span element
  spanUp.appendChild(arrowUp);
  spanDown.appendChild(arrowDown);
  spanSide.appendChild(arrowSide);

  // set appropriate attributes
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `todo-${todoCount}`);
  label.setAttribute('for', `todo-${todoCount}`);
  label.setAttribute('contenteditable', '');
  spanDown.setAttribute('class', 'arrow dn');
  spanUp.setAttribute('class', 'arrow up');
  spanSide.setAttribute('class', 'arrow side');

  // build document fragment
  div.appendChild(spanSide);
  label.appendChild(labelText);
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(spanDown);
  div.appendChild(spanUp);

  // add the document fragment to the document for rendering
  todos.appendChild(div);

  // clear the form
  evt.target.reset();

  evt.preventDefault();
});
  
document.querySelector('.todo-list').addEventListener('click', (evt) => {
  // check for click on an arrow
  const targetTodo = evt.target.parentNode;
  const todoList = targetTodo.parentNode;
  let siblingTodo;
  const firstListItem = document.querySelector('.todo-list').firstChild;

  if (evt.target.classList.contains('arrow')) {
    // identify the type of arrow (i.e. down or up)
    if (evt.target.classList.contains('dn')) {
      siblingTodo = targetTodo.nextElementSibling;

      if (siblingTodo === null) {
        todoList.insertBefore(targetTodo, firstListItem);
      } else {
        // insert the sibling before the target
        todoList.insertBefore(siblingTodo, targetTodo);
      }
    } else if (evt.target.classList.contains('up')) {
      siblingTodo = targetTodo.previousElementSibling;
      // insert the sibling before the target
      todoList.insertBefore(targetTodo, siblingTodo);
    } else if (evt.target.classList.contains('side')) {
      if (window.confirm('Are you sure you want to delete this item ?')) {
        todoList.removeChild(targetTodo);
      }
    }
  }
});
