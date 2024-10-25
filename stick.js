let dp = {};

var minCost = function (n, cuts) {
  dp = {};
  var S = ['x'.repeat(n)];
  const allCuts = permute(cuts);
  console.log(allCuts)
  let min = Infinity;
  for (let i = 0; i < allCuts.length; i++) {
    const element = breakingDP(S, allCuts[i]);
    if (min > element) {
      min = element;
    }
  }

  return min;
};

function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

function breakingDP(S, L) {
  if (dp[L.join(',')]) {
    return dp[L.join(',')];
  }

  if (L.length === 1) {
    let indexL = 0;
    let sumL = S[indexL].length;

    while (sumL < L[0] && indexL < S.length) {
      indexL++;
      sumL += S[indexL].length;
    }

    let newSLeftCutted = [...S];
    let whereToCutLeft = L[0] - (sumL - S[indexL].length);
    let rNewSide = newSLeftCutted[indexL].slice(0, whereToCutLeft);
    let lNewSide = newSLeftCutted[indexL].slice(
      whereToCutLeft,
      S[indexL].length
    );
    newSLeftCutted.splice(indexL, 1);
    newSLeftCutted.splice(indexL, 0, lNewSide);
    newSLeftCutted.splice(indexL, 0, rNewSide);

    let newLLeft = [...L];
    newLLeft.splice(0, 1);

    dp[L.join(',')] = S[indexL].length;

    return S[indexL].length;
  }

  let indexL = 0;
  let sumL = S[indexL].length;

  while (sumL < L[0] && indexL < S.length) {
    indexL++;
    sumL += S[indexL].length;
  }

  let newSLeftCutted = [...S];
  let whereToCutLeft = L[0] - (sumL - S[indexL].length);
  let rNewSide = newSLeftCutted[indexL].slice(0, whereToCutLeft);
  let lNewSide = newSLeftCutted[indexL].slice(whereToCutLeft, S[indexL].length);
  newSLeftCutted.splice(indexL, 1);
  newSLeftCutted.splice(indexL, 0, lNewSide);
  newSLeftCutted.splice(indexL, 0, rNewSide);

  let newLLeft = [...L];
  newLLeft.splice(0, 1);

  let cost = S[indexL].length + breakingDP(newSLeftCutted, newLLeft);
  dp[L.join(',')] = cost;

  return cost;
}

console.log(minCost(13, [3, 12, 1, 5, 9, 11, 4, 8, 7, 2, 6, 10]));
console.log(dp);
