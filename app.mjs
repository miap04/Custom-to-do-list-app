const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById("taskList");

let task;

addTaskButton.onclick = function () {
    task = document.getElementById('taskInput').value;
    const newListItem = document.createElement("li");
    const newContent = document.createTextNode(task);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    newListItem.appendChild(newContent);
    newListItem.appendChild(checkbox);
    newListItem.appendChild(editButton);
    newListItem.appendChild(deleteButton);
    taskList.appendChild(newListItem);
    saveTask();
}


loadCompletedTaskCheckboxState();