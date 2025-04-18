// 26 March 2025

// Odd or even

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

function oddOrEven(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));