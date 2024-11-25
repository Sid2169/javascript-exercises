const fibonacci = function(n) {
    if (typeof n !== 'number') n = Number(n); // Convert string to number if needed
    if (!Number.isInteger(n)) return 'OOPS'; // Handle non-integer inputs
    if (n < 0) return 'OOPS'; // Handle negative inputs
    
    if (n === 0) return 0; // Base case
    if (n === 1) return 1; // Base case

    let prev1 = 0; 
    let prev2 = 1; 
    let nthFibonacci = 0;

    for (let i = 2; i <= n; i++) {
        nthFibonacci = prev1 + prev2; 
        prev1 = prev2;
        prev2 = nthFibonacci; 
    }

    return nthFibonacci;
}

// Do not edit below this line
module.exports = fibonacci;
