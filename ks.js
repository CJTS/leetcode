// A utility function that returns
// maximum of two integers
function max(a, b) {
  return a > b ? a : b;
}

// Returns the value of maximum profit
function knapSackRec(W, wt, val, n, dp) {
  // Base condition
  if (n == 0 || W == 0) return 0;

  if (dp[n][W] != -1) return dp[n][W];

  if (wt[n - 1] > W)
    // Store the value of function call
    // stack in table before return
    return (dp[n][W] = knapSackRec(W, wt, val, n - 1, dp));
  // Return value of table after storing
  else
    return (dp[n][W] = max(
      val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp),
      knapSackRec(W, wt, val, n - 1, dp)
    ));
}

function knapSack(W, wt, val, N) {
  // Declare the dp table dynamically
  // Intializing dp tables(row and cols) with -1 below
  var dp = new Array(N + 1).fill(-1).map((el) => new Array(W + 1).fill(-1));
  console.log(dp);
  let oi = knapSackRec(W, wt, val, N, dp);
  console.log(dp);
  return oi;
}

var profit = [60, 100, 120];
var weight = [10, 20, 30];

var W = 50;
var N = profit.length;

console.log(knapSack(W, weight, profit, N));
