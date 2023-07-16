function solution(ineq, eq, n, m) {
  return ineq === "<"
    ? eq === "="
      ? n <= m
        ? 1
        : 0
      : n < m
      ? 1
      : 0
    : eq === "="
    ? n >= m
      ? 1
      : 0
    : n > m
    ? 1
    : 0;
}

console.log(solution("<", "=", 20, 50));
console.log(solution(">", "!", 41, 78));
