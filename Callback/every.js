// Hàm every được sử dụng để kiểm tra xem tất cả các phần tử của một mảng có thỏa mãn một điều kiện nào đó hay không
const numbers = [1, 2, 3, 4, 5];
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
var allEven = (num) => {
  return num % 2 == 0;
};
var fn = numbers.myEvery(allEven);
console.log(fn);
