// function solution(dots) {
//   const width =
//     Math.max(...dots.map((el) => el[0])) - Math.min(...dots.map((el) => el[0]));
//   const height =
//     Math.max(...dots.map((el) => el[1])) - Math.min(...dots.map((el) => el[1]));
//   return width * height;
// }

const solution = (dots) => {
  const x = [...new Set(dots.map((el) => el[0]))];
  const y = [...new Set(dots.map((el) => el[1]))];
  return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
};

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
