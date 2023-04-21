const solution = (el) =>
  el
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, item) => acc + item);

console.log(solution(1234));
