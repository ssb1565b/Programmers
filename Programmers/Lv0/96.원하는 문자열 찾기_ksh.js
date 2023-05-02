// 방법1
// function solution(myString, pat) {
//   return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
// }

// 방법2 (정규식)
function solution(myString, pat) {
  return new RegExp(pat, "i").test(myString) ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc"));
console.log(solution("aaAA", "aaaaa"));
