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
let displayContent = [];
let justEvaluated = false;

function operate (numA, operator, numB) {
    if (operator == "+") {
      result = add(numA, numB);
      result = parseFloat(result.toFixed(3));
        console.log(result);
    } else if (operator == "-") {
      result = subtract(numA, numB);
      result = parseFloat(result.toFixed(3));
        console.log(result);
    } else if (operator == "*") {
      result = multiply(numA, numB);
      result = parseFloat(result.toFixed(3));
        console.log(result);
    } else if (operator == "/") {
      result = divide(numA, numB);
      result = parseFloat(result.toFixed(3));
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
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("0");
    display.textContent = displayContent.join("");
})

one.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("1");
    display.textContent = displayContent.join("");
})

two.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("2");
    display.textContent = displayContent.join("");
})

three.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("3");
    display.textContent = displayContent.join("");
})

four.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("4");
    display.textContent = displayContent.join("");
})

five.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("5");
    display.textContent = displayContent.join("");
})

six.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("6");
    display.textContent = displayContent.join("");
})

seven.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("7");
    display.textContent = displayContent.join("");
})

eight.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("8");
    display.textContent = displayContent.join("");
})

nine.addEventListener('click',() => {
    if (justEvaluated) {
        displayContent = [];
        justEvaluated = false;
        result = null;
    }
    displayContent.push("9");
    display.textContent = displayContent.join("");
})

plus.addEventListener('click',() => {
          if (displayContent.length === 0) {
          operator = "+";
          return;
    }
          if (result == null) {
          operator = "+";
          numA = parseFloat(displayContent.join(""));
          numB = 0;
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
        } else {
          numB = parseFloat(displayContent.join(""));
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
          numB = 0;
          operator = "+";
        } displayContent = [];
        dot.disabled = false;
})

minus.addEventListener('click',() => {
          if (displayContent.length === 0) {
          operator = "-";
          return;
    }
          if (result == null) {
          operator = "-";
          numA = parseFloat(displayContent.join(""));
          numB = 0;
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
        } else {
          numB = parseFloat(displayContent.join(""));
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
          numB = 0;
          operator = "-";
        } displayContent = [];
        dot.disabled = false;
})

multiplier.addEventListener('click',() => {
          if (displayContent.length === 0) {
          operator = "*";
          return;
    }
          if (result == null) {
          operator = "*";
          numA = parseFloat(displayContent.join(""));
          numB = 1;
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
        } else {
          numB = parseFloat(displayContent.join(""));
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
          numB = 1;
          operator = "*";
        } displayContent = [];
        dot.disabled = false;
})

divider.addEventListener('click',() => {
          if (displayContent.length === 0) {
          operator = "/";
          return;
    }
          if (result == null) {
          operator = "/";
          numA = parseFloat(displayContent.join(""));
          numB = 1;
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
        } else {
          numB = parseFloat(displayContent.join(""));
          operate(numA, operator, numB);
          display.textContent = result;
          numA = result;
          numB = 1;
          operator = "/";
        } displayContent = [];
        dot.disabled = false;
})

equal.addEventListener('click',() => {
        numB = parseFloat(displayContent.join(""));
        operate(numA, operator, numB);
        display.textContent = result;
        displayContent = [result];
        numA = result;
        numB = null;
        result = null;
        justEvaluated = true;
})

dot.addEventListener('click',() => {
        displayContent.push(".");
        display.textContent = displayContent.join("");
        dot.disabled = true;
})

clear.addEventListener('click',() => {
        display.textContent = "";
        displayContent = [];
        dot.disabled = false;
        numA = null;
        numB = null;
        operator = null;
        result = null;
})

backspace.addEventListener('click',() => {
        displayContent.pop();
        display.textContent = displayContent.join("");
        dot.disabled = false;
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

//or you can just chatgpt this to this 
//const $=id=>document.getElementById(id),d=$("display");let A,B,op,res,buf=[],evald=0;[..."0123456789"].forEach((n,i)=>$(["zero","one","two","three","four","five","six","seven","eight","nine"][i]).onclick=_=>{evald&&(buf=[],res=null,evald=0);buf.push(n);d.textContent=buf.join("")});dot.onclick=_=>{if(!buf.includes("."))buf.push("."),d.textContent=buf.join(""),dot.disabled=1};const ops={"+":(a,b)=>a+b,"-":(a,b)=>a-b,"*":(a,b)=>a*b,"/":(a,b)=>a/b};const setOp=(s,defB)=>{if(evald){evald=0;buf=[]}if(!buf.length)return op=s;if(res==null)A=parseFloat(buf.join("")),B=defB,res=ops[s](A,B);else B=parseFloat(buf.join("")),res=ops[op](A,B);d.textContent=(res=+res.toFixed(3));A=res;op=s;buf=[];dot.disabled=0};plus.onclick=_=>setOp("+",0);minus.onclick=_=>setOp("-",0);multiplier.onclick=_=>setOp("*",1);divider.onclick=_=>setOp("/",1);equal.onclick=_=>{if(!op||!buf.length||A==null)return;B=parseFloat(buf.join(""));res=ops[op](A,B);d.textContent=(res=+res.toFixed(3));A=res;buf=[""+res];res=null;evald=1};clear.onclick=_=>{A=B=op=res=null;buf=[];d.textContent="";dot.disabled=0};backspace.onclick=_=>{buf.pop();d.textContent=buf.join("");dot.disabled=!buf.includes(".")};
//which is extremely funny