// Get DOM elements for adding tasks
// button, user input, and todo list container
let button = document.getElementById('submit');
let inputField = document.getElementById('task');
let todoList = document.getElementById('todo-list');



// Event listener on submit button
button.addEventListener('click', function() {
    // removing whitespace
    const task = inputField.value.trim();

    // HTML has required but check anyway
    if (task !== '') {
        // creates new task/list item + assigns user input
        const newTask = document.createElement('li');
        newTask.textContent = task;

        // creates edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.id = 'edit-button';

        // newTask.appendChild(editButton);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'COMPLETE';
        completeButton.id = 'completed-button';

        // newTask.appendChild(completeButton);

        // create a div to space buttons from task
        const buttonSection = document.createElement('div');
        buttonSection.appendChild(editButton);
        buttonSection.appendChild(completeButton);

        newTask.appendChild(buttonSection);

        todoList.appendChild(newTask);

        inputField.value = '';

    } else {
        alert('Enter a valid task!');
    }  
});

