function solution(s) {
  let countP = 0;
  let countY = 0;
  Array(...s.toLowerCase()).map((el) => (el === "p" ? (countP += 1) : el === "y" ? (countY += 1) : el));
  return countP === countY;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
