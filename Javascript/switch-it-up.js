// 29 March 2025

// Switch It Up

// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
}

console.log(switchItUp(1));
console.log(switchItUp(2));