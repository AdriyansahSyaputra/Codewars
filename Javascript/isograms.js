// 29 March 2025

// Lsograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    return str.toLowerCase().split('').every((char, index) => str.toLowerCase().indexOf(char) === index);
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));