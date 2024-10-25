let dp = {};

var minCost = function (n, cuts) {
  dp = {};

  var S = ['x'.repeat(n)];
  return minCostRecurs(S, cuts);
};

var minCostRecurs = function (S, cuts) {
  if (dp[S.join(',') + '|' + cuts.join(',')]) {
    return dp[S.join(',') + '|' + cuts.join(',')];
  }

  const cost = [];

  if (cuts.length === 1) {
    let indexL = 0;
    let sumL = S[indexL].length;

    while (sumL < cuts[0] && indexL < S.length) {
      indexL++;
      sumL += S[indexL].length;
    }

    let newSLeftCutted = [...S];
    let whereToCutLeft = cuts[0] - (sumL - S[indexL].length);
    let rNewSide = newSLeftCutted[indexL].slice(0, whereToCutLeft);
    let lNewSide = newSLeftCutted[indexL].slice(
      whereToCutLeft,
      S[indexL].length
    );
    newSLeftCutted.splice(indexL, 1);
    newSLeftCutted.splice(indexL, 0, lNewSide);
    newSLeftCutted.splice(indexL, 0, rNewSide);

    let newLLeft = [...cuts];
    newLLeft.splice(0, 1);

    dp[S.join(',') + '|' + cuts.join(',')] = S[indexL].length;
    return S[indexL].length;
  }

  for (let i = 0; i < cuts.length; i++) {
    let indexL = 0;
    let sumL = S[indexL].length;

    while (sumL < cuts[i] && indexL < S.length) {
      indexL++;
      sumL += S[indexL].length;
    }

    let newSLeftCutted = [...S];
    let whereToCutLeft = cuts[i] - (sumL - S[indexL].length);
    let rNewSide = newSLeftCutted[indexL].slice(0, whereToCutLeft);
    let lNewSide = newSLeftCutted[indexL].slice(
      whereToCutLeft,
      S[indexL].length
    );
    newSLeftCutted.splice(indexL, 1);
    newSLeftCutted.splice(indexL, 0, lNewSide);
    newSLeftCutted.splice(indexL, 0, rNewSide);

    let newLLeft = [...cuts];
    newLLeft.splice(0, 1);

    let newCuts = [...cuts];
    newCuts.splice(i, 1);

    cost[i] = S[indexL].length + minCostRecurs(newSLeftCutted, newCuts);
  }

  dp[S.join(',') + '|' + cuts.join(',')] = Math.min(...cost);
  return Math.min(...cost);
};

console.log(minCost(7, [1, 3, 4, 5]));
// console.log(dp);
console.log(minCost(9, [5, 6, 1, 4, 2]));
// console.log(dp);
console.log(minCost(2, [1]));
// console.log(dp);
console.log(minCost(13, [3, 12, 1, 5, 9, 11, 4, 8, 7, 2, 6, 10]));
console.log(
  minCost(
    30,
    [13, 25, 16, 20, 26, 5, 27, 8, 23, 14, 6, 15, 21, 24, 29, 1, 19, 9, 3]
  )
);
