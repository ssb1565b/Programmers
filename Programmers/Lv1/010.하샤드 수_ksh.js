function solution(x) {
  return x % ("" + x).split("").reduce((sum, el) => +sum + +el) ? false : true;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
