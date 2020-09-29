const calcNums = document.querySelectorAll(".calc-num");
const displayValElement = document.querySelector(".calc-display-val");
const calcOperators = document.querySelectorAll(".calc-operator");
const clearBtn = document.querySelector(".calc-clear");
const backspaceBtn = document.querySelector(".calc-backspace");
const decimalBtn = document.querySelector(".calc-decimal");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

for (let num of calcNums) {
    num.addEventListener("click", updateDisplay, false);
}

for (let operator of calcOperators) {
    operator.addEventListener("click", performOperation, false);
}

clearBtn.addEventListener("click", clearDisplay, false);
backspaceBtn.addEventListener("click", clearItem, false);
decimalBtn.addEventListener("click", addDecimal, false);

function updateDisplay(clickedBtn) {
    let btnText = clickedBtn.target.textContent;

    if (displayVal === "0") displayVal = "";
    displayVal += btnText;
    displayValElement.textContent = displayVal;
}

function performOperation(clickedBtn) {
    let operator = clickedBtn.target.textContent;

    switch(operator) {
        case "+":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.textContent = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("+");
            break;

        case "-":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.textContent = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("-");
            break;

        case "×":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.textContent = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("*");
            break;

        case "÷":
            pendingVal = displayVal;
            displayVal = "0";
            displayValElement.textContent = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push("/");
            break; 

        case "=":
            pendingVal = displayVal;
            evalStringArray.push(pendingVal);
            let evaluation = eval(evalStringArray.join(" "));
            displayVal = String(evaluation);
            displayValElement.textContent = displayVal;
            break;
    }
}

function clearDisplay() {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.textContent = displayVal;
}

function clearItem() {
    let displayValLength = displayVal.length;
    displayVal = displayVal.slice(0, displayValLength-1);

    if(displayVal === "") displayVal = "0";

    displayValElement.textContent = displayVal;
}

function addDecimal() {
    if(!displayVal.includes(".")) displayVal += ".";
    displayValElement.textContent = displayVal;
}