// 내장함수
const solution = (str1, str2) => [...str1].map((el, index) => el + str2[index]).join("");

// 내장함수 안쓰고
// function solution(str1, str2) {
//   let answer = "";
//   for (let i = 0; i < str1.length; i++) {
//     answer += str1[i] + str2[i];
//   }
//   return answer;
// }

console.log(solution("aaaaa", "bbbbb"));
