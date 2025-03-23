const fibonacci = function(index) {
    const indexIsNumber = +index;
    const fibonacci = [1, 1];
    if (indexIsNumber < 0) return "OOPS";
    if (indexIsNumber === 0) return 0;
    for (let i = 0; i < indexIsNumber; i++) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
    }

    return fibonacci[indexIsNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
