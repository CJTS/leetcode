/**
 * @param {number} n
 * @return {boolean}
 */
let alice = true;
var divisorGame = function (n) {
  alice = !alice;

  if (n === 1) {
    return resultado(alice);
  }

  var x = 0;
  do {
    x = Math.ceil(Math.random() * (n - 1));
  } while (x === 0 || n % x !== 0);
  console.log(x);

  return divisorGame(n - x);
};

var resultado = function (ganhador) {
  console.log('resultado', ganhador);
  alice = true;
  return ganhador;
};

console.log(divisorGame(4));
