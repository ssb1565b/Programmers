const solution = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((num1, num2) => num1 + num2);
};

console.log(solution(1234));
console.log(solution(930211));
