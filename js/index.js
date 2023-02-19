const addItemButton = document.querySelector(".add-task");
const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", deleteItem);
addItemButton.addEventListener("click", addItem);

function addItem(){
   console.log("added item")
};

function deleteItem(){
    console.log("deleted item");
};