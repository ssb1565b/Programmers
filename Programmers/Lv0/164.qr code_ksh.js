function solution(q, r, code) {
  return [...code].filter((_, idx) => idx % q === r).join("");
}

console.log(solution(3, 1, "qjnwezgrpirldywt"));
console.log(solution(1, 0, "programmers"));
