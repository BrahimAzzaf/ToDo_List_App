const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");

    }
    else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#215;";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }


}, false);


function saveData() {
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();