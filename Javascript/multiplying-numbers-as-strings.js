// 8 April 2025

// Multiplying numbers as strings

// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// Usage of BigInt is disallowed and will be checked in the full test suite.

function multiply(a, b) {
  if (a === "0" || b === "0") return "0";

  const m = a.length,
    n = b.length;
  const result = Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    const digitA = +a[i];
    for (let j = n - 1; j >= 0; j--) {
      const digitB = +b[j];
      const mul = digitA * digitB;
      const sum = result[i + j + 1] + mul;

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // Remove leading zeros
  while (result[0] === 0) {
    result.shift();
  }

  return result.join("");
}

console.log(multiply("2", "3"));
console.log(multiply("30", "69"));
