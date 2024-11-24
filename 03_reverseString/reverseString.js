const reverseString = function(string) {
    returnString = "";
    for (let i = 1; i <= string.length; i++) {
        returnString = returnString + string.charAt(string.length - i);
    }
    return returnString;

};

// Do not edit below this line
module.exports = reverseString;
