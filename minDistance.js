/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = new Array(word2.length)
    .fill()
    .map(() => new Array(word1.length).fill(0));

  console.log(dp);

  for (let i = 0; i < word2.length; i++) {
    for (let j = 0; j < word1.length; j++) {
      console.log(i, j, word1[j], word2[i]);
      if (word1[j] !== word2[i]) {
        dp[j][i] = dp[j][i - 1] + 1;
      } else {
        dp[j][i] = dp[j][i - 1];
      }
    }
  }

  return dp[word2.length - 1][word1.length - 1];
};

console.log(minDistance('horse', 'ros'));
// console.log(minDistance('intention', 'execution'));
