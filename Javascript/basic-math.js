// 22 March 2025

// Basic mathematical operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11

function basicOp(operation, value1, value2)
{
    return eval(value1 + operation + value2);
}

console.log(basicOp('+', 4, 7));