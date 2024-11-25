const removeFromArray = function(array, ...args) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        let match = false;
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) match = true;
        }
        if (!match) newArray.push(array[i]);
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
