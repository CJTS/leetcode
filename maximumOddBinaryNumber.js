/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  const ones = s.split('').filter((c) => c === '1').length;
  if (ones === 1) {
    const ans = new Array(s.length).fill('0');
    ans[ans.length - 1] = '1';
    return ans.join('');
  } else {
    const ans = new Array(s.length).fill('0');
    ans[ans.length - 1] = '1';
    for (let i = 0; i < ones - 1; i++) {
      ans[i] = '1';
    }
    return ans.join('');
  }
};

console.log(maximumOddBinaryNumber('010'));
console.log(maximumOddBinaryNumber('0101'));
