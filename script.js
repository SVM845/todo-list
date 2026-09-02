const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');

addTaskButton.addEventListener("click", ((e) => {
    p = document.createElement('p');
    p.textContent = input.value;
    p.classList.add('tasks');
    tasksContainer.appendChild(p);
    input.value = ""
    
}))