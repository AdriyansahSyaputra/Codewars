// 22 March 2025

//  Keep Hydrated!

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(2));