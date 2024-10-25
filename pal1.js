const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;
const DIAGONAL = 4;

function LONGESTPALINDROME(x) {
  let n = x.length;
  let b = new Array(n + 1).fill(-1).map((e) => new Array(n + 1).fill(0));
  let p = new Array(n + 1).fill(-1).map((e) => new Array(n + 1).fill(0));

  for (let i = 0; i <= n - 1; i++) {
    p[i][i] = 1;
    let j = i + 1;

    if (x[i] === x[j]) {
      p[i][j] = 2;
      b[i][j] = DIAGONAL;
    } else {
      b[i][j] = LEFT;
    }
  }

  p[n][n] = 1;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      console.log(x[i], x[j]);
      // CASE BASE
      if (j - i + 1 === 2) {
        // Duas letras, se palindromo = 2
        console.log('base');
        if (x[i] === x[j]) {
          p[i][j] = p[i][j - 1] + 1;
          b[i][j] = DIAGONAL;
        } else if (p[i + 1][j] < p[i][j - 1]) {
          p[i][j] = p[i][j - 1];
          b[i][j] = DOWN;
        } else if (p[i + 1][j] == p[i][j - 1]) {
          p[i][j] = p[i][j - 1];
          b[i][j] = LEFT;
        } else {
          b[i][j] = LEFT;
        }
      } else {
        // Duas letras, se palindromo anterior (o que eu ja consegui formar) + 2
        if (x[i] === x[j]) {
          p[i][j] = p[i + 1][j - 1] + 2;
          b[i][j] = DIAGONAL;
        } else if (p[i + 1][j] < p[i][j + 1]) {
          // IF AFTER IS BIGGER THEN BELOW, COPY BELOW AND GO LEFT
          p[i][j] = p[i + 1][j];
          b[i][j] = LEFT;
        } else if (p[i + 1][j] > p[i][j - 1] && b[i][j - 1] !== LEFT) {
          // IF BELOW IS HIGHER THEN BEFORE AND IS NOT GOING LEFT, COPY BELOW AND GO DOWN
          p[i][j] = p[i + 1][j];
          b[i][j] = DOWN;
        } else if (p[i + 1][j] > p[i][j - 1] && b[i][j - 1] === LEFT) {
          // IF BELOW IS HIGHER THEN BEFORE AND IS GOING LEFT, COPY BELOW AND GO LEFT
          p[i][j] = p[i + 1][j];
          b[i][j] = LEFT;
        } else if (p[i + 1][j] === p[i][j - 1]) {
          // IF BELOW IS EQUAL TO BEFORE, COPY BELOW AND GO LEFT
          p[i][j] = p[i + 1][j];
          b[i][j] = LEFT;
        } else {
          b[i][j] = DOWN;
        }
      }
    }
  }

  return [p, b];
}

function printLP(b, x, i, j, s) {
  if (i > j) {
    return s;
  } else if (i === j) {
    return s.concat(x[i]);
  } else if (b[i][j] === DIAGONAL) {
    return x[i].concat(printLP(b, x, i + 1, j - 1, s)).concat(x[i]);
  } else if (b[i][j] === DOWN) {
    return printLP(b, x, i + 1, j, s);
  } else if (b[i][j] === LEFT) {
    return printLP(b, x, i, j + 1, s);
  } else {
    return printLP(b, x, i, j - 1, s);
  }
}

const [p, b] = LONGESTPALINDROME('character');
let arrText = '';
console.log('  c h a r a c t e r');
for (let i = 0; i < b.length; i++) {
  arrText += ' character '[i + 1] + ' ';
  for (let j = 0; j < b[i].length; j++) {
    arrText += b[i][j] + ' ';
  }
  console.log(arrText);
  arrText = '';
}

console.log('----');
console.log('  c h a r a c t e r');
for (let i = 0; i < p.length; i++) {
  arrText += ' character '[i + 1] + ' ';
  for (let j = 0; j < p[i].length; j++) {
    arrText += p[i][j] + ' ';
  }
  console.log(arrText);
  arrText = '';
}
// console.log(p);
// console.log(b);

const result = printLP(b, 'character', 0, 1, '');
console.log(result);
