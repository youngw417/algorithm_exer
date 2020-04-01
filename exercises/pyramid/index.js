// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     const midPoint = Math.floor((2 * n - 1) / 2);
//     let printOut = '';
//     for (let col = 0; col < 2 * n - 1; col++) {

//       if (midPoint - row <= col && midPoint + row >= col) {
//         printOut += '#';
//       } else {
//         printOut += ' ';
//       }
//     }
//     console.log(printOut);
//   }
// }

function pyramid(n, row = 0, printOut = '') {
  const midPoint = Math.floor((2 * n - 1) / 2);
  if (n === row) return;

  if (printOut.length === 2 * n - 1) {
    console.log(printOut);
    return pyramid(n, row + 1);
  }

  if (midPoint - row <= printOut.length && midPoint + row >= printOut.length) {
    printOut += '#';
  } else {
    printOut += ' ';
  }
  pyramid(n, row, printOut);
}
module.exports = pyramid;
