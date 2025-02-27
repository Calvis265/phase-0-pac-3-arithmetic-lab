// Function 1: Add two numbers
function add(a, b) {
    return a + b;
}

// Function 2: Subtract b from a
function subtract(a, b) {
    return a - b;
}

// Function 3: Multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function 4: Divide a by b
function divide(a, b) {
    return a / b;
}

// Function 5: Increment n
function increment(n) {
    return n + 1;
}

// Function 6: Decrement n
function decrement(n) {
    return n - 1;
}

// Function 7: Convert string to integer
function makeInt(n) {
    return parseInt(n, 10); // Ensures base 10 conversion
}

// Function 8: Convert string to float
function preserveDecimal(n) {
    return parseFloat(n);
}

// Export functions  
module.exports = { add, subtract, multiply, divide, increment, decrement, makeInt, preserveDecimal };
