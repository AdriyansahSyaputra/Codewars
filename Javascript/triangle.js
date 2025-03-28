// 26 March 2025

// Is This a Triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c)
{
    return (a + b > c) && (b + c > a) && (c + a > b);
}

console.log(isTriangle(1, 2, 2));