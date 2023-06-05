function solution(s) {
  let a = [];
  let b = [];
  [...s].map((el) => (a.includes(el) ? b.push(el) : a.push(el)));
  return a
    .filter((el) => !b.includes(el))
    .sort()
    .join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
