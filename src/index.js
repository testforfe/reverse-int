module.exports = function reverse (n) {
  if (n < 0) {
    n = n * (-1);
  }
  let array = +String(n).split("").reverse().join('');
  return array;
}
