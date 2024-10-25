let dp = [];

var seam = (d) => {
  let min = Infinity;
  for (let j = 0; j < d[0].length; j++) {
    // try all nodes in row
    min = Math.min(min, _seam(d, 0, j));
  }

  return min;
};

var _seam = (d, i, j) => {
  if (i >= d.length) {
    return 0;
  }

  let min = Infinity;
  let chosenColumn = -1;
  for (let k = j - 1; k < d[i].length; k++) {
    if (k >= 0 && k <= j + 1) {
      let bestSeam = _seam(d, i + 1, k);
      if (min > bestSeam + d[i][j]) {
        min = bestSeam + d[i][j];
        chosenColumn = k;
      }
    }
  }

  dp[i][j] = min;
  return min;
};

let d = [
  [7, 3, 9, 2, 4, 9],
  [1, 9, 5, 2, 6, 1],
  [2, 7, 4, 9, 3, 7],
  [9, 4, 2, 8, 8, 4],
  [9, 3, 6, 9, 4, 2],
];

dp = new Array(d.length).fill(-1).map((row) => new Array(6).fill(-1));
console.log(seam(d));
console.log(dp);
