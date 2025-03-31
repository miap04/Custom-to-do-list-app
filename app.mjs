const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');
const editTaskButton = document.getElementById('editTaskButton');
const completedTaskCheckbox = document.getElementById('completedTaskCheckbox');

function saveCompletedTaskCheckboxState() {
    localStorage.setItem('completedTaskCheckbox', completedTaskCheckbox.checked);
}

function loadCompletedTaskCheckboxState() {
    const isChecked = localStorage.getItem('completedTaskCheckbox') === 'true';
    completedTaskCheckbox.checked = isChecked;
}

completedTaskCheckbox.addEventListener('change', saveCompletedTaskCheckboxState);

loadCompletedTaskCheckboxState();