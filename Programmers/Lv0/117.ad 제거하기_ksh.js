const solution = (strArr) => strArr.filter((el) => !el.includes("ad"));

// function solution(strArr) {
//   const answer = [];
//   for (let i of strArr) {
//     i.includes("ad") ? i : answer.push(i);
//   }
//   return answer;
// }

console.log(solution(["and", "notad", "abcd"]));
console.log(solution(["there", "are", "no", "a", "ds"]));
