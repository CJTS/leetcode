/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  //   dp = [];
  //   return _canJump(nums, 0);

  let walkingDistance = nums[0];

  if (walkingDistance === 0 && nums.length > 1) {
    return false;
  }

  for (let i = 1; i < nums.length; i++) {
    walkingDistance--;

    if (walkingDistance < 0) {
      break;
    }

    if (walkingDistance < nums[i] && i != nums.length - 1) {
      walkingDistance = nums[i];
    }
  }

  return walkingDistance >= 0;
};

var _canJump = function (nums, currentIndex) {
  let can = false;

  if (dp[nums.length] !== undefined) {
    return dp[nums.length];
  }

  if (nums.length === 1) {
    return true;
  }

  for (let j = 1; j <= nums[currentIndex]; j++) {
    if (j < nums.length) {
      can = can || _canJump(nums, currentIndex + j);
    }
  }

  dp[nums.length] = can;
  return can;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0, 1]));
console.log(canJump([0]));
console.log(canJump([1, 2, 3]));
console.log(canJump([1, 0, 1, 0]));
console.log(canJump([1, 0, 2, 2, 0]));
console.log(canJump([2, 2, 0, 2, 0, 2, 0, 0, 2, 0]));
