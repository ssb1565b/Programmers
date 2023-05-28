function solution(i, j, k) {
  let str = "";
  for (i; i < j + 1; i++) {
    str += i;
  }
  return str.split("").filter((el) => el === String(k)).length;
}

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
