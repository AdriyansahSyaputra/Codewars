// 31 March 2025

// The Supermarket Queue

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples:
// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12

// Clarifications:
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
  // Jika tidak ada pelanggan, waktu total adalah 0
  if (customers.length === 0) return 0;

  // Jika hanya ada 1 kasir, waktu total adalah jumlah semua waktu
  if (n === 1) return customers.reduce((a, b) => a + b, 0);

  // Inisialisasi kasir dengan waktu 0
  let tills = new Array(n).fill(0);

  // Distribusi pelanggan ke kasir
  for (let time of customers) {
    // Tambahkan waktu pelanggan ke kasir yang paling cepat selesai
    tills[0] += time;
    // Urutkan ulang kasir berdasarkan waktu terkecil
    tills.sort((a, b) => a - b);
  }

  // Waktu total adalah waktu kasir yang paling lama
  return Math.max(...tills);
}

console.log(queueTime([5, 3, 4], 1)); // 12
console.log(queueTime([10, 2, 3, 3], 2)); // 10
console.log(queueTime([2, 3, 10], 2)); // 12
