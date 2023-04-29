function solution(a, b) {
  const ab = Number(a.toString() + b.toString());
  const ba = Number(b.toString() + a.toString());
  return Math.max(ab, ba);
}

console.log(solution(9, 91));
console.log(solution(89, 8));
