const taskInput = document.getElementById("input-task");
const addTask = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const todosWrapper = document.querySelector('.todos-wrapper')

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));


function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return  `
      <li class="todo-item ${task.completed ? 'checked' : ''}"><input type="checkbox" ${task.completed ? 'checked' : ''}><span class="task description">${task.description}</span>
        <button class="delete-btn">x</button>
    </li>
    `
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length>0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        })
    }
}
fillHtmlList();

const updateLocal =() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTask.addEventListener('click', () => {
    tasks.push(new Task(taskInput.value));
    updateLocal();
    fillHtmlList();
    taskInput.value = '';
})



function newTask() {
    const li = document.createElement("li");
    li.innerHTML =
        `<input type="checkbox"><span class="task">${
            document.getElementById("input-task").value
        }</span><button class="delete-btn">x</button>`;

    taskList.appendChild(li);
}

addTask.onclick = () => {
    if (taskInput.value) {
        newTask();
        taskInput.value = "";
    }
};

document.body.addEventListener("click", (e) => {
    if (e.target.className === "delete-btn") {
        e.target.parentNode.remove();
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {

        !e.target.nextSibling.style.textDecoration
            ? (e.target.nextSibling.style.textDecoration = "line-through")
            : (e.target.nextSibling.style.textDecoration = "");
    }
});