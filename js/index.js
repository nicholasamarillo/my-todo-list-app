const addItemButton = document.querySelector(".add-task");
const ulContainer = document.querySelector(".list-group");
const removeButton = document.querySelector(".remove-task");


addItemButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);


let todoItems = new Array();
localStorage;


function addItem(){
    const taskInput = prompt("What task are you adding?");
    const ul = ulContainer;
    const li = document.createElement("li");
    if (taskInput === "" || taskInput === null){
        alert("You must enter a task");
        location.reload();
    } else{
        li.appendChild(document.createTextNode(taskInput));
        li.setAttribute("class", "list-group-item");
        ul.appendChild(li);
    }
    todoItems.push(taskInput);
    console.log(todoItems);
    localStorage.setItem( "tasks", JSON.stringify(todoItems))
    
};

function removeItem(){
    let ul = document.querySelector(".list-group")
    ul.removeChild(ul.firstElementChild);
    todoItems.shift();
    console.log(todoItems);
    localStorage.removeItem("tasks")
};

function getStorage(){
    if (localStorage.list){
        localStorage.list.split(',').forEach(item => {
            li.appendChild(document.createTextNode(taskInput));
            li.setAttribute("class", "list-group-item");
            ul.appendChild(li);
        })
    }
}
