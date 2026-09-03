const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');
const themeButton = document.querySelector('#themeButton');


// TASK DATA

let tasks = [];


// LOCAL STORAGE

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}


// ADD TASK

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

    const task = {
        id: Date.now(),
        text: input.value.trim(),
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    input.value = "";
    input.focus();
}


// RENDER TASKS

function renderTasks() {

    // Clear current tasks
    tasksContainer.innerHTML = "";

    // Create every task from the tasks array
    tasks.forEach(task => {

        // Main task container
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // Task text
        const p = document.createElement('p');
        p.textContent = task.text;
        p.classList.add('taskText');

        // Buttons container
        const taskButtons = document.createElement('div');
        taskButtons.classList.add('taskButtons');


    
        // DONE BUTTON
    

        const doneButton = document.createElement('button');

        doneButton.classList.add('doneButton');
        doneButton.textContent = "✔";

        doneButton.addEventListener("click", () => {

            task.completed = !task.completed;

            saveTasks();
            renderTasks();
        });


    
        // EDIT BUTTON
    

        const editButton = document.createElement('button');

        editButton.classList.add('editButton');
        editButton.textContent = "✎";

        editButton.addEventListener("click", () => {

            const newTask = prompt("Edit task:", task.text);

            if (newTask !== null && newTask.trim() !== "") {

                task.text = newTask.trim();

                saveTasks();
                renderTasks();
            }
        });


    
        // DELETE BUTTON
    

        const deleteButton = document.createElement('button');

        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = "×";

        deleteButton.addEventListener("click", () => {

            tasks = tasks.filter(t => t.id !== task.id);

            saveTasks();
            renderTasks();
        });


    
        // COMPLETED STYLING
    

        if (task.completed) {
            p.classList.add('completed');
            taskElement.classList.add('completedTask');
        }


    
        // BUILD TASK
    

        taskButtons.appendChild(doneButton);
        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);

        taskElement.appendChild(p);
        taskElement.appendChild(taskButtons);

        tasksContainer.appendChild(taskElement);
    });
}


// THEME SWITCH

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("glassTheme");

    if (document.body.classList.contains("glassTheme")) {
        themeButton.textContent = "◈ CYBER MODE";
    } else {
        themeButton.textContent = "◈ GLASS MODE";
    }
});


// LOAD SAVED TASKS

loadTasks();
renderTasks();