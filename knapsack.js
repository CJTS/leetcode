function knapsackBruteForce(itensWeight, itensValues, weight) {
  let max = -1;
  console.log('a', itensWeight, itensValues, weight);

  if (weight <= 0) {
    return 0;
  }

  for (let index = 0; index < itensWeight.length; index++) {
    // Olhar todas as escolhas
    let sum = 0;
    const currentWeight = itensWeight[index];
    const currentValue = itensValues[index];
    console.log('b', currentWeight, currentValue);

    if (weight >= currentWeight) {
      // Essa é uma escolha valida
      sum += currentValue;
      console.log('c', currentWeight, currentValue, sum);

      if (weight - currentWeight > 0) {
        // continuo a busca
        let newW = [...itensWeight];
        let newV = [...itensValues];

        newW.splice(index, 1);
        newV.splice(index, 1);
        var restValue = knapsackBruteForce(newW, newV, weight - currentWeight);
        sum += restValue;
        console.log('d', max, restValue, currentValue);
      }
    }

    console.log('choice', max, sum);
    if (max < sum) {
      max = sum;
    }
    console.log(max);
  }

  return max;
}

function knapsackTopDown(itensWeight, itensValues, weight) {
  if (itensWeight.length <= 0 || weight <= 0) {
    return 0;
  }

  const currentWeight = itensWeight[itensWeight.length - 1];
  const currentValue = itensValues[itensWeight.length - 1];
  let newW = [...itensWeight];
  let newV = [...itensValues];

  newW.splice(itensWeight.length - 1, 1);
  newV.splice(itensWeight.length - 1, 1);

  if (weight < currentWeight) {
    return knapsackTopDown(newW, newV, weight);
  } else {
    return Math.max(
      currentValue + knapsackTopDown(newW, newV, weight - currentWeight),
      knapsackTopDown(newW, newV, weight)
    );
  }
}

var dp = {};
function knapsackDP(itensWeight, itensValues, weight) {
  if (weight <= 0) {
    return 0;
  }

  if (dp[itensWeight.length][weight] != -1) {
    return dp[itensWeight.length][weight];
  }

  const currentWeight = itensWeight[itensWeight.length - 1];
  const currentValue = itensValues[itensWeight.length - 1];
  let newW = [...itensWeight];
  let newV = [...itensValues];

  newW.splice(itensWeight.length - 1, 1);
  newV.splice(itensWeight.length - 1, 1);

  if (weight < currentWeight) {
    return (dp[itensWeight.length - 1][weight] = knapsackDP(
      newW,
      newV,
      weight - currentWeight
    ));
  } else {
    return (dp[itensWeight.length - 1][weight] = Math.max(
      currentValue + knapsackDP(newW, newV, weight - currentWeight),
      knapsackDP(newW, newV, weight - currentWeight)
    ));
  }
}

// dp = new Array(4).fill(-1).map((el) => new Array(5).fill(-1));
// var t0 = performance.now();
// console.log(knapsackTopDown([4, 5, 1], [1, 2, 3], 4));
// var t1 = performance.now();
// // console.log(dp);
// console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');

dp = new Array(4).fill(-1).map((el) => new Array(3).fill(-1));
console.log(dp);
var t0 = performance.now();
console.log(knapsackDP([1, 1, 1], [10, 20, 30], 2));
var t1 = performance.now();
console.log(dp);
console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');

// var dp = new Array(51).fill(-1).map((el) => new Array(851).fill(-1));
// var t0 = performance.now();
// console.log(
//   knapsackDP(
//     [
//       7, 0, 30, 22, 80, 94, 11, 81, 70, 64, 59, 18, 0, 36, 3, 8, 15, 42, 9, 0,
//       42, 47, 52, 32, 26, 48, 55, 6, 29, 84, 2, 4, 18, 56, 7, 29, 93, 44, 71, 3,
//       86, 66, 31, 65, 0, 79, 20, 65, 52, 13,
//     ],
//     [
//       360, 83, 59, 130, 431, 67, 230, 52, 93, 125, 670, 892, 600, 38, 48, 147,
//       78, 256, 63, 17, 120, 164, 432, 35, 92, 110, 22, 42, 50, 323, 514, 28, 87,
//       73, 78, 15, 26, 78, 210, 36, 85, 189, 274, 43, 33, 10, 19, 389, 276, 312,
//     ],
//     850
//   )
// );
// var t1 = performance.now();
// console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
