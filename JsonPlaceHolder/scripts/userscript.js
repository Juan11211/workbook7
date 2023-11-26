const displayUsers = document.querySelector('#displayUsers');

window.onload = function() {
    callUserApi();
};

function callUserApi() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => displayUsersTable(users))
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsersTable(users) {
    users.forEach(user => {
        const tableRow = document.createElement('tr');
        const tableValues = [user.id, user.name, user.username, user.email, user.phone, user.website]

        tableValues.forEach(value => {
            const tableCell = document.createElement('td');
            tableCell.textContent = value;
            tableRow.appendChild(tableCell);
        });
        displayUsers.appendChild(tableRow);
    });
}

