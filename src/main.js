import "../style.css";

//refactoring
const todos = [
    {text: "Buy milk", isCompleted: false},
    {text: "Buy bread", isCompleted: true},
    {text: "Buy jam", isCompleted: false}
    // the todos become an object
];

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
        if (fulter === "all") {
            filteredTodos.push(todo);
        } else if (filter === "completed") {
            todo.isCompleted && filteredTodos.push(todos);
        } else if (filter === "active") {
            todo.isCompleted && filteredTodos.push(todos);

        }
    }
    
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

navElement.getClassList.add(
    "border",
    "border-2",
    "border-rose-500",
    "m-2"
)

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

navElement.addEventListener(
    "click",
    handleClickONNavBar
)
