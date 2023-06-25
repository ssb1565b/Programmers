function solution(s) {
  return /[^0-9]/.test(s)
    ? false
    : s.length === 4 || s.length === 6
    ? true
    : false;
}

console.log(solution("a234"));
console.log(solution("1234"));
