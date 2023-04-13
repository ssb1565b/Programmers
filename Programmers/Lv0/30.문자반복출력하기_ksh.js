// function solution(my_string, n) {
//   let answer = "";
//   for (let el of my_string) answer += el.repeat(n);
//   return answer;
// }

const solution = (my_string, n) => [...my_string].map((el) => el.repeat(n)).join("");

console.log(solution("hello", 3));
