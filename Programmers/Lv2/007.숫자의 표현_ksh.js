function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i += 1) {
    if (n % i === 0 && i % 2 === 1) answer += 1;
  }
  return answer;
}

console.log(solution(15));
