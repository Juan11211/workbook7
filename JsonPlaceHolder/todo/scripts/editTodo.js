"use strict"

let updatedForm = document.getElementById('updatedForm');

window.onload = () => {
    let submitSearch = document.getElementById('submitSearch');

    submitSearch.onclick = fetchTodoApi; 

    hideUpdatedForm();
}

function hideUpdatedForm(){
    updatedForm.style.display = "none"
}

function showUpdatedForm(){
    updatedForm.style.display = "block"
}

function fetchTodoApi(e){
    e.preventDefault();

    let todoId = Number(document.getElementById('todoId').value);

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: "GET",
    })

    .then(res => res.json())
    .then(todo => {
        console.log(todo);
        showUpdatedForm(todo); 
        disabledForm();
    })    
    .catch(err => {
        console.error(`this is not posting`, err)
    });
}

function disabledForm() {
    let todoId = document.getElementById('todoId');
    let userId = document.getElementById('userId');

    if (todoId) {
        todoId.disabled = true;
    }

    if (userId) {
        userId.disabled = true;
    }
}

function fetchPutApi(todo){

    let title = document.getElementById('title').value;
    let completed = document.getElementById('completed').value;

    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.todoId}`, {
        method: "PUT",

    })

    .then(res => res.json())
    .then(todo => {
        console.log(todo);
        showUpdatedForm(todo); 
        disabledForm();
    })    
    .catch(err => {
        console.error(`this is not posting`, err)
    });                                                                                                                  
}
