const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's BMI.");
} else {
  console.log("John's BMI is higher than Mark's BMI.");
}

const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

const markHigherBMI2 = markBMI2 > johnBMI2;

if (markHigherBMI2) {
  console.log("Mark's BMI is higher than John's BMI.");
} else {
  console.log("John's BMI is higher than Mark's BMI.");
}
