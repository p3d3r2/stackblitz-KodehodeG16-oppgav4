console.log('Hello!');

const todoButton = document.querySelector("#todoButton");

todoButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('Dette er en gjøremålsliste med følgende innhold:');

    const inputTask = document.querySelector("#inputTask").value;
    console.log(inputTask)

    const taskList = document.querySelector("#taskList")
    const taskItem = document.createElement("li")
    taskItem.textContent = inputTask
    taskList.appendChild(taskItem)

    
})