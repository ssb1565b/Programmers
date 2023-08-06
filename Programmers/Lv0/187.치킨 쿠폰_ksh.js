function solution(chicken) {
  let result = 0;
  while (chicken >= 10) {
    result += Math.floor(chicken / 10);
    chicken = (chicken % 10) + Math.floor(chicken / 10);
  }
  return result;
}

console.log(solution(100));
console.log(solution(1081));
