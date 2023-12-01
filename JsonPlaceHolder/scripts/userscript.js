"use strict";

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
    const displayUsers = document.getElementById('displayUsers');

    const table = document.createElement('table');

    const tableHeader = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];

    // Create table header
    const headerRow = document.createElement('tr');
    
    // loop through tableHeader for headers. 
    tableHeader.forEach(headerText => {
        const tableHeaders = document.createElement('th');
        tableHeaders.textContent = headerText;
        headerRow.appendChild(tableHeaders); // Fix the variable name here (change from tableTop to tableHeaders)
    });
    table.appendChild(headerRow);

    // Create table body
    users.forEach(user => {
        const row = document.createElement('tr');
        const tableValues = [user.id, user.name, user.username, user.email, user.phone, user.website];

        // loop through tableValues & add all the values 
        tableValues.forEach(value => {
            const tableData = document.createElement('td');
            tableData.textContent = value;
            row.appendChild(tableData);
        });

        table.appendChild(row);
    });

    displayUsers.appendChild(table);
}
