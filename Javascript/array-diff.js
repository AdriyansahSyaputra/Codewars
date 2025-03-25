// 25 March 2025

// Array.diff

// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples:
// array_diff([1,2],[1]) == [2]

function arrayDiff(a, b)
{
    return a.filter(item => !b.includes(item));
}

console.log(arrayDiff([1,2],[1]));