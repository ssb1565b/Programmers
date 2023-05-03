// 방법1
// function solution(my_string, is_suffix) {
//   return my_string.endsWith(is_suffix) ? 1:0
// }

// 방법2
function solution(my_string, is_suffix) {
  return my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0;
}

console.log(solution("banana", "ana"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "wxyz"));
console.log(solution("banana", "abanana"));
