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

    //remove task evnt
    taskList.addEventListener('click', removeTask);


    
}


//Add Task 
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add Task');
    }

    //create li elements

    const li = document.createElement('li');
    //add class
    li.className= 'collection-item';
    //create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // link element
    const link = document.createElement('a');

    //add class
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';

    //append li to ul
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //clear input 
    taskInput.value = '';



    e.preventDefault();
}

/// remove task

function removeTask(e) {

    if(e.target.parentElement.classsList.contains
        ('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
   
}