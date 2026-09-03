const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');
const themeButton = document.querySelector('#themeButton');

addTaskButton.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (input.value.trim() === "") {
        return;
    }

    // Main task container
    const task = document.createElement('div');
    task.classList.add('task');

    // Task text
    const p = document.createElement('p');
    p.textContent = input.value;
    p.classList.add('taskText');

    // Buttons container
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('taskButtons');

    // Done button
    const doneButton = document.createElement('button');
    doneButton.classList.add('doneButton');
    doneButton.textContent = "✔";

    doneButton.addEventListener("click", () => {
        p.classList.toggle('completed');
        task.classList.toggle('completedTask');
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = "×";

    deleteButton.addEventListener("click", () => {
        task.remove();
    });

    // Edit button
    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = "✎";

    editButton.addEventListener("click", () => {
        const newTask = prompt("Edit task:", p.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            p.textContent = newTask.trim();
        }
    });

    // Build the task
    taskButtons.appendChild(doneButton);
    taskButtons.appendChild(editButton);
    taskButtons.appendChild(deleteButton);
    
    task.appendChild(p);
    task.appendChild(taskButtons);

    tasksContainer.appendChild(task);

    // Clear input
    input.value = "";
    input.focus();
}

//Glass Theme
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("glassTheme");

    if (document.body.classList.contains("glassTheme")) {
        themeButton.textContent = "◈ CYBER MODE";
    } else {
        themeButton.textContent = "◈ GLASS MODE";
    }
});