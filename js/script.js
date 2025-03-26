// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

const $ = selector => document.querySelector(selector);
const table = $('#employees');
const form = $('form');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let count = 0;
    const outputCount = document.createElement('output');
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let valueId = $('#id').value;
    let valueName = $('#name').value;
    let valueExt = $('#extension').value;
    let valueEmail = $('#email').value;
    let valueDpt = $('#department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDpt = row.insertCell();
    let cellDelete = row.insertCell();


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(valueId);
    let textName = document.createTextNode(valueName);
    let textExt = document.createTextNode(valueExt);
    let textEmail = document.createTextNode(valueEmail);
    let textDpt = document.createTextNode(valueDpt);
    cellID.appendChild(textID);
    cellName.appendChild(textName);
    cellExt.appendChild(textExt);
    cellEmail.appendChild(textEmail);
    cellDpt.appendChild(textDpt);
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    let textDelete = document.createTextNode('x');
    deleteBtn.appendChild(textDelete);
    cellDelete.appendChild(deleteBtn);
   
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    maintainCount();
});

// DELETE EMPLOYEE'
table.addEventListener('click',(e) => {
    if (e.target.tagName === 'BUTTON' &&  e.target.textContent === 'x'){
        if (confirm('Are you sure you want to delete this employee?')){
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count--;
            maintainCount();
        }
    }
    
});

// MAINTAINING AN EMPLOYEE COUNT
const maintainCount = () =>{
    outputCount.textContent = `${count} Employees`;
    if (count === 0){
        outputCount.style.display = 'none';
    }
    else{
        outputCount.style.display = 'block';
    }
};
// DISPLAY AN EMPLOYEE COUNT
const displayCount = () => {
    let body = $('body');
    let header = $('#main-header');
    body.insertBefore(outputCount, header.nextSibling);
};
displayCount();
   


 




