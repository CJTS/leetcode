/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */

let dp = [];
var distributeCookies = function (cookies, k) {
  dp = [];

  return _distributeCookies(cookies, k);
};

var _distributeCookies = function (cookies, k) {
  if (dp[cookies.length]) {
    return dp[cookies.length];
  }

  if (cookies.length === 1) {
    dp[cookies.length] = cookies[0];
    return dp[cookies.length];
  }

  let min = -1;

  let sum = _distributeCookies(newArr, k);


  for (let i = 0; i < k; i++) {
    kids[i] = 
  }

  dp[cookies.length] = min;

  return dp[cookies.length];
};

console.log(distributeCookies([8, 15, 10, 20, 8], 2));
