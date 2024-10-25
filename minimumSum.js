/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const digits = num.toString().split('');
  digits.sort();
  var first = digits.slice(0, digits.length / 2);
  var second = digits.slice(digits.length / 2, digits.length);
  let num1 = parseInt(first[0] + second[0]);
  let num2 = parseInt(first[1] + second[1]);

  return num1 + num2;
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
