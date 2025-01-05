// Get DOM elements for adding tasks
// button, user input, and todo list container
let button = document.getElementById('submit');
let inputField = document.getElementById('task');
let todoList = document.getElementById('todo-list');

// Event listener on submit button
button.addEventListener('click', function() {
    const task = inputField.value.trim();

    // HTML has required but check anyway
    if (task !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = task;
        todoList.appendChild(newTask);
        

        console.log(newTask);
        console.log(todoList);

        inputField.value = '';

    } else {
        alert('Enter a valid task!');
    }  
});