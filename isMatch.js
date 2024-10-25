/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return _isMatch(s, p);
};

var _isMatch = function (s, p) {
  if (p.lentgh === 1) {
    return s === p || p === '?' || p === '*';
  }

  let indexS = 0;
  let indexP = 0;

  while (indexS > s.lentgh && indexP > p.lentgh) {
    if (s[indexS] === p[indexP]) {
      indexP++;
      indexS++;
    }
    if (p[indexP] === '?') {
      indexP++;
      indexS++;
    } else if (p[indexP] === '*') {
      _isMatch();
    }
  }
};
// console.log(isMatch('aa', 'a'), false);
// console.log(isMatch('aa', '*'), true);
// console.log(isMatch('cb', '?a'), false);

// console.log(isMatch('', ''), true);
// console.log(isMatch('', '*'), true);
// console.log(isMatch('acdcb', 'a*c?b'), false);
// console.log(isMatch('aa', 'aa'), true);
// console.log(isMatch('abefcdgiescdfimde', 'ab*cd?i*de'), true);
// console.log(isMatch('zacabz', '*a?b*'), false);
console.log(isMatch('', '******'), true);
