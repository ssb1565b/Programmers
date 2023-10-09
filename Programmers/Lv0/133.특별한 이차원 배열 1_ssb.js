function solution(n) {
  answer = [];
  for (let i = 0; i < n; i++) {
    answer.push([]);
    for (let j = 0; j < n; j++) {
      if (i === j) answer[i].push(1);
      else answer[i].push(0);
    }
  }
  return answer;
}

console.log(solution(3));
console.log(solution(6));
console.log(solution(1));
