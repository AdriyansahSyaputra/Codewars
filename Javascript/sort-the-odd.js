// 5 April 2025

// Sort the odd

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  // Ambil angka ganjil dan urutkan
  const oddSorted = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  // Ganti angka ganjil di array asli dengan hasil sort
  return array.map((n) => (n % 2 === 0 ? n : oddSorted.shift()));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));