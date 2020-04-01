// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// function vowels(str) {
//   let count = 0;
//   const letter = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (letter.includes(char)) count++;
//   }
//   return count;
// }

// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const lowerStr = str.toLowerCase();
//   const strArr = lowerStr.split('');
//   let num = 0;

//   vowels.forEach(cur => {
//     strArr.forEach(ele => {
//       if (ele === cur) num++;
//     });
//   });
//   return num;
// }
module.exports = vowels;
