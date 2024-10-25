/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  let sum = 0;
  Object.values(map).forEach((value) => {
    sum += Math.floor(value / 2);
  });

  sum *= 2;

  if (
    Object.values(map).filter((value) => value === 1 || value % 2 === 1)
      .length > 0
  ) {
    sum++;
  }

  return sum;
};

console.log(longestPalindrome('ccc'));
