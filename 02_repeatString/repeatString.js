const repeatString = function(string, repeatCount) {
    let newString = "";
    
    if (repeatCount < 0) return "ERROR";

    for (let i = 0; i < repeatCount; i++) {
        newString += string;
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
