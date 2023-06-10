function solution(myString, pat) {
  let answer = 0;
  for (let i = 0; i < myString.length; i++) {
    if (myString.substr(i, pat.length) === pat) answer++;
  }
  return answer;
}

console.log(solution("banana", "ana"));
console.log(solution("aaaa", "aa"));
