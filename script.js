// Get DOM elements for adding tasks
// button, user input, and todo list container
let button = document.getElementById('submit');
let inputField = document.getElementById('task');
let todoList = document.getElementById('todo-list');

// Event listener on add button
button.addEventListener('click', function() {
    // removing whitespace off user input
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

        // creates complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'COMPLETE';
        completeButton.id = 'completed-button';

        // create a div to space buttons from task
        const buttonSection = document.createElement('div');
        buttonSection.appendChild(editButton);
        buttonSection.appendChild(completeButton);

        // add button div to each task/list item
        newTask.appendChild(buttonSection);

        // adds task to to-do list
        todoList.appendChild(newTask);

        // resets input field for next task
        inputField.value = '';

        completeButton.addEventListener('click', function() {
            if (newTask.style.textDecoration === 'line-through') {
                newTask.style.textDecoration = 'none';
                newTask.style.backgroundColor = '#3f3f3f';
                completeButton.textContent = 'COMPLETE';
            } else {
                newTask.style.textDecoration = 'line-through';
                newTask.style.backgroundColor = '#D00000';
                completeButton.textContent = 'UNDO';
            }
        });


        // TODO FIX
        // when edit is clicked, it shows buttons within inputfield 
        // style the input field and save button
        // after edit, buttons vanish on the task/list item
        editButton.addEventListener('click', function() {
            const originalText = newTask.textContent.replace("Edit", "").trim();
            const editField = document.createElement('input');
            editField.type = 'text';
            editField.value = originalText;

            newTask.innerHTML = "";
            newTask.appendChild(editField);

            const saveButton = document.createElement('button');
            saveButton.textContent = 'SAVE';
            buttonSection.appendChild(saveButton);
            newTask.appendChild(buttonSection);

            saveButton.addEventListener('click', function() {
                newTask.textContent = editField.value;
            })
        });
    } else {
        alert('Enter a valid task!');
    }  
});

