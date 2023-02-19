const addItemButton = document.querySelector(".add-task");
const ulContainer = document.querySelector(".list-group");
const removeButton = document.querySelector(".remove-task");


addItemButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);


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
        const tasks = localStorage.setItem("task", JSON.stringify(taskInput))
        tasks.localStorage.getItem("name")
    };

    if (localStorage === null){
        return;
    }else{
        tasks.localStorage.getItem("name")
    }
    
};

function removeItem(){
    let ul = document.querySelector(".list-group")
    ul.removeChild(ul.firstElementChild);
};

localStorage("name", 1)
localStorage.getItem("name");