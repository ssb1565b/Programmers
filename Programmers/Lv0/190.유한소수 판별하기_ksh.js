function solution(a, b) {
  return (a / b).toString().length > 10 ? 2 : 1;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
