//declare global variables
let newArray = [];
let arrayNumbers = [];
let filteredArray = [];
let num1 = 0;
let num2 = 0;
let result = 0;
//declare operators
let operator1 = "+";
let operator2 = "-";
let operator3 = "*";
let operator4 = "/";

//convert string to array
function stringToArray(x) {
    newArray = x.split("");
}
//loop through array, find numbers and push them to array
function arrayLoopPush(newArray) {
    for(let i = 0; i < newArray.length; i++) {
        if(!isNaN(newArray[i])) {
            arrayNumbers.push(newArray[i]);
        }
    }
    };

//convert "arrayNumbers" to numbers
function arrNumsToNums(x) {
    x = parseInt(arrayNumbers.join(''));
}
//convert "filteredArray" to numbers
function filteredArrNumsToNums(x) {
    x = parseInt(filteredArray.join(''));
}

//delete content of arrays
function deleteContent() {
    arrayNumbers.length = 0;
    newArray.length = 0;
    filteredArray.length = 0;
}

//filter array elements after - + * or / operators
function filterNums(array) {
    let foundOperator = false;
    for (let i = 0; i < array.length; i++) {
        if (foundOperator === true && !isNaN(array[i])) {
            filteredArray.push(array[i]);
        } else if (array[i] === operator1 || array[i] === operator2 || array[i] === operator3 || array[i] === operator4) {
            foundOperator = true;
        }
    }
    return filteredArray;
}

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

//check operator and return value stored in RESULT!
function returnValue() {
    stringToArray(screen.textContent);
    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i] === operator1) {
            result = add(num1, num2);
            return result;
        } else if(newArray[i] === operator2) {
            result = subtract(num1, num2);
            return result;
        } else if(newArray[i] === operator3) {
            result = multiply(num1, num2);
            return result;
        } else if(newArray[i] === operator4) {
            result = divide(num1, num2);
            return result;
        }
    }
}

//Variable to store numbers on screen
const screen = document.querySelector(".screen");

//erase button
const btnC = document.querySelector(".btn-C");
btnC.addEventListener("click", function() {
    screen.textContent = "";
});
// 0 to 9 buttons
const btn0 = document.querySelector(".btn-zero");
btn0.addEventListener("click", function() {
    screen.textContent = screen.textContent + 0;
});

const btn1 = document.querySelector(".btn-one");
btn1.addEventListener("click", function() {
    screen.textContent = screen.textContent + 1;
});

const btn2 = document.querySelector(".btn-two");
btn2.addEventListener("click", function() {
    screen.textContent = screen.textContent + 2;
});

const btn3 = document.querySelector(".btn-three");
btn3.addEventListener("click", function() {
    screen.textContent = screen.textContent + 3;
});

const btn4 = document.querySelector(".btn-four");
btn4.addEventListener("click", function() {
    screen.textContent = screen.textContent + 4;
});

const btn5 = document.querySelector(".btn-five");
btn5.addEventListener("click", function() {
    screen.textContent = screen.textContent + 5;
});

const btn6 = document.querySelector(".btn-six");
btn6.addEventListener("click", function() {
    screen.textContent = screen.textContent + 6;
});

const btn7 = document.querySelector(".btn-seven");
btn7.addEventListener("click", function() {
    screen.textContent = screen.textContent + 7;
});

const btn8 = document.querySelector(".btn-eight");
btn8.addEventListener("click", function() {
    screen.textContent = screen.textContent + 8;
});

const btn9 = document.querySelector(".btn-nine");
btn9.addEventListener("click", function() {
    screen.textContent = screen.textContent + 9;
});

//operator buttons
const btnPlus = document.querySelector(".btn-plus");
btnPlus.addEventListener("click", function() {
    //convert string to array
    stringToArray(screen.textContent);
    //loop and push numbers to arrayNumbers
    arrayLoopPush(newArray);
    //add nums to num1 and delete array contents
    arrNumsToNums(num1);
    //delete content of newArray and arrayNumbers
    deleteContent();
    screen.textContent = screen.textContent + " + ";
});

const btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", function() {
    screen.textContent = screen.textContent + " - ";
});

const btnMultiply = document.querySelector(".btn-multiply");
btnMultiply.addEventListener("click", function() {
    screen.textContent = screen.textContent + " * ";
});

const btnDivide = document.querySelector(".btn-divide");
btnDivide.addEventListener("click", function() {
    screen.textContent = screen.textContent + " / ";
});

const btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", function() {
    //convert string to array
    stringToArray(screen.textContent);
    //loop and push numbers to arrayNumbers
    arrayLoopPush(newArray);
    //loop and filter numbers after OPERATOR and push them to filteredArray
    filterNums(arrayNumbers);
    //convert array to nums and store them in num2
    filteredArrNumsToNums(num2);
    //delete content for all arrays again
    deleteContent();
    //calculate!!
    returnValue();
    screen.textContent = result;
});