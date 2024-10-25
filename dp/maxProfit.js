/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }

  let dp = [0];
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min);

    if (min > prices[i]) {
      min = prices[i];
    }
  }

  return dp[prices.length - 1];
};

console.log(maxProfit([1, 2]));
