const numbers = [1, 2, 3, 4, 5];
Array.prototype.myReduceRight = function (callback, index) {
  let sum;
  if (index !== undefined) {
    sum = index;
  } else {
    sum = this[this.length - 1];
  }
  for (let i = this.length - 2; i >= 0; i--) {
    sum = callback(sum, this[i], i, this);
  }
  return sum;
};

var sum = (sum, giaTriHienTai) => {
  return sum + giaTriHienTai;
};

var result = numbers.myReduceRight(sum, 0);
console.log(result);
