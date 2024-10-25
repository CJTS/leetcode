/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const dp = [[1], [1, 1]];

    for (let i = 3; i <= rowIndex + 1; i++) {
        dp[i - 1] = []
        dp[i - 1][0] = 1;
        dp[i - 1][i - 1] = 1;
        for (j = 1; j < i - 1; j++) {
            dp[i - 1][j] = dp[i - 2][j - 1] + dp[i - 2][j]
        }
    }

    return dp[rowIndex];
};