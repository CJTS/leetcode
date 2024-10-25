/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    }

    const dp = [0, 1];
    let group = 1;
    let innerGroup = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = 1 + dp[innerGroup];
        innerGroup++;
        if (innerGroup === Math.pow(2, group)) {
            group++
            innerGroup = 0;
        }
    }

    return dp;
};