const solution = (a, b) => {
  return a % 2 === 1 && b % 2 === 1
    ? a * a + b * b
    : a % 2 === 1 || b % 2 === 1
    ? 2 * (a + b)
    : Math.abs(a - b);
};

console.log(solution(2, 4));
