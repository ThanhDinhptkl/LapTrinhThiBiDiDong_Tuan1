const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};

mark.calcBMI = function () {
  this.bmi = this.mass / this.height ** 2;
  return this.bmi;
};

john.calcBMI = function () {
  this.bmi = this.mass / this.height ** 2;
  return this.bmi;
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log("Both Mark and John have the same BMI!");
}
