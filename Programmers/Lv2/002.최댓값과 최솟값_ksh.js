function solution(s) {
  const min = Math.min(...s.split(" ").map(Number));
  const max = Math.max(...s.split(" ").map(Number));
  const answer = `${String(min)} ${String(max)}`;
  return answer;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
