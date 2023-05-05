function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, el) => (sum += Number(el)), 0);
}

console.log(solution(123));
console.log(solution(987));
