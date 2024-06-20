function calculateNumbers(var1, var2) {
    // Ensure the inputs are numbers
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        return 'Both arguments must be numbers.';
    }

    // Perform calculations
    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var2 !== 0 ? var1 / var2 : 'Cannot divide by zero';

    // Return the results as an object
    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}

// Example usage:
const results = calculateNumbers(10, 5);
console.log(results);