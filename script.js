// Get DOM elements for adding tasks
// button, user input, and todo list container
let button = document.getElementById('submit');
let inputField = document.getElementById('task');
let form = document.getElementById('form');
let todoList = document.getElementById('todo-list');
let start = document.getElementById('in-progress');
let completedList = document.getElementById('completed-list'); 

// Event listener for pressing enter after inputting task
form.addEventListener('submit', function(event) {
        // Prevent form to submit form
        event.preventDefault();

        const task = inputField.value.trim();

        if (task !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = task;

            const editButton = document.createElement('button');
            editButton.textContent = 'EDIT';
            editButton.id = 'edit-button';

            const completeButton = document.createElement('button');
            completeButton.textContent = 'COMPLETE';
            completeButton.id = 'completed-button';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'DELETE';
            deleteButton.id = 'delete-button';

            const startButton = document.createElement('button');
            startButton.textContent = 'START';
            startButton.id = 'start-button';

            const buttonSection = document.createElement('div');
            buttonSection.appendChild(editButton);
            buttonSection.appendChild(completeButton);
            buttonSection.appendChild(deleteButton);
            buttonSection.appendChild(startButton);

            newTask.appendChild(buttonSection);
            todoList.appendChild(newTask);

            inputField.value = '';

            completeButton.addEventListener('click', function() {
                if (newTask.style.textDecoration === 'line-through') {
                    newTask.style.textDecoration = 'none';
                    newTask.style.backgroundColor = '#3f3f3f';
                    completeButton.textContent = 'COMPLETE';
                    completedList.removeChild(newTask);
                    todoList.appendChild(newTask);
                } else {
                    newTask.style.textDecoration = 'line-through';
                    newTask.style.backgroundColor = '#D00000';
                    completeButton.textContent = 'UNDO';
                    completedList.appendChild(newTask);
                    start.removeChild(newTask);
                }
            });

            function editTask() {
                editButton.disabled = true;
                const originalText = newTask.firstChild.textContent.trim();
                const editField = document.createElement('input');
                editField.id = 'edit-input';
                editField.type = 'text';
                editField.value = originalText;

                newTask.innerHTML = "";
                newTask.appendChild(editField);

                const saveButton = document.createElement('button');
                saveButton.textContent = 'SAVE';
                saveButton.id = 'save-button';
                buttonSection.appendChild(saveButton);
                newTask.appendChild(buttonSection);

                saveButton.addEventListener('click', function() {
                    const updatedTask = editField.value.trim();

                    newTask.textContent = updatedTask;
                    buttonSection.removeChild(saveButton);
                    newTask.appendChild(buttonSection);

                    editButton.disabled = false;
                });
            }

            startButton.addEventListener('click', function() {
                if (!newTask.style.textDecoration) {
                    todoList.removeChild(newTask);
                    start.appendChild(newTask);
                    newTask.style.backgroundColor = 'yellow';
                }
            })

            editButton.addEventListener('click', editTask);

            deleteButton.addEventListener('click', function() {
                newTask.remove();
            });
        } else {
            alert('Enter a valid task!');
        }
});

// Event listener on add task button
button.addEventListener('click', function() {
    // removing whitespace off user input
    const task = inputField.value.trim();

    // HTML has required but check for empty string anyway
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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.id = 'delete-button';

        const startButton = document.createElement('button');
            startButton.textContent = 'START';
            startButton.id = 'start-button';

        // create a div to space buttons from task
        const buttonSection = document.createElement('div');
        buttonSection.appendChild(editButton);
        buttonSection.appendChild(completeButton);
        buttonSection.appendChild(deleteButton);
        buttonSection.appendChild(startButton);


        // add button div to each task/list item
        newTask.appendChild(buttonSection);

        // adds task to to-do list
        todoList.appendChild(newTask);

        // resets input field for next task entry
        inputField.value = '';

        // styling for a completed task when complete button is clicked
        completeButton.addEventListener('click', function() {
            // if - removes styling of completed task. else - add styling for completed task
            if (newTask.style.textDecoration === 'line-through') {
                newTask.style.textDecoration = 'none';
                newTask.style.backgroundColor = '#3f3f3f';
                completeButton.textContent = 'COMPLETE';
                completedList.removeChild(newTask);
                todoList.appendChild(newTask);
            } else {
                newTask.style.textDecoration = 'line-through';
                newTask.style.backgroundColor = '#D00000';
                completeButton.textContent = 'UNDO';
                completedList.appendChild(newTask);
                start.removeChild(newTask);
            }
        });



        // Edit button function
        function editTask() {
            editButton.disabled = true;
            // retrieving last input text from user
            const originalText = newTask.firstChild.textContent.trim();
            const editField = document.createElement('input');
            editField.id = 'edit-input';
            editField.type = 'text';
            editField.value = originalText;

            newTask.innerHTML = "";
            newTask.appendChild(editField);

            const saveButton = document.createElement('button');
            saveButton.textContent = 'SAVE';
            saveButton.id = 'save-button';
            buttonSection.appendChild(saveButton);
            newTask.appendChild(buttonSection);

            saveButton.addEventListener('click', function() {
                const updatedTask = editField.value.trim();

                newTask.textContent = updatedTask;
                buttonSection.removeChild(saveButton);
                newTask.appendChild(buttonSection);

                // turn edit button back 'on' after editing is done -> save button is clicked 
                editButton.disabled = false;
            });
        }

        startButton.addEventListener('click', function() {
            if (!newTask.style.textDecoration) {
                todoList.removeChild(newTask);
                start.appendChild(newTask);
                newTask.style.backgroundColor = 'yellow';
            }
        })

        editButton.addEventListener('click', editTask);


        deleteButton.addEventListener('click', function() {
            newTask.style.display = 'none';
        })


    } else {
        alert('Enter a valid task!');
    }  
});

