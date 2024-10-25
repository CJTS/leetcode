/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => b - a);
  g.sort((a, b) => b - a);

  let sum = 0;
  let studentIndex = 0;
  let cookieIndex = 0;

  while (studentIndex < g.length && cookieIndex < s.length) {
    if (g[studentIndex] <= s[cookieIndex]) {
      cookieIndex++;
      studentIndex++;
      sum++;
    } else {
      studentIndex++;
    }
  }

  return sum;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
