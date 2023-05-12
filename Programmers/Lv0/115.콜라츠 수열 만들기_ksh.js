function solution(n) {
  const answer = [];
  answer.push(n);
  while (n > 1) {
    if (n % 2) {
      n = n * 3 + 1;
      answer.push(n);
    }

    n = n / 2;
    answer.push(n);
  }
  return answer;
}

console.log(solution(10));
