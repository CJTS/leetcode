function breakingDP(S, L) {
  if (L.length === 1) {
    let indexL = 0;
    let indexR = S.length - 1;

    while (S[indexL].length < L[0]) {
      indexL++;
    }
    while (S[indexR].length < L[0]) {
      indexR--;
    }

    return Math.min(S[indexL].length, S[indexR].length);
  }

  let indexL = 0;
  let indexR = S.length - 1;

  while (S[indexL].length < L[0]) {
    indexL++;
  }
  while (S[indexR].length < L[0]) {
    indexL--;
  }

  let newSLeftCutted = [...S];
  let rNewSide = newSLeftCutted[indexL].slice(indexL, L[0]);
  let lNewSide = newSLeftCutted[indexL].slice(L[0], S[indexL].length);
  newSLeftCutted.splice(indexL, 1);
  newSLeftCutted.splice(indexL, 0, lNewSide);
  newSLeftCutted.splice(indexL, 0, rNewSide);

  let newSRightCutted = [...S];
  rNewSide = newSRightCutted[indexR].slice(
    0,
    newSRightCutted[indexR].length - L[0]
  );
  lNewSide = newSRightCutted[indexR].slice(
    newSRightCutted[indexR].length - L[0],
    newSRightCutted[indexR].length
  );
  newSRightCutted.splice(indexR, 1);
  newSRightCutted.splice(indexR, 0, lNewSide);
  newSRightCutted.splice(indexR, 0, rNewSide);

  let newL = L;
  newL.splice(0, 1);

  return Math.min(
    S[indexL].length + breakingDP(newSLeftCutted, newL),
    S[indexR].length + breakingDP(newSRightCutted, newL)
  );
}

console.log(breakingDP(['abcdefghijklmnopqrst'], [2, 8, 10]));
console.log(breakingDP(['abcdefghijklmnopqrst'], [10, 8, 2]));
console.log(breakingDP(['abcdefghijklmnopqrst'], [8, 2, 10]));
