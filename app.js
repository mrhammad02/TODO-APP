document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const deleteAllBtn = document.getElementById("deleteAllBtn");

    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            taskList.innerHTML += `<li>${taskInput.value.trim()}</li>`;
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    });

    taskList.addEventListener("click", event => {
        const target = event.target;
        if (target.tagName === "LI") {
            const newText = prompt("Edit task:", target.textContent);
            if (newText !== null) target.textContent = newText.trim();
        } else if (target.tagName === "BUTTON") target.parentElement.remove();
    });

    deleteAllBtn.addEventListener("click", () => {
        taskList.innerHTML = "";
    });
});
