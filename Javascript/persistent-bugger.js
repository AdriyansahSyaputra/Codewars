// 27 March 2025

// Persistent Bugger

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)

function persistence(num) {
    let count = 0;
    while (num >= 10) {
        num = num.toString().split('').reduce((a, b) => a * b);
        count += 1;
    }
    return count;
}

console.log(persistence(39));
console.log(persistence(4));