// 5 April 2025

// Primes in numbers

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
  let factors = [];
  let prime = 2;

  while (n > 1) {
    if (n % prime === 0) {
      factors.push(prime);
      n /= prime;
    } else {
      prime++;
    }
  }

  // Hitung jumlah masing-masing faktor
  const countMap = {};
  for (let factor of factors) {
    countMap[factor] = (countMap[factor] || 0) + 1;
  }

  // Format hasil sesuai instruksi
  return Object.keys(countMap)
    .map((key) => {
      const count = countMap[key];
      return count === 1 ? `(${key})` : `(${key}**${count})`;
    })
    .join("");
}

console.log(primeFactors(86240));
console.log(primeFactors(7775460));
