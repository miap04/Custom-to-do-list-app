const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById("taskList");
const clearTasksButton = document.getElementById("clearTasksButton");

let task;


addTaskButton.onclick = function () {
    task = document.getElementById('taskInput').value;
    addTask(task);
    saveTask(task);
    document.getElementById('taskInput').value = "";
}

function addTask(taskText) {
    const newListItem = document.createElement("li");
    const newContent = document.createTextNode(taskText);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
    editButton.onclick = function () {
        const newTask = prompt("Edit task:", taskText);
        taskText = newTask;
        newContent.nodeValue = taskText;
    };
    deleteButton.onclick = function () {
        taskList.removeChild(newListItem);
        deleteTask(taskText);
    }
    newListItem.appendChild(newContent);
    newListItem.appendChild(checkbox);
    newListItem.appendChild(editButton);
    newListItem.appendChild(deleteButton);
    taskList.appendChild(newListItem);
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
}

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


clearTasksButton.onclick = function () {
    taskList.innerHTML = "";
    localStorage.clear();
}

loadTasks();