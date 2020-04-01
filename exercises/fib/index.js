// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 2] + result[i - 1]);
//   }

//   return result[n];
// }

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);

    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;
  // const num = 0;

  return fib(n - 2) + fib(n - 1);
}

const fib = memoize(slowFib);

// function fib(n, preValues = {}) {
//   if (preValues[n]) return preValues[n];

//   let result;
//   if (n < 2) result = n;
//   else result = fib(n - 1, preValues) + fib(n - 2, preValues);

//   preValues[n] = result;
//   return result;
// }
module.exports = fib;
