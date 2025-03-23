const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;

    if (!(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) 
        || firstNumber < 0 || secondNumber < 0) 
        return "ERROR";

    let min = Math.min(firstNumber, secondNumber);
    let max = Math.max(firstNumber, secondNumber);

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
