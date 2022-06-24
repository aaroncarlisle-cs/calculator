// Global variables for Calculator functions
let num1 = '';
let num2 = '';

let operatorSet = false;
let decimalSet = false;
let operate = {
    add: function (num1, num2) {return num1 + num2;},
    subtract: function (num1, num2) {return num1 - num2;},
    multiply: function (num1, num2) {return num1 *  num2;},
    divide: function (num1, num2) {return num1 / num2;},
}
// Event listeners for Calculator buttons
function numericEvents() {
    let digitBtns = document.querySelectorAll('.digit');
    digitBtns.forEach((button) => button.addEventListener('click', inputDigit));
}
function operatorEvents() {
    let decimal = document.getElementById('decimal');
    let percent = document.getElementById('percent');
    let add = document.getElementById('add');
    let subtract = document.getElementById('subtract');
    let divide = document.getElementById('divide');
    let multiply = document.getElementById('multiply');
    let equals = document.getElementById('equals');
    let clearEntry = document.getElementById('clear-entry');
    let clear = document.getElementById('clear');

    decimal.addEventListener('click', inputDecimal);
    percent.addEventListener('click', inputPercent);
    add.addEventListener('click', setOperand);
    subtract.addEventListener('click', setOperand);
    multiply.addEventListener('click', setOperand);
    divide.addEventListener('click', setOperand);
    equals.addEventListener('click', someFunction);
    clearEntry.addEventListener('click', someFunction);
    clear.addEventListener('click', someFunction);  
}

function someFunction(evt) {
    console.log(evt.target.innerText);
}

function inputDigit(evt) {
    let digit = evt.target.innerText;
    console.log(digit);
    if (!operatorSet) {
        setFirstNum(digit);
    }
    else setSecondNum(digit);
}
function setFirstNum(digit) {
    if (newNum(num1)) {
        num1 = digit;
    }
    else num1 += digit;
    appendCurrentDisplay(num1);
}
function setSecondNum(digit) {
    if(newNum(num2)) {
        num2 = digit;
    }
    else num2+= digit;
    appendCurrentDisplay(num2);
}
function newNum(num) {
    return num.length == 1 && num == '0'
}
function appendCurrentDisplay(num) {
    document.querySelector('.display-current').innerText = num;
}





function inputDecimal(evt) {
    let decimal = evt.target.innerText;
    console.log(decimal);
}
function inputPercent(evt) {
    let percent = evt.target.innerText;
    console.log(percent);
}

function setOperand(evt) {
    let operand = evt.target.innerText;
    console.log(operand);
}

window.addEventListener('load', numericEvents);
window.addEventListener('load', operatorEvents);