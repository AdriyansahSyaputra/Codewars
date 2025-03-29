// 29 March 2025

// Clock Show

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    return (h * 3600000) + (m * 60000) + (s * 1000);
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));