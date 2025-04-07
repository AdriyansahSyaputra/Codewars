// 7 April 2025

// Shortest Knight Path

// Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

// For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

// For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

// (Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)

function knight(start, finish) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const toCoords = (pos) => [pos.charCodeAt(0) - 97, parseInt(pos[1]) - 1];
  const [sx, sy] = toCoords(start);
  const [fx, fy] = toCoords(finish);

  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  const queue = [[sx, sy, 0]];

  while (queue.length) {
    const [x, y, moves] = queue.shift();

    if (x === fx && y === fy) return moves;

    for (const [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy;

      if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, moves + 1]);
      }
    }
  }

  return -1; // tidak mungkin terjadi di papan 8x8
}

console.log(knight("a3", "b5"));