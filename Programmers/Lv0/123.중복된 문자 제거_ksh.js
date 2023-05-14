// function solution(my_string) {
//   const answer = [];
//   [...my_string].map((el) => (answer.includes(el) ? el : answer.push(el)));
//   return answer.join("");
// }

const solution = (my_string) => [...new Set(my_string)].join("");

console.log(solution("people"));
console.log(solution("We are the world"));
