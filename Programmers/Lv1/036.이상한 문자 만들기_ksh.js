function solution(s) {
  let answer = "";
  [...s].map((c, i) => {
    i % 2 === 0 ? (answer += c.toUpperCase()) : (answer += c.toLowerCase());
  });
  return answer;
}

console.log(solution("try hello world"));
