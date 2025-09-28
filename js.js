function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numA;
let operator;
let numB;
let result;
let displayContent;

function operate (numA, operator, numB) {
    if (operator == "+") {
      result = add(numA, numB);
        console.log(result);
    } else if (operator == "-") {
      result = subtract(numA, numB);
        console.log(result);
    } else if (operator == "*") {
      result = multiply(numA, numB);
        console.log(result);
    } else if (operator == "/") {
      result = divide(numA, numB);
        console.log(result);
    }
}

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplier = document.querySelector("#multiplier");
const divider = document.querySelector("#divider");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const display = document.querySelector("#display");



zero.addEventListener('click',() => {
        display.textContent = "0";
        displayContent = display.textContent;
})

one.addEventListener('click',() => {
        display.textContent = "1";
        displayContent = display.textContent;
})

two.addEventListener('click',() => {
        display.textContent = "2";
        displayContent = display.textContent;
})

three.addEventListener('click',() => {
        display.textContent = "3";
        displayContent = display.textContent;
})

four.addEventListener('click',() => {
        display.textContent = "4";
        displayContent = display.textContent;
})

five.addEventListener('click',() => {
        display.textContent = "5";
        displayContent = display.textContent;
})

six.addEventListener('click',() => {
        display.textContent = "6";
        displayContent = display.textContent;
})

seven.addEventListener('click',() => {
        display.textContent = "7";
        displayContent = display.textContent;
})

eight.addEventListener('click',() => {
        display.textContent = "8";
        displayContent = display.textContent;
})

nine.addEventListener('click',() => {
        display.textContent = "9";
        displayContent = display.textContent;
})

plus.addEventListener('click',() => {
        
})

minus.addEventListener('click',() => {
        
})

multiplier.addEventListener('click',() => {
        
})

divider.addEventListener('click',() => {
        
})

equal.addEventListener('click',() => {
        
})

dot.addEventListener('click',() => {
        display.textContent = ".";
})

clear.addEventListener('click',() => {
        display.textContent = "";
})

backspace.addEventListener('click',() => {
        
})




















// function sum(arr) {
// 	let result = arr.reduce((sum, current) => sum + current, 0);
//   return result;
// };

// function subtractionSum(arr) {
// 	let result = arr.reduce((sum, current) => sum - current, 0);
//   return result;
// };

// function multiply(arr) {
//   let result = arr.reduce((product, current) => product * current);
//   return result;
// };

// function divide(arr) {
//   let result = arr.reduce((product, current) => product / current);
//   return result;
// };