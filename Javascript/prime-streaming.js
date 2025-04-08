// 8 April 2025

// Prime Streaming

// Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds.

// If this is too easy, try Prime Streaming (NC-17).

class Primes {
  static *stream() {
    const primes = [];
    let num = 2;

    while (true) {
      let isPrime = true;
      const sqrt = Math.sqrt(num);

      for (let p of primes) {
        if (p > sqrt) break;
        if (num % p === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(num);
        yield num;
      }

      num++;
    }
  }
}

// 10 Bilangan prima pertama
// const gen = Primes.stream();
// for (let i = 0; i < 10; i++) {
//   console.log(gen.next().value);
// }

// 1 Juta bilangan prima terakhir
const gen = Primes.stream();
let count = 0;
let last;
while (count++ < 1_000_000) {
  last = gen.next().value;
}
console.log("1 juta bilangan prima terakhir:", last);
