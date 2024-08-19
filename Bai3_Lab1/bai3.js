// Dữ liệu kiểm tra
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function determineWinner(dolphinsAvg, koalasAvg, minScore = 0) {
  if (dolphinsAvg >= minScore && dolphinsAvg > koalasAvg) {
    console.log(`Dolphins thắng với điểm trung bình là ${dolphinsAvg}`);
  } else if (koalasAvg >= minScore && koalasAvg > dolphinsAvg) {
    console.log(`Koalas thắng với điểm trung bình là ${koalasAvg}`);
  } else if (
    dolphinsAvg >= minScore &&
    koalasAvg >= minScore &&
    dolphinsAvg === koalasAvg
  ) {
    console.log(`Hòa! Cả hai đội đều có điểm trung bình là ${dolphinsAvg}`);
  } else {
    console.log(`Không có đội nào đạt yêu cầu để giành cúp.`);
  }
}

const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);

const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

console.log("Dữ liệu 1:");
determineWinner(dolphinsAvg1, koalasAvg1);

console.log("Dữ liệu Bonus 1:");
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1, 100);

console.log("Dữ liệu Bonus 2:");
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2, 100);
