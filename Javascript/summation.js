// 22 March 2025

// Summation

// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// summation(2) -> 3 (1 + 2)

function summation(num) {
    return (num * (num + 1)) / 2;
}

console.log(summation(10));