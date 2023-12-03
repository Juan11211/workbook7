"use strict"

window.onload = () => {
    let addButton = document.getElementById('addButton'); 
    let displayTodoPost = document.getElementById('displayTodo')

    addButton.onclick = postTodoApi; 
}

function postTodoApi(e){
    e.preventDefault(); 

    const userId = document.getElementById('userIdInput').value;
    const title = document.getElementById('titleInput').value;
    const completed = document.getElementById('completed').value;
    
    const bodyData = JSON.stringify({
        userId: userId,
        title: title,
        completed: completed
    })


    fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: "POST",
        body: bodyData, 
        headers: {"Content-type":   
            "application/json"}
    })
    .then(res => res.json())
    .then(todo => {
        console.log(todo);
        displayPost(todo);
    })    
    .catch(err => {
        console.error(`this is not posting`, err)
    });
}


function displayPost(todo) {
    let displayTodoPost = document.getElementById('displayTodo');

    displayTodoPost.innerHTML += `
        <div class="container">
            <h3>Title: ${todo.title}</h3>
            <p>Completed: ${todo.completed}</p>
        </div>
    `;
}