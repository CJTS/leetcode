/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */

let dp = {};
var maxScoreWords = function (words, letters, score) {
  console.log(words, letters);
  if (words.length === 0 || letters.length === 0) {
    console.log(0);
    return 0;
  }

  //   if (dp[words.length - 1][letters.length - 1] !== -1) {
  //     return dp[words.length - 1][letters.length - 1];
  //   }

  for (const word of words) {
    if (!canUseWord(word, letters)) {
      return maxScoreWords(words.slice(1, words.length), letters, score);
    }

    let copyWord = [...letters];

    for (const c of word) {
      let numberOsCInLettersIndex = copyWord.findIndex(
        (letter) => letter === c
      );
      if (numberOsCInLettersIndex !== -1) {
        copyWord.splice(numberOsCInLettersIndex, 1);
      }
    }
    let lettersWitoutUsedLetter = copyWord;
    let value = wordValue(word, score);

    let withWord =
      value +
      maxScoreWords(
        words.slice(1, words.length),
        lettersWitoutUsedLetter,
        score
      );
    let withoutWord = maxScoreWords(
      words.slice(1, words.length),
      letters,
      score
    );

    if (withWord > withoutWord) {
      dp[words.length - 1][letters.length - 1] = withWord;
      console.log(word, withWord);
      return withWord;
    } else {
      dp[words.length - 1][letters.length - 1] = withoutWord;
      console.log(word, withoutWord);
      return withoutWord;
    }
  }
};

function canUseWord(word, letters) {
  let copyWord = [...letters];

  for (const c of word) {
    let numberOsCInLettersIndex = copyWord.findIndex((letter) => letter === c);
    if (numberOsCInLettersIndex !== -1) {
      copyWord.splice(numberOsCInLettersIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

function wordValue(word, score) {
  let sum = 0;
  for (const c of word) {
    sum += score[c.charCodeAt(0) - 97];
  }
  return sum;
}

words = ['dog', 'cat', 'dad', 'good'];
letters = ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'];
score = [
  1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

dp = new Array(words.length)
  .fill(-1)
  .map((el) => new Array(letters.length).fill(-1));

// console.log(dp);
console.log(maxScoreWords(words, letters, score));
// console.log(dp);
