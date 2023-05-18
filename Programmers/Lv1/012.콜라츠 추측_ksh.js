function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      if (num % 2 === 1) {
        num = num * 3 + 1;
        answer++;
      } else {
        num = num / 2;
        answer++;
      }
    }
  }
  return answer >= 500 ? -1 : answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
