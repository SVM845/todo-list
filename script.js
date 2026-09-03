const addTaskButton = document.querySelector('#newTask button');
const input = document.querySelector('#newTask input');
const tasksContainer = document.querySelector('.tasksContainer');
const themeButton = document.querySelector('#themeButton');
const taskCounter = document.querySelector('#taskCounter');


// TASK DATA
let tasks = [];


//  SOUNDS
const markSound = new Audio("./sounds/done.mp3");
const deleteSound = new Audio("./sounds/delete.wav");
const switchSound = new Audio("./sounds/switch.mp3");
const addSound = new Audio("./sounds/add.mp3");




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


// TASK COUNTER
function updateTaskCounter() {
    taskCounter.textContent = `TASKS: ${tasks.length}`;
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
    addSound.currentTime = 0;
    addSound.play();
}


// RENDER TASKS
function renderTasks() {

    // Clear existing tasks
    tasksContainer.innerHTML = "";

    tasks.forEach(task => {
        // MAIN TASK
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        // TASK TEXT
        const p = document.createElement('p');
        p.textContent = task.text;
        p.classList.add('taskText');

        // BUTTON CONTAINER
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
            deleteSound.currentTime = 0;
            deleteSound.play();
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });



        // COMPLETED STYLE
        if (task.completed) {
            markSound.currentTime = 0;
            markSound.play();
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

    // Update counter
    updateTaskCounter();
}


// THEME SWITCH
themeButton.addEventListener("click", () => {
    switchSound.currentTime = 0;
    switchSound.play();
    document.body.classList.toggle("glassTheme");
    if (document.body.classList.contains("glassTheme")) {
        themeButton.textContent = "◈ CYBER MODE";
    } else {
        themeButton.textContent = "◈ GLASS MODE";
    }
});


// INITIAL LOAD
loadTasks();
renderTasks();