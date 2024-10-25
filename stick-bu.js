/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */

let dp = [];

var minCost = function (n, cuts) {
  let newArr = [0, ...cuts, n];
  dp = new Array(newArr.length)
    .fill(-1)
    .map((e) => new Array(newArr.length).fill(-1));
  newArr = newArr.sort((a, b) => {
    return a - b;
  });
  return cost(0, newArr.length - 1, newArr);
};

var cost = function (left, right, cuts) {
  if (dp[left][right] !== -1) {
    return dp[left][right];
  }

  if (right - left === 1) {
    dp[left][right] = 0;
    return 0;
  }

  let min = Infinity;
  for (let i = left + 1; i < right; i++) {
    let ans =
      cost(left, i, cuts) + cost(i, right, cuts) + cuts[right] - cuts[left];

    min = Math.min(min, ans);
    dp[left][right] = min;
  }

  return min;
};

console.log(minCost(13, [3, 12, 1, 5, 9, 11, 4, 8, 7, 2, 6, 10]));
// console.log(dp);
