//declare global variables
let result = 0;
let num1 = 0;
let num2 = 0;

//create functions that add, subtract, multiply and divide
function add(x, y) {
    return result = x + y;
}

function subtract(x, y) {
    return result = x - y;
}

function multiply(x, y) {
    return result = x * y;
}

function divide(x, y) {
    return result = x / y;
}

const screen = document.querySelector(".screen");

const btn0 = document.querySelector(".btn-zero");
btn0.addEventListener("click", function() {
    screen.textContent = "hi!";
});
