const numBtns = document.querySelectorAll('.nums');
const opsBtns = document.querySelectorAll('.ops');
const clrBtn = document.querySelector('#clr');
const delBtn = document.querySelector('#del');
const clrAndDelBtns = document.querySelectorAll('.clrAndDel');
const eqBtn = document.querySelector('.eq');
const display = document.querySelector('.displayTxt');
const errMsg = 'Enter a valid equation!';
let total = 0;
isDot = false;

function translate(l = display.innerText.length) {
    let totalToEval = '';
    for (let i = 0; i < l; i++) {
        if (display.innerText[i] === '+') totalToEval += '+';
        else if (display.innerText[i] === '−') totalToEval += '-'
        else if (display.innerText[i] === '×') totalToEval += '*';
        else if (display.innerText[i] === '÷') totalToEval += '/';
        else totalToEval += display.innerText[i];
    }
    return totalToEval;
}

// Clear Control
function clear() {
    display.innerText = '0';
    isDot = false;
}

// Delete Control
function del() {
    if (display.innerText[display.innerText.length - 1] === '.') isDot = false;
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

// Dot Control
function dot() {
    if (isDot === false) {
        display.innerText += numBtns[11].innerText;
        isDot = true;
    }
}

// Addition Control
function addition() {
    if (display.innerText[0] !== '0' || display.innerText.length >= 2) {
        display.innerText += opsBtns[3].innerText;
        isDot = false;
    }
}

// Subtraction Control
function subtraction() {
    (display.innerText === '0') ? display.innerText = opsBtns[2].innerText : display.innerText += opsBtns[2].innerText;
    isDot = false;
}

// Multiplication Control
function multiplication() {
    if (display.innerText[0] !== '0' || display.innerText.length >= 2) {
        display.innerText += opsBtns[1].innerText;
        isDot = false;
    }
}

// Divison Control
function divison() {
    if (display.innerText[0] !== '0' || display.innerText.length >= 2) {
        display.innerText += opsBtns[0].innerText;
        isDot = false;
    }
}

// Equality Control
function equals() {
    // let equation = display.innerText;
    try {
        total = eval(translate());
        display.innerText = total.toString();
    } catch (err) {
        display.innerText = errMsg;
        console.log(err);
    }
}

// Numbers Control for Keyboard Events
function num(i) {
    if (display.innerText === '0' || display.innerText === errMsg || display.innerText === 'Infinity') display.innerText = '';
    display.innerText += numBtns[i].innerText;
    if (display.innerText[0] === '0' && display.innerText[1] !== '.') display.innerText = '0';
}

// EventListener for keyboard input
window.addEventListener('keydown', function (e) {
    if (e.key === '.') dot();
    if (e.key === '+') addition();
    if (e.key === '-') subtraction();
    if (e.key === '*') multiplication();
    if (e.key === '/') divison();
    if (e.key === '0') num(10);
    if (e.key === '1') num(6);
    if (e.key === '2') num(7);
    if (e.key === '3') num(8);
    if (e.key === '4') num(3);
    if (e.key === '5') num(4);
    if (e.key === '6') num(5);
    if (e.key === '7') num(0);
    if (e.key === '8') num(1);
    if (e.key === '9') num(2);
    if (e.key === '=' || e.key === 'Enter') equals();
    if (e.key === 'Backspace') del();
    if (e.key === 'c') clear();
})

for (let i = 0; i <= 10; i++) numBtns[i].addEventListener('click', function () {
    if (display.innerText === '0' || display.innerText === errMsg || display.innerText === 'Infinity') display.innerText = '';
    display.innerText += numBtns[i].innerText;
    if (display.innerText[0] === '0' && display.innerText[1] !== '.') display.innerText = '0';
});
numBtns[11].addEventListener('click', dot);
clrBtn.addEventListener('click', clear);
delBtn.addEventListener('click', del);
opsBtns[3].addEventListener('click', addition);
opsBtns[2].addEventListener('click', subtraction);
opsBtns[1].addEventListener('click', multiplication);
opsBtns[0].addEventListener('click', divison);
eqBtn.addEventListener('click', equals);