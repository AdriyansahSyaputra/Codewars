// 24 March 2025

// Find Maximum and Minimum Values of a List

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// Examples (Input -> Output)
// [4,6,2,1,9,63,-134,566]         -> 566  (-134)
// [-52, 56, 30, 29, -54, 0, -110] -> 56   (-110)
// [42, 54, 65, 87, 0]             -> 87   (0)
// [-5, -6]                        -> -5   (-6)
// [5, -6]                         -> 5    (-6)

let min = function(list)
{
    return Math.min(...list);
}

let max = function(list)
{
    return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));