/**
 * @param {number[]} nums
 * @return {number}
 */

let dp = [];
let count = 0;

var numberOfArithmeticSlices = function (nums) {
  dp = [];
  count = 0;
  _numberOfArithmeticSlices(nums);
  console.log(dp);
  return count;
};

var _numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) {
    return 0;
  }

  if (dp[nums.join(',')]) {
    return dp[nums.join(',')];
  }

  let current = nums.slice(0, nums.length - 1);
  let result = _numberOfArithmeticSlices(current);
  if (
    nums[nums.length - 3] - nums[nums.length - 2] ===
    nums[nums.length - 2] - nums[nums.length - 1]
  ) {
    dp[nums.join(',')] = 1 + result;
    count += dp[nums.join(',')];
    return dp[nums.join(',')];
  } else {
    dp[nums.join(',')] = result;
    return dp[nums.join(',')];
  }
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5]));
console.log(numberOfArithmeticSlices([1, 2, 3, 8, 9, 10]));
