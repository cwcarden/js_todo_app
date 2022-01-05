const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listener
todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault(); //prevents form from submitting.
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create list
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btm");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-check"></i>';
    trashButton.classList.add("complete-btm");
    todoDiv.appendChild(trashButton);
    //apend to list
    todoList.appendChild(todoDiv);
}
