const palindromes = function (string) {
    let compressedString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ' && string[i] !== '.'&& string[i] !== '!' && string[i] !== ',') compressedString += string[i].toLowerCase();
    }

    let reverse = '';

    for (let i = compressedString.length - 1; i >= 0; i--) {
        reverse += compressedString[i];
    }

    return (reverse === compressedString);
}

// Do not edit below this line
module.exports = palindromes;
