"use strict"

window.onload = () => {
    let addButton = document.getElementById('addButton'); 
    let displayTodo = document.getElementById('displayTodo')

    addButton.onclick = addTodoApi; 
}

function addTodoApi(e){
    e.preventDefault(); 

    const userId = document.getElementById('userId').value;
    const title = document.getElementById('userId').value
    const completed = document.getElementById('userId')


    fetch('`https://jsonplaceholder.typicode.com/todos/', {
        method: "POST",
        body: bodyData, 
        headers: {"Content-type":   
            "application/json; charset=UTF-8"}
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
    })
    .catch(err => {
        console.error(`this is not posting`)
    });
}