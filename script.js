function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return Math.round((a * b) * 1000) / 1000;
}


function divide(a, b) {
    return Math.round(1000 * (a / b)) / 1000;
}


function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR";
    }
}


function addNumber(button) {
    if (operation.firstNumber.length + operation.secondNumber.length > 12) {
        alert("You've reached the maximum input.");
        return;
    } 
    if (operation.operator === '') {
        operation.firstNumber += button.textContent;
        displayBottom.textContent = `${operation.firstNumber}`;
    } else if (operation.operator) {
        operation.secondNumber += button.textContent;
        displayBottom.textContent = `${operation.secondNumber}`;
    }
}


function addOperator(button) {
    if (operation.firstNumber != '' && operation.operator === '') {
        operation.operator = button.textContent;
        button.classList.add('.pressed');
    } 
    displayTop.textContent = `${operation.firstNumber} ${operation.operator} ${operation.secondNumber}`;
}


function performOperation() {
    operation.solution = operate(operation.operator, operation.firstNumber, operation.secondNumber);
    if (operation.solution.length > 13) {
        clearDisplayValue();
        displayBottom.textContent = 'ERROR';
        return;
    }
    displayBottom.textContent = `${operation.solution}`;
    clearDisplayValue();
    operation.firstNumber = operation.solution;
}



function clearDisplay() {
    displayBottom.textContent = '';
    displayTop.textContent = '';
}


function clearDisplayValue() {
    operation.firstNumber = '';
    operation.operator = '';
    operation.secondNumber = '';
    operation.solution = '';
}


let operation = {
    firstNumber: '',
    operator: '',  
    secondNumber: '', 
    solution: '',
}


const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const displayBottom = document.querySelector('.display.bottom');
const displayTop = document.querySelector('.display.top');
const numberButtons = document.querySelectorAll('.calculator-btns > .btn:not(.operator)');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals')


equalsButton.addEventListener('click', () => {
    performOperation();
    operatorButtons.forEach((button) => {
        button.classList.remove('.pressed');
    })
});


clearButton.addEventListener('click', () => {
    clearDisplayValue();
    clearDisplay();
});


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addNumber(button);
    })
})


operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addOperator(button);
    })
})


// pseudo code 

/* 

function to add 
function to subtract 
function to multiply 
function to divide 

function to perform one of these operations 

function to store values? How to store the display value? 


*/
