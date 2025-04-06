// 6 April 2025

// String Incrementer

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  const match = string.match(/(.*?)(\d*)$/);
  const prefix = match[1];
  const number = match[2];

  if (number === "") return prefix + "1";

  const incremented = (parseInt(number, 10) + 1).toString();
  const padded = incremented.padStart(number.length, "0");

  return prefix + padded;
}

console.log(incrementString("foo")); // foo1
console.log(incrementString("foobar23")); // foobar24
console.log(incrementString("foo0042")); // foo0043
console.log(incrementString("foo9")); // foo10
console.log(incrementString("foo099")); // foo100
console.log(incrementString("foobar000")); // foobar001
