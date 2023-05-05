const solution = (x, n) =>
  Array(n)
    .fill(x)
    .map((el, index) => el * (index + 1));

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
