import "../style.css";

//refactoring
const todos = [
    {id: 1, text: "Buy milk", isCompleted: false},
    {id: 2,text: "Buy bread", isCompleted: false},
    {id: 3,text: "Buy jam", isCompleted: false}
    // the todos become an object

];
let nextTodoId = 4;
let filter = "all";
 //functions (classes) that operate on data
function renderTodos() {
    const todoListSection = 
    document.getElementById(
        "todo-list"
    );
    
    todoListSection.innerHTML = "";

    const filteredTodos = [];
    for (let i = 0;
        i < todos.length;
        i++
    ) {
        const todo = todos[i];
        if (filter === "all") {
            filteredTodos.push(todo);
        } else if (filter === "completed") {
            todo.isCompleted && filteredTodos.push(todos);
        } else if (filter === "active") {
            todo.isCompleted && filteredTodos.push(todos);

        }
    }
    
    function doSomething(todo) {
        console.log(todo)
    }

    filteredTodos.forEach(doSomething)

    for (let i = 0;
        i < todos.length;
        i++
    ) {
        const todo = todos[i];
    
        const todoItemDiv =
            document.createElement("div");
        //todoItemDiv.textContent = todo;
        todoItemDiv.classList.add("p-4", "todo-item")
    
        const todoTextDiv =
            document.createElement("div");
        todoTextDiv.classList.add("todo-text")
        todo.isCompleted &&  todoTextDiv.classList.add("line-through")
        todoTextDiv.textContent = todo.text;
        todoTextDiv.setAttribute("tot-id", todo.id);


    
        const todoEditInput =
        document.createElement("input");
        todoEditInput.classList.add("hidden", "todo-edit");
        todoEditInput.setAttribute("value", todo.text);

    
        todoItemDiv.appendChild(todoTextDiv);
        todoItemDiv.appendChild(todoEditInput);
        todoListSection.appendChild(todoItemDiv);
        
    }

    //renderTodos();

    document.addEventListener(
        "DOMContentLoaded", 
        renderTodos);
}

const navElement =
document.getElementById("todo-nav");

//deleted border attributes

function handleClickOnNavBar(event) {
    const target = event.target;
    // const { target } = event
    if (terget.tagName === "A") {
        console.log(event)
        const action = target.href.split("/").pop;
        //pops out the last element
        const filter = action === "" ? "all" : action;
        renderTodos();
    }
}

function getFilterFromAnchor(anchor) {
    const action = anchor.href.split("/").pop();
    const filter = action === "" ? "all" : action;
    return filter;
}
function renderTodoNavBar() {
    const anchors = navElement.children;

    for (let i =0; i<anchors.length; i++) {
        const anchor = anchors[i];
        anchor.classList.add (
            "underline",
            "underline-offset-4",
            "decoration-rose-800",
            "decoration-2"
        )
    }
}

navElement.addEventListener(
    "click",
    handleClickONNavBar
)
const todoList = document.getElementById("todo-list");

function handleClickOnTodoList(event) {
    const target = event.target;
    const todoId = target.getSttribute("todo-id")
    for (let i = 0;
        i < todos.length;
        i++
    ) {
        const todo = todos[i];
        if (Number(todoId) === todo.id) {
            todo.isCompleted = !todo.isCompleted;
        }
    }
    renderTodos();
}
// one is a string and one is a number
todoList.addEventListener("click",handleClickOnTodoList);
