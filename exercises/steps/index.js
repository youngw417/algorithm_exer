// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, rowPrint = '') {
  if (n === row) return;

  if (n === rowPrint.length) {
    console.log(rowPrint);
    return steps(n, row + 1);
  }

  // if (rowPrint.length <= row) rowPrint += '#';
  // else rowPrint += ' ';

  const add = rowPrint.length <= row ? '#' : ' ';

  steps(n, row, rowPrint + add);
}
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let print = '';
//     for (let col = 1; col <= n; col++) {
//       if (row >= col) print += '#';
//       else print += ' ';
//     }

//     console.log(print);
//   }
// }
steps(5);
module.exports = steps;
