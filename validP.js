/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      let leftArr = [...s];
      leftArr.splice(left, 1);
      let rightArr = [...s];
      rightArr.splice(right, 1);
      return palin(leftArr) || palin(rightArr);
    } else {
      left++;
      right--;
    }
  }

  return true;
};

var palin = (s) => {
  let newString = [...s];
  let reverse = [...newString].reverse();

  for (let j = 0; j < reverse.length; j++) {
    if (newString[j] !== reverse[j]) {
      return false;
    }
  }

  return true;
};

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abc'));
console.log(validPalindrome('deeee'));
