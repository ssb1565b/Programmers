function solution(myString, pat) {
  return [...myString]
    .map((el) => (el === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

console.log(solution("ABBAA", "AABB"));
console.log(solution("ABAB", "ABAB"));
