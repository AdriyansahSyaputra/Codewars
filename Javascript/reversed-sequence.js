// 25 March 2025

//  Reversed Sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

function reverseSeq(n) {
    return Array.from({ length: n }, (_, i) => n - i);
}

console.log(reverseSeq(5));