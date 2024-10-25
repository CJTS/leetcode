/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  console.log('problem', arr, k, '---------------');

  if (arr.length === 0) {
    // console.log('resposta', arr, 0);
    return 0;
  }

  if (arr.length === 1) {
    // console.log('resposta', arr, arr[0]);
    return arr[0];
  }

  totalMax = 0;
  console.log('ololo')

  for (let i = 0; i < arr.length; i++) {
    max = 0;
    for (let j = 1; j <= k && i + j <= arr.length; j++) {
      let before = arr.slice(0, i);
      let current = arr.slice(i, i + j);
      let after = arr.slice(i + j, arr.length);
      //   console.log(arr, before, current, after);

      let beforeResult = maxSumAfterPartitioning(before, k);
      //   console.log(arr, 'beforeResult', beforeResult);

      let currentResult = current
        .fill(Math.max.apply(null, current))
        .reduce((partialSum, a) => partialSum + a, 0);
      //   console.log(arr, 'currentResult', currentResult);

      let afterResult = maxSumAfterPartitioning(after, k);
      //   console.log(arr, 'afterResult', afterResult);

      let result = beforeResult + currentResult + afterResult;
      if (arr.join(',') === '2,5,10') {
        console.log('result', result, max, arr, before, current, after);
      }

      if (result > max) {
        console.log('max', arr, result, max);
        max = result;
      }
    }

    if (max > totalMax) {
      console.log('total', arr, max, totalMax);
      totalMax = max;
    }
  }

  console.log('resposta', arr, max);
  return max;
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
