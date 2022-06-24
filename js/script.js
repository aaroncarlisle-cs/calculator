// Global variables for Calculator functions
let num1;
let num2;
let operator;
let operatorSet = false;
let decimalSet = false;
let operate = {
    add: function (num1, num2) {return num1 + num2;},
    subtract: function (num1, num2) {return num1 - num2;},
    multiply: function (num1, num2) {return num1 *  num2;},
    divide: function (num1, num2) {return num1 / num2;},
}
// Event listeners for Calculator buttons
function attachDigitBtnEvents() {
    let digitBtns = document.querySelectorAll('.digit');
    digitBtns.forEach((button) => button.addEventListener('click', appendDisplay));
}


function appendDisplay(button) {
    let displayResult = document.querySelector('.display-result');
    let digit = button.target.innerText;
    displayResult.innerText += digit;
}

window.onload =  () => {
    attachDigitBtnEvents();
}