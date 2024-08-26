const numbers = [1, 2, 3, 4, 5];
Array.prototype.myReduce = function (callback, initialValue) {
  let sum;
  let viTriBatDau;

  if (initialValue !== undefined) {
    sum = initialValue;
    viTriBatDau = 0;
  } else {
    sum = this[0];
    viTriBatDau = 1;
  }

  for (let i = viTriBatDau; i < this.length; i++) {
    sum = callback(sum, this[i], i, this);
  }
  return sum;
};
var sum = (sum, giaTriHienTai) => {
  return sum + giaTriHienTai;
};

var result = numbers.myReduce(sum, 0);
console.log(result);
