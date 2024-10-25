/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */

// var maxRepeating = function (sequence, word) {
//   let max = 0;

//   for (let k = 1; k < sequence.length; k++) {
//     if (sequence.includes(word.repeat(k))) {
//       max = k;
//     }
//   }

//   return max;
// };

// var maxRepeating = function (sequence, word) {
//   let max = 0;

//   // Varia todos os possiveis tamanhos de K
//   for (let k = 0; k * word.length <= sequence.length; k++) {
//     let comparingWord = '';

//     // construir a substring com base no k
//     for (let i = 0; i < k; i++) {
//       comparingWord += word;
//     }

//     // verifica se é substring
//     for (let i = 0; i < sequence.length; i++) { // varia o começo da sequencia
//       let substring = true;
//       for (let j = 0; j < comparingWord.length; j++) { // varia a substring
//         if (comparingWord[j] !== sequence[i + j]) { // verifica char a char, se for diferente não é sub string.
//           substring = substring && false;
//         }
//       }

//       if (substring) {
//         max = k;
//       }
//     }
//   }

//   return max;
// };

// let dp = [];
// var maxRepeating = function (sequence, word) {
//   dp = new Array(sequence.length).fill(0);
//   return _maxRepeating(sequence, word);
// };

// var _maxRepeating = function (sequence, word) {
//   if (dp[sequence.length]) {
//     return dp[sequence.length];
//   }

//   if (sequence.length <= 0) {
//     return (dp[sequence.length] = 0);
//   }

//   let substringNow = 0;
//   let substringLatter = 0;

//   if (sequence.slice(sequence.length - word.length, sequence.length) === word) {
//     substringNow =
//       1 + maxRepeating(sequence.slice(0, sequence.length - word.length), word);
//   } else {
//     substringLatter = maxRepeating(sequence.slice(0, sequence.length - 1), word);
//   }

//   return (dp[sequence.length] = Math.max(
//     substringNow, // considero parte da substring
//     substringLatter // começando aqui
//   ));
// };

var maxRepeating = function (sequence, word) {
  let dp = new Array(sequence.length).fill(0);
  let k = 1;

  for (let i = 0; i < sequence.length; i++) {
    const element = sequence.slice(0, i);
    console.log(element);

    for (let j = 0; j < element.length; j++) {
      if (element.substring(word)) {
        console.log('oi');
      }
    }
  }
};

// console.log(maxRepeating('ababc', 'ab'));
// console.log(maxRepeating('ababc', 'ba'));
// console.log(maxRepeating('ababc', 'ac'));
// console.log(maxRepeating('a', 'a'));
console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'));
