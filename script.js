let employees = [];
let employeeId = 1;

function addEmployee() {
    const nameInput = document.getElementById('name').value.trim();
    const professionInput = document.getElementById('profession').value.trim();
    const ageInput = document.getElementById('age').value.trim();
    const messageDiv = document.getElementById('message');
    
    if (!nameInput || !professionInput || !ageInput) {
        messageDiv.innerHTML = '<p class="error">All fields are required.</p>';
        return;
    }
    
    const newEmployee = {
        id: employeeId++,
        name: nameInput,
        profession: professionInput,
        age: parseInt(ageInput, 10)
    };
    
    employees.push(newEmployee);
    displayEmployees();
    
    document.getElementById('employeeForm').reset();
    messageDiv.innerHTML = '<p class="success">Employee added successfully!</p>';
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.innerHTML = `${employee.name} - ${employee.profession} - ${employee.age} 
                         <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>`;
        employeeList.appendChild(li);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
