/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') {
    return 0;
  }

  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    if (parseInt(s[i - 1]) !== 0) {
      dp[i] += dp[i - 1];
    }

    if (
      10 <= parseInt(s.substring(i - 2, i)) &&
      parseInt(s.substring(i - 2, i)) <= 26
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};

console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('06'));
console.log(numDecodings('27'));
console.log(numDecodings('10'));

console.log(numDecodings('2101'));