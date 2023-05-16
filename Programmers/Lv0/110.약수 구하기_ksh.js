function solution(n) {
  return Array(n)
    .fill()
    .map((el, index) => index + 1)
    .filter((el) => n % el === 0);
}

console.log(solution(24));
console.log(solution(29));
  