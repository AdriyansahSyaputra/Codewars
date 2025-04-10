// 10 April 2025

// The Boolean Order

// In this Kata, you will be given boolean values and boolean operators. Your task will be to return the number of arrangements that evaluate to True.

// t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^).

// For example, solve("tft","^&") = 2, as follows:

// "((t ^ f) & t)" = True
// "(t ^ (f & t))" = True
// Notice that the order of the boolean values and operators does not change. What changes is the position of braces.

function solve(s, ops) {
  const memo = {};

  function count(i, j) {
    const key = `${i}-${j}`;
    if (memo[key]) return memo[key];

    if (i === j) {
      const val = s[i] === "t" ? { true: 1, false: 0 } : { true: 0, false: 1 };
      memo[key] = val;
      return val;
    }

    let res = { true: 0, false: 0 };

    for (let k = i; k < j; k++) {
      const left = count(i, k);
      const right = count(k + 1, j);
      const op = ops[k];

      const totalTrue = combine(left, right, op, true);
      const totalFalse = combine(left, right, op, false);

      res.true += totalTrue;
      res.false += totalFalse;
    }

    memo[key] = res;
    return res;
  }

  function combine(left, right, op, wantTrue) {
    let total = 0;
    for (const l of ["true", "false"]) {
      for (const r of ["true", "false"]) {
        const lVal = l === "true";
        const rVal = r === "true";
        let res;
        if (op === "&") res = lVal && rVal;
        if (op === "|") res = lVal || rVal;
        if (op === "^") res = lVal ^ rVal;
        if (op === "^") res = Boolean(lVal ^ rVal);
        if (res === wantTrue) {
          total += left[l] * right[r];
        }
      }
    }
    return total;
  }

  return count(0, s.length - 1).true;
}

console.log(solve("tft", "^&")); // 2
