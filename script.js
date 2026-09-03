const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');

// const deleteButtonDOM = document.querySelector('')




addTaskButton.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { addTask() }
})
function addTask() {
    if (input.value == "") {}
    else {
        const taskButtons = document.createElement('div');
        const doneButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const p = document.createElement('p');

        taskButtons.classList.add('taskButtons');

        p.textContent = input.value;
        p.classList.add('tasks');
        doneButton.classList.add('doneButton')
        doneButton.textContent = "✔";
        doneButton.classList.add('taskButtons')
        taskButtons.appendChild(doneButton);


        deleteButton.classList.add('tasks');
        deleteButton.classList.add('deleteButton')
        deleteButton.textContent = "X";

        deleteButton.addEventListener("click", (e) => {
            tasksContainer.removeChild(e.target.parentElement.parentElement)
        });

        deleteButton.classList.add('taskButtons');
        taskButtons.appendChild(deleteButton);

        p.appendChild(taskButtons);
        tasksContainer.appendChild(p);
        input.value = "";
    }

}

// function deleteTask(){
//     tasksContainer.removeChild('p');
// }