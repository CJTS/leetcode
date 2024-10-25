/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const word = s;
  const [p, b] = LONGESTPALINDROME(word);
  const result = printLP(b, word, 0, word.length, '');

  return result.length;
};

const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;
const DIAGONAL = 4;

function LONGESTPALINDROME(x) {
  let max = 1;
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
    for (let j = i + 1; j <= n - 1; j++) {
      if (x[i] === x[j]) {
        p[i][j] = p[i + 1][j - 1] + 2;

        if (max < p[i][j]) {
          max = p[i][j];
        }

        b[i][j] = DIAGONAL;
      } else if (p[i + 1][j] <= p[i][j - 1]) {
        p[i][j] = p[i][j - 1];
        b[i][j] = RIGHT;
      } else {
        b[i][j] = DOWN;
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

const word = 'euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew';
console.log(longestPalindromeSubseq(word));
