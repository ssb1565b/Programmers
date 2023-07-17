function solution(n, m) {
  const answer = [];
  for (let i = 0; i < n * m; i += 1) {
    if (n % i === 0 && m % i === 0) answer[0] = i;
  }

  for (let i = n; i <= n * m; i += 1) {
    if ((i % n === 0) & (i % m === 0)) {
      answer.push(i);
      break;
    }
  }
  return answer;
}

console.log(solution(3, 12));
console.log(solution(2, 5));
