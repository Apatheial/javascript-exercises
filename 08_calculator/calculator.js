const add = function(firstNum, secondNum) {
	 return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(array) {
	return array.reduce((accumulator, num) => accumulator + num, 0);
};

const multiply = function(array) {
	return array.reduce((accumulator, num) => accumulator * num, 1);
};

const power = function(firstNum, secondNum) {
  return firstNum ** secondNum;
};

const factorial = function(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
