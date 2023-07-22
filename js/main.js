const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#reset')
const floatBtn = document.querySelector('.float')
const backSpace = document.querySelector('.backSpace')
let previousInput = document.querySelector('.previousInput')
let currentInput = document.querySelector('.currentInput')
let previousNumber = "";
let currentNumber = "";
let operator = "";

numbers.forEach(button => button.addEventListener('click', function(e){
  registerNumbers(e);
  currentInput.textContent = currentNumber;
}))

operators.forEach(button => button.addEventListener('click', function(e){
  if (operator === "") {
    registerOperation(e);
  } else {
    operate(operator, previousNumber, currentNumber)
    previousNumber = ans;
    registerOperation(e);
  }
}))

equalBtn.addEventListener('click', () => {
  operate(operator, previousNumber, currentNumber)
  currentInput.textContent = ans;
  previousNumber = ans;
  previousInput.textContent = "";
  currentNumber = ""
  operator = "";
})

backSpace.addEventListener('click', () => {
  deleteNumber ();
  currentInput.textContent = currentNumber;
})

clearBtn.addEventListener('click', () => {
  currentInput.textContent = "";
  previousInput.textContent = "";
  currentNumber = "";
  previousNumber = "";
  operator = "";
})

floatBtn.addEventListener('click', function(e) {
  floatInput(e);
})


function registerNumbers(e) {
  if (currentInput.textContent.length < 8){
    currentNumber += e.target.textContent;
  }
}

function registerOperation(e) {
  if (currentInput.textContent == "") {
    currentInput.textContent = 0;
  }
  if (previousInput.textContent == 0 && currentInput.textContent.includes('.') == 0) {
    previousNumber = parseInt(currentInput.textContent);
  } else if (previousInput.textContent == 0 && currentInput.textContent.includes('.')){
    previousNumber = parseFloat(currentInput.textContent)
  }
  operator = e.target.textContent;
  previousInput.textContent = `${previousNumber} ${operator} `
  currentNumber = "";
  currentInput.textContent = currentNumber;
}


function floatInput(e) {
  if(currentInput.textContent.includes('.')) {
    currentInput.textContent = currentInput.textContent;
  } else {
    currentNumber += e.target.textContent;
    currentInput.textContent = currentNumber;
  }
}


function deleteNumber (){
  currentNumber = currentNumber.slice(0, -1);
}


function operate (operator, previousNumber, currentNumber) {
  if (currentInput.textContent == ""){
    currentInput.textContent = 0;
  }
  if (currentInput.textContent.includes('.')) {
    currentNumber = parseFloat(currentInput.textContent);
  } else {
    currentNumber = parseInt(currentInput.textContent);
  }  
  if (operator == '+') {
    ans = add(previousNumber, currentNumber);
    return ans;
  } else if (operator == '-') {
    ans = subtract(previousNumber, currentNumber);
    return ans;
  } else if (operator == '*') {
    ans = multiply(previousNumber, currentNumber);
    return ans;
  } else if (operator == '/') {
    ans = divide(previousNumber, currentNumber);
    return ans;
  } else {
    ans = currentNumber
  }
}




const add = (numOne, numTwo) => {
  return numOne + numTwo
};

const subtract = (numOne, numTwo) => {
  return numOne - numTwo
};

const multiply = (numOne, numTwo) => {
  return numOne * numTwo
};

const divide = (numOne, numTwo) => {
  return numOne / numTwo
};