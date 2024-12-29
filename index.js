const inputBox = document.getElementById("input-box");
const tasksList = document.getElementById("tasks");

function addTask() {
    if (inputBox.value === '') {
        alert("Please write something");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.innerHTML = inputBox.value;
        span.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
        li.appendChild(span);
        tasksList.appendChild(li);
    }
    inputBox.value = "";
}

tasksList.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
    }
});

function removeAll() {
    const tasksList = document.getElementById('tasks');
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }
}

