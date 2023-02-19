const addItemButton = document.querySelector(".add-task");
const ulContainer = document.querySelector(".list-group");
const removeButton = document.querySelector(".remove-task");


addItemButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);


function addItem(){
    const taskInput = prompt("What task are you adding?");
    const ul = ulContainer;
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput));
    li.setAttribute("class", "list-group-item");
    ul.appendChild(li);
};

function removeItem(){
    let ul = document.querySelector(".list-group")
    ul.removeChild(ul.firstElementChild);
};