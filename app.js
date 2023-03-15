//declare global variables
let filteredArray = [];
let firstString = "";
let secondString = "";
let num1 = 0;
let num2 = 0;
let result = 0;
//declare operators
let operator1 = "+";
let operator2 = "-";
let operator3 = "*";
let operator4 = "/";

//convert string to numbers and store it in num1
function convertToNum() {
    num1 = Number(firstString);
}
//do the same here and store it in num2
function convertToNum2() {
    num2 = Number(secondString);
}
//convert filteredArray to string
function convertArrayToString() {
    secondString = filteredArray.join('');
}
//delete content of arrays/strings
function deleteContentFirstString() {
    firstString = "";
}
function deleteContentSecondString() {
    secondString = "";
}
function deleteFilteredArray() {
    filteredArray.length = 0;
}

//loop and filter elements, then push them to filteredArray
function filterNums(x) {
    let foundOperator = false;
    for (let i = 0; i < x.length; i++) {
        if (foundOperator === true && (!isNaN(x[i]) || x[i] === ".")) {
            filteredArray.push(x[i]);
        } else if (x[i] === operator1 || x[i] === operator2 || x[i] === operator3 || x[i] === operator4) {
            foundOperator = true;
        }
    }
}

//create functions that add, subtract, multiply and divide
function add() {
    result = num1 + num2;
}

function subtract() {
    result = num1 - num2;
}

function multiply() {
    result = num1 * num2;
}

function divide() {
    result = num1 / num2;
}

//check operator and return value stored in RESULT!
function returnValue() {
    for(let i = 0; i < screen.textContent.length; i++) {
        if(screen.textContent[i] === operator1) {
            add();
        } else if(screen.textContent[i] === operator2) {
            subtract();
        } else if(screen.textContent[i] === operator3) {
            multiply();
        } else if(screen.textContent[i] === operator4) {
            divide();
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
    if(screen.textContent === "") {
        return;
    } else {
    //store string to firstString
    firstString = screen.textContent;
    //convert firstString to numbers and store it inside num1
    convertToNum();
    //delete content of firstString
    deleteContentFirstString();
    screen.textContent = screen.textContent + " + ";
    }
});

const btnMinus = document.querySelector(".btn-minus");
btnMinus.addEventListener("click", function() {
    if(screen.textContent === "") {
        return;
    } else {
     //store string to firstString
     firstString = screen.textContent;
     //convert firstString to numbers and store it inside num1
     convertToNum();
     //delete content of firstString
     deleteContentFirstString();
    screen.textContent = screen.textContent + " - ";
    }
});

const btnMultiply = document.querySelector(".btn-multiply");
btnMultiply.addEventListener("click", function() {
    if(screen.textContent === "") {
        return;
    } else {
     //store string to firstString
     firstString = screen.textContent;
     //convert firstString to numbers and store it inside num1
     convertToNum();
     //delete content of firstString
     deleteContentFirstString();
    screen.textContent = screen.textContent + " * ";
    }
});

const btnDivide = document.querySelector(".btn-divide");
btnDivide.addEventListener("click", function() {
    if(screen.textContent === "") {
        return;
    } else {
     //store string to firstString
     firstString = screen.textContent;
     //convert firstString to numbers and store it inside num1
     convertToNum();
     //delete content of firstString
     deleteContentFirstString();
    screen.textContent = screen.textContent + " / ";
    }
});

const btnEqual = document.querySelector(".btn-equal");
btnEqual.addEventListener("click", function() {
    if(screen.textContent === "") {
        return;
    } else {
    //loop through screen.textContent string and push numbers to filteredArray 
    filterNums(screen.textContent);
    //convert filteredArray to string and store it inside secondString
    convertArrayToString();
    //delete filteredArray content
    deleteFilteredArray();
    //convert secondString to numbers and store it inside num2
    convertToNum2();
    //delete content secondString
    deleteContentSecondString();
    //calculate!!
    returnValue();
    screen.textContent = result;
    }
});