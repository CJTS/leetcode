/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Two pointer
 */
var isSubsequenceTP = function (s, t) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < s.length && pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }

  return pointer1 == s.length;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * DP
 */
var isSubsequence = function (s, t) {
  let dp = new Array(s.length + 1)
    .fill()
    .map(() => new Array(t.length + 1).fill(0));

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i][j - 1];

        if (s[i - 1] === t[j - 1]) {
          dp[i][j] += 1;
        }
      }
    }
  }

  console.log(dp);
  return dp[s.length][t.length] >= s.length;
};

console.log(isSubsequence('ab', 'baab'));
