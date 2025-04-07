// 7 April 2025

// Sum By Factors

// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeFactors(n) {
  n = Math.abs(n);
  let result = new Set();
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      result.add(i);
      n /= i;
    }
  }
  if (n > 1) result.add(n);
  return Array.from(result);
}

function sumOfDivided(lst) {
  let primes = new Set();

  // Dapatkan semua faktor prima dari semua angka
  for (let num of lst) {
    for (let pf of primeFactors(num)) {
      primes.add(pf);
    }
  }

  // Hitung jumlah berdasarkan faktor prima
  let result = [];
  for (let p of Array.from(primes).sort((a, b) => a - b)) {
    let sum = lst.filter((n) => n % p === 0).reduce((acc, val) => acc + val, 0);
    result.push([p, sum]);
  }

  return result;
}

console.log(sumOfDivided([12, 15]));
// Output: [[2, 12], [3, 27], [5, 15]]

console.log(sumOfDivided([15, 30, -45]));
// Output: [[3, 0], [5, 0]]