const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');

// const deleteButtonDOM = document.querySelector('')




addTaskButton.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { addTask() }
})
function addTask() {
    if (input.value == "") { }
    else {
        const taskButtons = document.createElement('div');
        taskButtons.classList.add('taskButtons');

        const p = document.createElement('p');
        p.textContent = input.value;
        p.classList.add('tasks');

        const doneButton = document.createElement('button');
        doneButton.classList.add('doneButton')
        doneButton.textContent = "✔";
        doneButton.classList.add('taskButtons')
        taskButtons.appendChild(doneButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('tasks');
        deleteButton.classList.add('deleteButton')
        deleteButton.textContent = "X";

        deleteButton.addEventListener("click", (e) => {
            tasksContainer.removeChild(e.target.parentElement.parentElement)
        });
        doneButton.addEventListener("click", () => {
            p.classList.toggle('completed');
        })

        deleteButton.classList.add('taskButtons');
        taskButtons.appendChild(deleteButton);

        const task = document.createElement('div');
        task.classList.add('tasks');

        task.appendChild(p);
        task.appendChild(taskButtons);

        tasksContainer.appendChild(task);
        input.value = "";



    }

}

// function deleteTask(){
//     tasksContainer.removeChild('p');
// }