// 방법1
// function solution(my_string, is_prefix) {
//   let str = "";
//   return [...my_string].map((el) => (str += el)).includes(is_prefix) ? 1 : 0;
// }

// 방법2
// function solution(my_string, is_prefix) {
//   return my_string.startsWith(is_prefix) ? 1 : 0;
// }

// 방법3
function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

console.log(solution("banana", "ban"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "abcd"));
console.log(solution("banana", "bananan"));
