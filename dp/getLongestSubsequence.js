/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  let dp = [1];
  let las = [words[0]];

  for (let i = 1; i < words.length; i++) {
    dp[i] = dp[i - 1];

    if (groups[i] !== groups[i - 1]) {
      dp[i] += 1;
      las.push(words[i]);
    }
  }

  return las;
};

console.log(getLongestSubsequence(['e', 'a', 'b'], [0, 0, 1]));
console.log(getLongestSubsequence(['a', 'b', 'c', 'd'], [1, 0, 1, 1]));
