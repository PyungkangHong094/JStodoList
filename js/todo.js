const toDoform = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li_todo = document.createElement("li");
    const span_todo = document.createElement("span");
    li_todo.appendChild(span_todo);
    span_todo.innerText = newTodo;
    toDoList.appendChild(li_todo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoform.addEventListener("submit", handleToDoSubmit);