const button = document.querySelector("#todoSubmit");
const todoInput = document.querySelector("#todoInput");

button.onclick = callRestApi; 

function callRestApi(){
    const userInput = todoInput.value; 
    fetch(`https://jsonplaceholder.typicode.com/todos/${userInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("displayTodo").innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

const displayUsers = document.querySelector('#displayUsers');

window.onload = callUserApi();

function callUserApi(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => displayUsersTable(users))
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsersTable(users){
    users.forEach(user => {
        const tableRow = document.createElement('tr');
        const tableValues = [user.id, user.name, user.username, user.email, user.phone, user.website]
    })
        tableValues.forEach()
}

