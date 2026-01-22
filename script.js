console.log('Hello!');

/*
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

*/

const inputTask = document.querySelector("#inputTask");
const taskList = document.querySelector("#taskList");
const todoButton = document.querySelector("#todoButton");

todoButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    if (!inputTask.value == "") {
        const inputTaskValue = inputTask.value;
        
    const todoItem = document.createElement("li");
    todoItem.textContent = inputTaskValue;
    taskList.appendChild(todoItem)

    const finishButton = document.createElement("Button")
    finishButton.textContent = "Ferdig"
    finishButton.addEventListener("click", function () {
        todoItem.style.textDecoration = "line-through"

    })

    todoItem.appendChild(finishButton)

    const deleteButton = document.createElement("Button")
    deleteButton.textContent = "Slett"
    deleteButton.addEventListener("click", function () {
        todoItem.remove()

    })

    todoItem.appendChild(deleteButton)

    inputTask.value = "";
    } else {
        console.log("noe gikk galt")
    }


    
});

