// 21 March 2025

// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

console.log(filter_list([1, 2, 'a', 'b']))