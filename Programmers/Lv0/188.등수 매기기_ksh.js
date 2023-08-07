function solution(score) {
  let avg = score.map((el) => (el[0] + el[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((el) => sorted.indexOf(el) + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
