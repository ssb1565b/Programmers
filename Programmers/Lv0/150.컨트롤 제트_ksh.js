function solution(s) {
  const arr = [...s.split(" ")].map(Number);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") answer -= arr[i - 1];
    else answer += arr[i];
  }
  return answer;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
