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

function operate (numA, operator, numB) {
    if (operator == "+") {
      let result = add(numA, numB);
        console.log(result);
    } else if (operator == "-") {
      let result = subtract(numA, numB);
        console.log(result);
    } else if (operator == "*") {
      let result = multiply(numA, numB);
        console.log(result);
    } else if (operator == "/") {
      let result = divide(numA, numB);
        console.log(result);
    }
}

operate(5, "*", 5);









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