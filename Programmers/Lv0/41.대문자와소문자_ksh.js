// 방법1. for of 사용
// function solution(my_string) {
//   let answer = "";
//   for (let i of my_string) {
//     answer += /[a-z]/.test(i) ? i.toUpperCase() : i.toLowerCase();
//   }
//   return answer;
// }

// 방법2. 화살표 함수, map 사용
const solution = (my_string) =>
  my_string
    .split("")
    .map((el) => (/[a-z]/.test(el) ? el.toUpperCase() : el.toLowerCase()))
    .join("");

console.log(solution("cccCCC"));
console.log(solution("abCdEfghIJ"));
