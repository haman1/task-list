//Define ui variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load  event listners

loadEventListeners();

//function to load all
function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
    
}

