function solution(a, d, included) {
  let answer = 0;
  for (let i = 0; i < included.length; i++) {
    included[i] ? (answer += a + d * i) : i;
  }
  return answer;
}

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
