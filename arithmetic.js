let firstNum = null;
let secondNum = null;
let solution = null;
let hasSolution = false
let operator = null;
let isOperatorClicked = false

const equationDisplay = document.getElementById('operation')
const inputOutput = document.getElementById('input-result')

const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete')

const numberButttons = document.getElementsByClassName('numbers')
const operationButtons = document.getElementsByClassName('operations')
const equalsButton = document.querySelector('.equals')

for (let i = 0; i < numberButttons.length; i++) {
    numberButttons[i].addEventListener('click', () => {
        inputOutput.textContent += numberButttons[i].textContent
        if (isOperatorClicked) {
            secondNum = parseFloat(inputOutput.textContent)
        }
        else {
            firstNum = parseFloat(inputOutput.textContent)
        }
    })
}

for (let j = 0; j < operationButtons.length; j++) {  
    operationButtons[j].addEventListener('click', () => {
        if (hasSolution) {
            firstNum = solution
            solution = null
        }

        isOperatorClicked = true
        operator = operationButtons[j].textContent
        equationDisplay.textContent = firstNum + " " + operator
        inputOutput.textContent = ""
    })
}

equalsButton.addEventListener('click', () => {
    equationDisplay.textContent = firstNum + " " + operator + " " + secondNum + " ="
    solution = operate(firstNum, operator, secondNum)
    hasSolution = true
    inputOutput.textContent = solution
})

clearButton.addEventListener('click', () => {
    firstNum = null;
    secondNum = null;
    solution = null;
    hasSolution = false
    operator = null;
    isOperatorClicked = false
    equationDisplay.textContent = ""
    inputOutput.textContent = ""
})

deleteButton.addEventListener('click', () => {
    let inputValue = inputOutput.textContent;
    // Check if there is anything to delete
    if (inputValue.length > 0) {
        // Remove the rightmost character
        inputValue = inputValue.slice(0, -1);
        inputOutput.textContent = inputValue;

        // If an operator was clicked, update secondNum
        if (isOperatorClicked) {
            secondNum = parseFloat(inputValue);
        } else {
            // Otherwise, update firstNum
            firstNum = parseFloat(inputValue);
        }
    }
})


function addition(first, second) {
    return first + second
}

function subtraction(first, second) {
    return first - second
}

function multiplication(first, second) {
    return first * second
}

function division(first, second) {
    if (second > 0) {
        return first / second
    }

    else {
        return "Error"
    }
}

function operate(firstDigit, operation, secondDigit) {
    let result = null
    switch (operation) {
        case "+":
            result = addition(firstDigit, secondDigit)
            break;

        case "-":
            result = subtraction(firstDigit, secondDigit)
            break;   

        case "x":
            result = multiplication(firstDigit, secondDigit)
            break;

        case "/":
            result = division(firstDigit, secondDigit)
            break;

        default:
            break;
    }
    return result
}