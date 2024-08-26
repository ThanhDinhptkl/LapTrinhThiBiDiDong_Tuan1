const numbers = [1, 2, 3, 4, 5];
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
var anyEven = (num) => {
  return num % 2 == 0;
};
var fn = numbers.mySome(anyEven);
console.log(fn);
