/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let total = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if(element === 'R') {
        counter++;
    } else if(element === 'L') {
        counter--;
    }

    if(counter === 0) {
        total++;
    }
  }

  return total;
};

let s = 'RLRRLLRLRL';

console.log(balancedStringSplit(s));
