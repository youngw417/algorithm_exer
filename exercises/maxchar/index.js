// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObj = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    strObj[char] = strObj[char] + 1 || 1;
  }

  for (let key in strObj) {
    if (strObj[key] > max) {
      max = strObj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
