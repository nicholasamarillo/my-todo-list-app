const addItemButton = document.querySelector(".add-task");
const ulContainer = document.querySelector(".list-group");
const removeButton = document.querySelector(".remove-task");

addItemButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);

let todoItems = [];

function addItem(){
    const taskInput = prompt("What task are you adding?");
    if (taskInput === "" || taskInput === null){
        alert("You must enter a task");
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput));
        li.setAttribute("class", "list-group-item");
        ulContainer.appendChild(li);
        todoItems.push(taskInput);
        console.log(todoItems);
        localStorage.setItem("tasks", JSON.stringify(todoItems));
    }
};

function removeItem(){
    ulContainer.removeChild(ulContainer.firstElementChild);
    todoItems.shift();
    console.log(todoItems);
    localStorage.setItem("tasks", JSON.stringify(todoItems));
};

function getStorage(){
    const storedItems = JSON.parse(localStorage.getItem("tasks"));
    if (storedItems) {
        storedItems.forEach(item => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(item));
            li.setAttribute("class", "list-group-item");
            ulContainer.appendChild(li);
        })
        todoItems = storedItems;
    }
}

document.addEventListener("DOMContentLoaded", getStorage);