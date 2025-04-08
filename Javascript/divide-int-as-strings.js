// 8 April 2025

// Divide Integers as Strings

// Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder].

// a and b can be very large (at the order of 10^150 to 10^200)
// As usual, your result should not have leading 0s
// require is disabled in JavaScript. Do it yourself ;-)

function divideStrings(a, b) {
  if (b === "0") throw new Error("Division by zero");

  // Helper function: compare two strings as numbers
  function compare(x, y) {
    if (x.length !== y.length) return x.length - y.length;
    return x.localeCompare(y);
  }

  // Helper function: subtract y from x (x > y)
  function subtract(x, y) {
    let res = "";
    let borrow = 0;
    x = x.split("").map(Number);
    y = y.padStart(x.length, "0").split("").map(Number);

    for (let i = x.length - 1; i >= 0; i--) {
      let digit = x[i] - y[i] - borrow;
      if (digit < 0) {
        digit += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      res = digit + res;
    }

    return res.replace(/^0+/, "") || "0";
  }

  // Helper function: multiply string number with digit (0-9)
  function multiply(s, digit) {
    if (digit === 0) return "0";
    let carry = 0;
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
      let mul = +s[i] * digit + carry;
      res = (mul % 10) + res;
      carry = Math.floor(mul / 10);
    }
    if (carry > 0) res = carry + res;
    return res;
  }

  // Long division
  let quotient = "";
  let remainder = "";

  for (let i = 0; i < a.length; i++) {
    remainder += a[i];
    remainder = remainder.replace(/^0+/, "") || "0";

    let q = 0;
    while (compare(remainder, b) >= 0) {
      remainder = subtract(remainder, b);
      q++;
    }

    quotient += q;
  }

  // Remove leading zero from quotient
  quotient = quotient.replace(/^0+/, "") || "0";

  return [quotient, remainder];
}

console.log(divideStrings("0", "5"));
console.log(divideStrings("4", "5"));
console.log(divideStrings("10", "3"));