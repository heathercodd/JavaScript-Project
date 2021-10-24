

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


for (i = 0; i < employeeInfo.length; i++) {
    let myAllP = document.querySelector(`#placeholder`);
    let myNewP = document.createElement('p');
    let myText = document.createTextNode(`Employee Number ${i}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
    myNewP.appendChild(myText);
    myAllP.appendChild(myNewP);
}


let deleteButton = document.querySelector("#deleteButton");

function deleteEmployee() {

    let toDelete = window.prompt(`Enter the employee number to delete:`);
    employeeInfo.splice(toDelete, 1);

    document.querySelector(`#placeholder`).innerHTML = "";

    for (i = 0; i < employeeInfo.length; i++) {
        let myAllP = document.querySelector(`#placeholder`);
        let myNewP = document.createElement('p');
        let myText = document.createTextNode(`Employee Number ${i}: ${employeeInfo[i].name}, ${employeeInfo[i].department}, ${employeeInfo[i].niNumber}, ${employeeInfo[i].phone}, ${employeeInfo[i].address}`);
        myNewP.appendChild(myText);
        myAllP.appendChild(myNewP);
    }

}
deleteButton.addEventListener("click", deleteEmployee);


