// 28 March 2025

// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x)
{
    return x.reduce((a, b) => a + Number(b), 0);
}

console.log(sumMix([9, 3, '7', '3']));