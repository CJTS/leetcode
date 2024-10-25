/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  console.log(arr, k);

  if (arr.length === 1) {
    return arr;
  }

  let newArr = [...arr];
  let index = newArr.length - 1;
  let element = newArr.pop();

  let result = maxSumAfterPartitioning(newArr, k);
  console.log('maxSumAfterPartitioning', result);

  // QUERO FAZER UM GRUPO OU NÃO

  let resultArr = [];

  console.log(result[result.length - 1], element);

  if (result[result.length - 1] < element) {
    resultArr = new Array(result.length + 1).fill(element);
  } else {
    resultArr = result.concat(result[result.length - 1]);
  }

  console.log('resultArr', resultArr);

  let sumWithGroup = sum(resultArr);
  console.log('sumWithGroup', resultArr, sumWithGroup);

  let sumWithoutGroup = sum(result.concat(element));
  console.log('sumWithoutGroup', result.concat(element), sumWithoutGroup);

  if (sumWithGroup > sumWithoutGroup) {
    return resultArr;
  }

  return result.concat(result);
};

var sum = (arr) => {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
};

let arr = [1, 15, 7, 9, 2, 5, 10];
let k = 3;

const result = maxSumAfterPartitioning(arr, k);
console.log(result);
