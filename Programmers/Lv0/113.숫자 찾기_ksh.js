function solution(num, k) {
  return String(num).includes(k) ? String(num).indexOf(k) + 1 : -1;
}

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
