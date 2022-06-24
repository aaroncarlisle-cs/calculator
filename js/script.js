let num1;
let num2;
let display;
let operatorSet = false;
let operate = {
    add: function (num1, num2) {return num1 + num2;},
    subtract: function (num1, num2) {return num1 - num2;},
    multiply: function (num1, num2) {return num1 *  num2;},
    divide: function (num1, num2) {return num1 / num2;},
}
const digitBtns = document.querySelectorAll('.digit');
function attachDigitBtnEvents(digitBtns) {
    digitBtns.forEach((button) => button.addEventListener('click', () => appendDigit(button.innerText)));
}

function appendDigit(digit) {
    
}
