var readline = require('readline-sync');

var operations = ['+', '-', '*', '/'];
var index = null;
var operator = null;
var firstNumber = 0;
var secondNumber = 0;

function operationQuestion() {
  operator = readline.question('What operation would you like to perform?'
    +'\nOptions: '
    +'\nAddition ('+ operations[0]+')'
    +'\nSubtraction ('+ operations[1]+')'
    +'\nMultiplication ('+ operations[2]+')'
    +'\nDivision ('+ operations[3]+')\n'
  );

  if (!operations.includes(operator)) {
    console.log('That is not a valid operation');
    operationQuestion();
  }
  
  function numberOne() {
    firstNumber = readline.questionInt('Please enter the first number: ');
    if (isNaN(firstNumber)) {
      console.log('This is not a number');
      numberOne();
    }
  }

  function numberTwo() {
    secondNumber = readline.questionInt('Please enter the second number: ');
    if (isNaN(secondNumber)) {
      console.log('This is not a number');
      numberTwo();
    }
  }

  numberOne();
  numberTwo();

  switch(operator){
    case '+':
      console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber+secondNumber));
      break;
    case '-':
      console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber-secondNumber));
      break;
    case '*':
      console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber*secondNumber));
      break;
    case '/':
      console.log('The result of '+firstNumber+operator+secondNumber+' = '+ ((firstNumber/secondNumber).toFixed(2)));
      break;
    default:
      console.log('Something went wrong :(');  
  }
}

operationQuestion();
