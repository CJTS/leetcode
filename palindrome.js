const mem = {};

function palindrome(s) {
  if (s.length === 1) {
    mem[s] = s;
    return s;
  }

  if (mem[s]) {
    return mem[s];
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      const newWord = s.slice(i - 1, j);

      if (newWord === newWord.split('').reverse().join('')) {
        console.log(newWord, 'is palindrome');
      }
    }
  }

  return '';
}

function getSubSequence(s) {}

const result = palindrome('character');
console.log(result);
