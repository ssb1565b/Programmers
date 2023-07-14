function solution(s) {
  return s
    .toLowerCase()
    .split("")
    .map((el, idx) =>
      idx === 0 ? el.toUpperCase() : s[idx - 1] === " " ? el.toUpperCase() : el
    )
    .join("");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
