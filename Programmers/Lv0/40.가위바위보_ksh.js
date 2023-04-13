// 방법1. for of 사용
// function solution(rsp) {
//   let answer = "";
//   for (let i of rsp) {
//     answer += i === "2" ? "0" : i === "0" ? "5" : "2";
//   }
//   return answer;
// }

// 방법2. 화살표 함수, map 사용
const solution = (rsp) =>
  rsp
    .split("")
    .map((el) => (el === "2" ? "0" : el === "0" ? "5" : "2"))
    .join("");

console.log(solution("2"));
console.log(solution("205"));
