let firstNum = 0;
let secondNum = 0;
let operator = ""

const equation = document.getElementById('operation')
const equationDisplay = equation.textContent

const inputOutput = document.getElementById('input-result')

const numOperContainer = document.getElementsByClassName('row')
const numberButttons = document.getElementsByClassName('numbers')

for (let i = 0; i < numberButttons.length; i++) {
    numberButttons[i].addEventListener('click', () => {
        inputOutput.textContent += numberButttons[i].textContent
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