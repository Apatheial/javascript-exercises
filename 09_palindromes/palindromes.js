const palindromes = function (string) {
    const temp = string.toLowerCase()
                        .replace(/[,.!? ]/g, "")
    const palindrome = temp.toLowerCase()
                            .split("")
                            .reverse()
                            .join("");
    return temp === palindrome ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
