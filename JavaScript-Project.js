
//my employee info array 
let employeeInfo = [
    { "niNumber": "P345623B", "name": "Heather Grey", "phone": "07894 236789", "address": "12 Apple Close, London, NW3 45T", "department": "IT" },
    { "niNumber": "P012754B", "name": "Callum Dove", "phone": "07832 978351", "address": "12 Apple Close, London, NW3 45T", "department": "IT" },
    { "niNumber": "P959327B", "name": "Shanie Nicholson", "phone": "07452 087211", "address": "29 Ash Steet, London, SE34 56T", "department": "HR" },
    { "niNumber": "P405723B", "name": "Hannah Brown", "phone": "07528 436855", "address": "76 Mull Cresent, London, SW03 78R", "department": "Finance" },
    { "niNumber": "P199840B", "name": "Sarah Birch", "phone": "07318 529228", "address": "3 King Charles Road, London, SE6 45L", "department": "Sales" },
    { "niNumber": "P805321B", "name": "Theo Archer", "phone": "07836 772139", "address": "94 Herne Street, London, NW8 93R", "department": "Finance" },
    { "niNumber": "P882326B", "name": "Dan Chase", "phone": "07911 081892", "address": "104 Queen Street, London, W67 92P", "department": "HR" },
    { "niNumber": "P206663B", "name": "Maria Oakley", "phone": "07911 039023", "address": "16 Pheasant Road, Hatfield, HA67 EI9", "department": "Sales" },
    { "niNumber": "P505221B", "name": "Barry Field", "phone": "07457 414947", "address": "24 Grange Drive, Hatfield, HA4 92A", "department": "Sales" },
    { "niNumber": "P843982B", "name": "Liam Smith", "phone": "7700 079101", "address": "46 Little Goat Road, Slough, SL5 38D", "department": "Sales" }
]

// create employee id 
employeeInfo.forEach(function (employee, i) {
    return employee.id = i;
});

//displaying the array on my page
for (i = 0; i < employeeInfo.length; i++) {
    let myAllP = document.querySelector(`#placeholder`);
    let myNewP = document.createElement('p');
    let myText = document.createTextNode(`Employee Number ${employeeInfo[i].id}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
    myNewP.appendChild(myText);
    myAllP.appendChild(myNewP);
}

//deleting an employee 
let deleteButton = document.querySelector("#deleteButton");

function deleteEmployee() {
    let toDelete = window.prompt(`Enter the employee number to delete:`);
    let EmployeeDepartment = document.getElementById("Employee Department");
    let selectedoption = EmployeeDepartment.options[EmployeeDepartment.selectedIndex].text;
    employeeInfo.splice(toDelete, 1);
    employeeInfo.forEach(function (employee, i) {
        return employee.id = i;
    });
    document.querySelector(`#placeholder`).innerHTML = "";

    if (selectedoption == "All") {
        for (i = 0; i < employeeInfo.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${employeeInfo[i].id}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    } else {
        let mynewarray = employeeInfo.filter(function (employee) { return employee.department == selectedoption });
        for (i = 0; i < mynewarray.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${mynewarray[i].id}: ${mynewarray[i].name}, ${mynewarray[i].department}, ${mynewarray[i].niNumber}, ${mynewarray[i].phone}, ${mynewarray[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    }
}
deleteButton.addEventListener("click", deleteEmployee);






//filtering employees displayed by department 
function selectDepartment() {
    let EmployeeDepartment = document.getElementById("Employee Department");
    let selectedoption = EmployeeDepartment.options[EmployeeDepartment.selectedIndex].text;

    if (selectedoption !== "All") {
        let mynewarray = employeeInfo.filter(function (employee) { return employee.department == selectedoption });
        document.querySelector(`#placeholder`).innerHTML = "";
        for (i = 0; i < mynewarray.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${mynewarray[i].id}: ${mynewarray[i].name}, ${mynewarray[i].department}, ${mynewarray[i].niNumber}, ${mynewarray[i].phone}, ${mynewarray[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    } else {
        document.querySelector(`#placeholder`).innerHTML = "";
        for (i = 0; i < employeeInfo.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${employeeInfo[i].id}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    }
}

//show the "edit an employee" form 
let editButton = document.querySelector("#editButton");

function editEmployee() {
    document.querySelector(`#numberhere`).innerHTML = "";

    let editform = document.getElementById("editform");
    if (editform.style.display == "none") {
        editform.style.display = "block";
    }

    let toEdit = window.prompt(`Enter the number of the employee you would like to edit:`);

    let myAllP = document.querySelector(`#numberhere`);
    let myText = document.createTextNode(`Edit Employee ${toEdit} Details:`);
    myAllP.appendChild(myText);

    document.getElementById("id").readOnly = true;
    document.getElementById("id").value = toEdit;

}
editButton.addEventListener("click", editEmployee);

//submitting the edit 
let submitEditButton = document.querySelector("#submitEditButton");

function submitEdit() {
    let idvalue = document.getElementById("id").value;
    let EmployeeDepartment = document.getElementById("Employee Department");
    let selectedoption = EmployeeDepartment.options[EmployeeDepartment.selectedIndex].text;

    if (document.getElementById("nin").value) {
        employeeInfo[idvalue].niNumber = document.getElementById("nin").value;
    }
    if (document.getElementById("name").value) {
        employeeInfo[idvalue].name = document.getElementById("name").value;
    }
    if (document.getElementById("phone").value) {
        employeeInfo[idvalue].phone = document.getElementById("phone").value;
    }
    if (document.getElementById("address").value) {
        employeeInfo[idvalue].address = document.getElementById("address").value;
    }
    if (document.getElementById("department").value) {
        employeeInfo[idvalue].department = document.getElementById("department").value;
    }

    document.querySelector(`#placeholder`).innerHTML = "";

    if (selectedoption == "All") {
        for (i = 0; i < employeeInfo.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${employeeInfo[i].id}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    } else {
        let mynewarray = employeeInfo.filter(function (employee) { return employee.department == selectedoption });
        for (i = 0; i < mynewarray.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${mynewarray[i].id}: ${mynewarray[i].name}, ${mynewarray[i].department}, ${mynewarray[i].niNumber}, ${mynewarray[i].phone}, ${mynewarray[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    }
    editform.style.display = "none";

}

//show the "add an employee" form  
let addButton = document.querySelector("#addButton");

function addEmployee() {
    let addform = document.getElementById("addform");
    if (addform.style.display == "none") {
        addform.style.display = "block";
    }
}
addButton.addEventListener("click", addEmployee);


//submitting the new employee
function submitEmployee() {
    let EmployeeDepartment = document.getElementById("Employee Department");
    let selectedoption = EmployeeDepartment.options[EmployeeDepartment.selectedIndex].text;


    let newEmployee = {};
    newEmployee.niNumber = document.getElementById("addnin").value;
    newEmployee.name = document.getElementById("addname").value;
    newEmployee.phone = document.getElementById("addphone").value;
    newEmployee.address = document.getElementById("addaddress").value;
    newEmployee.department = document.getElementById("adddepartment").value;

    addform.style.display = "none";

    employeeInfo.push(newEmployee);
    employeeInfo.forEach(function (employee, i) {
        return employee.id = i;
    });

    document.querySelector(`#placeholder`).innerHTML = "";

    if (selectedoption == "All") {
        for (i = 0; i < employeeInfo.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${employeeInfo[i].id}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    } else {
        let mynewarray = employeeInfo.filter(function (employee) { return employee.department == selectedoption });
        for (i = 0; i < mynewarray.length; i++) {
            let myAllP = document.querySelector(`#placeholder`);
            let myNewP = document.createElement('p');
            let myText = document.createTextNode(`Employee Number ${mynewarray[i].id}: ${mynewarray[i].name}, ${mynewarray[i].department}, ${mynewarray[i].niNumber}, ${mynewarray[i].phone}, ${mynewarray[i].address}`);
            myNewP.appendChild(myText);
            myAllP.appendChild(myNewP);
        }
    }

}





