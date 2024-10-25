var strassen = (A, B) => {
  // Step 1
  let ALength = A.length;
  let BLength = B.length;

  if (ALength === 1) {
    return A[0][0] * B[0][0];
  }

  let A11 = [];
  let A12 = [];
  let A21 = [];
  let A22 = [];
  let B11 = [];
  let B12 = [];
  let B21 = [];
  let B22 = [];

  for (let index = 0; index < ALength / 2; index++) {
    A11[index] = [...A][index].slice(0, ALength / 2);
    A12[index] = [...A][index].slice(ALength / 2, ALength);
    A21[index] = [...A][index + ALength / 2].slice(0, ALength / 2);
    A22[index] = [...A][index + ALength / 2].slice(ALength / 2, ALength);

    B11[index] = [...B][index].slice(0, BLength / 2);
    B12[index] = [...B][index].slice(BLength / 2, BLength);
    B21[index] = [...B][index + ALength / 2].slice(0, BLength / 2);
    B22[index] = [...B][index + ALength / 2].slice(BLength / 2, BLength);
  }

  console.log('A11', A11);
  console.log('A12', A12);
  console.log('A21', A21);
  console.log('A22', A22);
  console.log('B11', B11);
  console.log('B12', B12);
  console.log('B21', B21);
  console.log('B22', B22);

  // Step 2
  let S1 = [];
  let S2 = [];
  let S3 = [];
  let S4 = [];
  let S5 = [];
  let S6 = [];
  let S7 = [];
  let S8 = [];
  let S9 = [];
  let S10 = [];
  for (let index = 0; index < ALength / 2; index++) {
    S1[index] = [];
    S2[index] = [];
    S3[index] = [];
    S4[index] = [];
    S5[index] = [];
    S6[index] = [];
    S7[index] = [];
    S8[index] = [];
    S9[index] = [];
    S10[index] = [];
    for (let index2 = 0; index2 < BLength / 2; index2++) {
      S1[index][index2] = B12[index][index2] - B22[index][index2];
      S2[index][index2] = A11[index][index2] + A12[index][index2];
      S3[index][index2] = A21[index][index2] + A22[index][index2];
      S4[index][index2] = B21[index][index2] - B11[index][index2];
      S5[index][index2] = A11[index][index2] + A22[index][index2];
      S6[index][index2] = B11[index][index2] + B22[index][index2];
      S7[index][index2] = A12[index][index2] - A22[index][index2];
      S8[index][index2] = B21[index][index2] + B22[index][index2];
      S9[index][index2] = A11[index][index2] - A21[index][index2];
      S10[index][index2] = B11[index][index2] + B12[index][index2];
    }
  }

  console.log('S1', S1);
  console.log('S2', S2);
  console.log('S3', S3);
  console.log('S4', S4);
  console.log('S5', S5);
  console.log('S6', S6);
  console.log('S7', S7);
  console.log('S8', S8);
  console.log('S9', S9);
  console.log('S10', S10);

  // Step 3
  let P1 = strassen(A11, S1);
  let P2 = strassen(S2, B22);
  let P3 = strassen(S3, B11);
  let P4 = strassen(A22, S4);
  let P5 = strassen(S5, S6);
  let P6 = strassen(S7, S8);
  let P7 = strassen(S9, S10);

  console.log('P1', P1);
  console.log('P2', P2);
  console.log('P3', P3);
  console.log('P4', P4);
  console.log('P5', P5);
  console.log('P6', P6);
  console.log('P7', P7);

  let C = [];
  C[0] = [P5 + P4 - P2 + P6, P1 + P2];
  C[1] = [P3 + P4, P5 + P1 - P3 - P7];

  return C;
};

let A = [
  [1, 3],
  [7, 5],
];
let B = [
  [6, 8],
  [4, 2],
];
// let A = [
//   [1, 3, 1, 3],
//   [7, 5, 7, 5],
//   [1, 3, 1, 3],
//   [7, 5, 7, 5],
// ];
// let B = [
//   [6, 8, 6, 8],
//   [4, 2, 4, 2],
//   [6, 8, 6, 8],
//   [4, 2, 4, 2],
// ];

let C = strassen(A, B);
console.log(C);
