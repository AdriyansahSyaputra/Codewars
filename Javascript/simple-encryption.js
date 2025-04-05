// 5 April 2025

// Simple Encryption #1: Alternating Split

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || n <= 0) return text;

  for (let i = 0; i < n; i++) {
    let odd = "";
    let even = "";
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 1) odd += text[j]; // odd index first
      else even += text[j]; // even index after
    }
    text = odd + even;
  }

  return text;
}

function decrypt(text, n) {
  if (!text || n <= 0) return text;

  for (let i = 0; i < n; i++) {
    let result = "";
    let mid = Math.floor(text.length / 2);
    let odd = text.slice(0, mid); // first half = odd-indexed
    let even = text.slice(mid); // second half = even-indexed

    let oddIdx = 0;
    let evenIdx = 0;

    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        result += even[evenIdx++];
      } else {
        result += odd[oddIdx++];
      }
    }

    text = result;
  }

  return text;
}

console.log(encrypt("012345", 1)); // "135024"
console.log(encrypt("012345", 2)); // "304152"
console.log(encrypt("012345", 3)); // "012345"

console.log(decrypt("135024", 1)); // "012345"
console.log(decrypt("304152", 2)); // "012345"
console.log(decrypt("012345", 3)); // "012345"\