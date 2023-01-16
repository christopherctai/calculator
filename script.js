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


function addNumber() {
    if (displayValue.firstNumber.split('').length > 5 || displayValue.secondNumber.split('').length > 5) {
        alert("You've reached the maximum input.");
        return;
    }
    if (displayValue.operator === '') {
        displayValue.firstNumber += button.textContent;
    } else if (displayValue.operator) {
        displayValue.secondNumber += button.textContent;
        console.log(displayValue.operator);
    }
    displayBottom.textContent = `${displayValue.firstNumber} ${displayValue.operator} ${displayValue.secondNumber}`;
}


function addOperator() {
    if (button.textContent === '=') {
        solution = operate(displayValue.operator, displayValue.firstNumber, displayValue.secondNumber);
        displayBottom.textContent = `${solution}`;
        clearDisplayValue();
        return;
    }
    else if (displayValue.firstNumber != '' && displayValue.operator === '') {
        displayValue.operator = button.textContent;
    } 
    displayBottom.textContent = `${displayValue.firstNumber} ${displayValue.operator} ${displayValue.secondNumber}`;
}


function clearDisplay() {
    displayBottom.textContent = '';
}


function clearDisplayValue() {
    displayValue.firstNumber = '';
    displayValue.operator = '';
    displayValue.secondNumber = '';
}


let displayValue = {
    firstNumber: '',
    operator: '',  
    secondNumber: '', 
}
let solution;


const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const displayBottom = document.querySelector('.display.bottom');
const numberButtons = document.querySelectorAll('.calculator-btns > .btn:not(.operator)');
const operatorButtons = document.querySelectorAll('.operator');
clearButton.addEventListener('click', clearDisplay);


numberButtons.forEach((button) => {
    button.addEventListener('click', addNumber)
})


operatorButtons.forEach((button) => {
    button.addEventListener('click', addOperator)
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
