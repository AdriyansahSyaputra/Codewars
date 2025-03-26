// 26 March 2025

// Counting duplicates

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

function duplicateCount(text) {
  let count = 0;
  let obj = {};

  // Convert text to lowercase to handle case insensitivity
  text = text.toLowerCase();

  // Count occurrences of each character
  for (let char of text) {
    obj[char] = (obj[char] || 0) + 1;
  }

  // Count characters appearing more than once
  for (let key in obj) {
    if (obj[key] > 1) count++;
  }

  return count;
}

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
