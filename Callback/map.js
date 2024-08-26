const numbers = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const gapDoi = numbers.myMap((num) => num * 2);
console.log(gapDoi);
