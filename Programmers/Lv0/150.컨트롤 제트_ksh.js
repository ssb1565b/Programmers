function solution(s) {
  s = s.split(" ");
  let arr = [];
  for (let v of s) v === "Z" ? (arr.length ? arr.pop() : "") : arr.push(v);
  return arr.reduce((a, v) => a + +v, 0);
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
