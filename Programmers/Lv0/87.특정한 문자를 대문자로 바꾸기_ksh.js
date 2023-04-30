// 방법1
// function solution(my_string, alp) {
//   return my_string
//     .split("")
//     .map((el) => (el === alp ? el.toUpperCase() : el))
//     .join("");
// }

const solution = (my_string, alp) => my_string.replaceAll(alp, alp.toUpperCase());

console.log(solution("programmers", "p"));
console.log(solution("lowercase", "x"));
