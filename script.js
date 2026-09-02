const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');
// const deleteButtonDOM = document.querySelector('')




addTaskButton.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { addTask() }
})
function addTask() {
    p = document.createElement('p');
    p.textContent = input.value;
    p.classList.add('tasks');
    deleteButton = document.createElement('button');
    deleteButton.classList.add('tasks');
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", (e) => {
        tasksContainer.remove('p');
    });
    p.appendChild(deleteButton);
    tasksContainer.appendChild(p);
    input.value = "";
}

// function deleteTask(){
//     tasksContainer.removeChild('p');
// }