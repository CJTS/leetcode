/**
 * @param {number[]} cost
 * @return {number}
 * Custo: menor custo de pisar naquele degrau
 */
var minCostClimbingStairs = function (cost) {
  let dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  console.log(dp);

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
