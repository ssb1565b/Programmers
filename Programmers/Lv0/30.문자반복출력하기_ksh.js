function solution(my_string, n) {
  let answer = "";
  for (let el of my_string) answer += el.repeat(n);
  return answer;
}

console.log(solution("hello", 3));
