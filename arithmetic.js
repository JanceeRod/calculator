let firstNum = null;
let secondNum = null;
let operator = null;
let isOperatorClicked = false

const equationDisplay = document.getElementById('operation')
const inputOutput = document.getElementById('input-result')

const numberButttons = document.getElementsByClassName('numbers')
const operationButtons = document.getElementsByClassName('operations')

for (let i = 0; i < numberButttons.length; i++) {
    numberButttons[i].addEventListener('click', function() {
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
        isOperatorClicked = true
        operator = operationButtons[j].textContent
        equationDisplay.textContent = firstNum + " " + operator
        inputOutput.textContent = ""
    })
}


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