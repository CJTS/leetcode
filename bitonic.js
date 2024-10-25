let dp = {};

var bitonic = (points) => {
  if (points.length === 2) {
    return [
      [points[0], points[1]], // LEFT
      [points[1], points[0]], // RIGHT
    ];
  }

  const point = points[0];

  const bitonicTourPoints = [...points];
  bitonicTourPoints.splice(0, 1);
  const bitonicTour = bitonic(bitonicTourPoints);

  for (let j = 0; j < bitonicTour[0].length; j++) {
    const leftAddingLeft = [...bitonicTour[0]];
    leftAddingLeft.splice(0, 0, point);
    const rightAddingLeft = [...bitonicTour[1]];
    rightAddingLeft.splice(rightAddingLeft.length - 1, 1);
    rightAddingLeft.push(point);
    let lCost = cost(leftAddingLeft, rightAddingLeft);

    const leftAddingRight = [...bitonicTour[0]];
    leftAddingRight.splice(0, 1);
    leftAddingRight.unshift(point);
    const rightAddingRight = [...bitonicTour[1]];
    rightAddingRight.splice(rightAddingRight.length, 0, point);
    let rCost = cost(leftAddingRight, rightAddingRight);

    if (lCost <= rCost) {
      return [leftAddingLeft, rightAddingLeft];
    } else {
      return [leftAddingRight, rightAddingRight];
    }
  }
};

var bitonicDP = (points) => {
  if (points.length === 2) {
    return [
      [points[0], points[1]], // LEFT
      [points[1], points[0]], // RIGHT
    ];
  }

  if (
    dp[
      points[0].join(',') +
        '|' +
        points[points.length - 1].join(',') +
        '|' +
        points.length
    ]
  ) {
    console.log(
      'DP',
      points[0].join(',') +
        '|' +
        points[points.length - 1].join(',') +
        '|' +
        points.length
    );
    return dp[
      points[0].join(',') +
        '|' +
        points[points.length - 1].join(',') +
        '|' +
        points.length
    ];
  }

  const point = points[0];

  const bitonicTourPoints = [...points];
  bitonicTourPoints.splice(0, 1);
  const bitonicTour = bitonic(bitonicTourPoints);

  for (let j = 0; j < bitonicTour[0].length; j++) {
    const leftAddingLeft = [...bitonicTour[0]];
    leftAddingLeft.splice(0, 0, point);
    const rightAddingLeft = [...bitonicTour[1]];
    rightAddingLeft.splice(rightAddingLeft.length - 1, 1);
    rightAddingLeft.push(point);
    let lCost = cost(leftAddingLeft, rightAddingLeft);

    const leftAddingRight = [...bitonicTour[0]];
    leftAddingRight.splice(0, 1);
    leftAddingRight.unshift(point);
    const rightAddingRight = [...bitonicTour[1]];
    rightAddingRight.splice(rightAddingRight.length, 0, point);
    let rCost = cost(leftAddingRight, rightAddingRight);

    if (lCost <= rCost) {
      dp[
        points[0].join(',') +
          '|' +
          points[points.length - 1].join(',') +
          '|' +
          points.length
      ] = [leftAddingLeft, rightAddingLeft];

      console.log(
        'LEFT',
        points[0].join(',') +
          '|' +
          points[points.length - 1].join(',') +
          '|' +
          points.length
      );
      return [leftAddingLeft, rightAddingLeft];
    } else {
      console.log(
        'RIGHT',
        points[0].join(',') +
          '|' +
          points[points.length - 1].join(',') +
          '|' +
          points.length
      );
      dp[
        points[0].join(',') +
          '|' +
          points[points.length - 1].join(',') +
          '|' +
          points.length
      ] = [leftAddingRight, rightAddingRight];
      return [leftAddingRight, rightAddingRight];
    }
  }
};

var bitonicBU = (points) => {
  if (points.length === 1) {
    return [[points[0]], [points[0]]];
  } else if (points.length === 1) {
    return [
      [points[0], points[1]],
      [points[1], points[0]],
    ];
  }

  let L = [points[0], points[points.length - 1]];
  let R = [points[points.length - 1], points[0]];

  for (let i = 1; i < points.length - 1; i++) {
    const point = points[i];

    const leftAddingLeft = [...L];
    leftAddingLeft.splice(leftAddingLeft.length - 1, 0, point);
    const rightAddingLeft = [...R];
    let lCost = cost(leftAddingLeft, rightAddingLeft);

    const leftAddingRight = [...L];
    const rightAddingRight = [...R];
    rightAddingRight.splice(1, 0, point);
    let rCost = cost(leftAddingRight, rightAddingRight);

    if (lCost <= rCost) {
      L = leftAddingLeft;
      R = rightAddingLeft;
    } else {
      L = leftAddingRight;
      R = rightAddingRight;
    }
  }

  return [L, R];
};

var cost = (pointsL, pointsR) => {
  let sum = 0;
  for (let i = 0; i < pointsL.length - 1; i++) {
    const next = (i + 1) % pointsL.length;
    sum += Math.sqrt(
      Math.pow(pointsL[i][0] - pointsL[next][0], 2) +
        Math.pow(pointsL[i][1] - pointsL[next][1], 2)
    );
  }

  for (let i = 0; i < pointsR.length - 1; i++) {
    const next = (i + 1) % pointsR.length;
    sum += Math.sqrt(
      Math.pow(pointsR[i][0] - pointsR[next][0], 2) +
        Math.pow(pointsR[i][1] - pointsR[next][1], 2)
    );
  }

  return sum;
};

const points = [
  [0, 0],
  [1, 6],
  [2, 3],
  [5, 2],
  [6, 5],
  [7, 1],
  [8, 4],
];

const result = bitonic(points);
console.log(result);
const resultCost = cost(result[0], result[1]);
console.log(resultCost);

const resultBU = bitonicBU(points);
console.log(resultBU);
const resultBUCost = cost(resultBU[0], resultBU[1]);
console.log(resultCost);

const resultDP = bitonicDP(points);
console.log(resultDP);
const resultDPCost = cost(resultDP[0], resultDP[1]);
console.log(resultDPCost);
console.log(dp);
