"use strict";

const newTask = document.getElementById("TaskEntry");
const addButton = document.getElementById("subButton");
const myTable = document.getElementById("taskTable");

function addTask() {
    const taskText = newTask.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newRow = myTable.insertRow();
    const taskCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);

    taskCell.textContent = taskText;
    statusCell.textContent = "Pending";
    statusCell.style.cursor = "pointer";
    statusCell.style.color = "orange";

    statusCell.addEventListener("click", toggleStatus);

    newTask.value = "";
}

function toggleStatus(event) {
    const cell = event.target;
    if (cell.textContent === "Pending") {
        cell.textContent = "Done";
        cell.style.color = "green";
    } else {
        cell.textContent = "Pending";
        cell.style.color = "orange";
    }
}

addButton.addEventListener("click", addTask);
console.log("JS Loaded");
