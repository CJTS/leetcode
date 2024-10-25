/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// O(2^N)

var allPossibleFBT = function (n) {
  if (n === 1) {
    return [new TreeNode(0, null, null)];
  }

  let result = [];

  for (let index = 2; index < n; index = index + 2) {
    let treesR = [...allPossibleFBT(n - index)];
    let treesL = [...allPossibleFBT(index - 1)];

    for (let indexL = 0; indexL < treesL.length; indexL++) {
      for (let indexR = 0; indexR < treesR.length; indexR++) {
        result.push(new TreeNode(0, treesL[indexL], treesR[indexR]));
      }
    }
  }

  return [...result];
};

let dp = [];

var allPossibleFBTDP = function (n) {
  if (dp[n - 1]) {
    return dp[n - 1];
  }

  if (n === 1) {
    dp[n - 1] = [new TreeNode(0, null, null)];
    return [new TreeNode(0, null, null)];
  }

  let result = [];

  for (let index = 2; index < n; index = index + 2) {
    let treesR = [...allPossibleFBT(n - index)];
    let treesL = [...allPossibleFBT(index - 1)];

    for (let indexL = 0; indexL < treesL.length; indexL++) {
      for (let indexR = 0; indexR < treesR.length; indexR++) {
        result.push(new TreeNode(0, treesL[indexL], treesR[indexR]));
      }
    }
  }

  dp[n - 1] = [...result];
  return [...result];
};

var t0 = performance.now();
allPossibleFBT(31);
var t1 = performance.now();
console.log('Call to allPossibleFBT(31) took ' + (t1 - t0) + ' milliseconds.');

var t0 = performance.now();
allPossibleFBTDP(31);
var t1 = performance.now();
console.log('Call to allPossibleFBTDP(31) took ' + (t1 - t0) + ' milliseconds.');
