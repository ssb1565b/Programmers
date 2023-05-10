function solution(order) {
  return ("" + order).split("").filter((el) => ["3", "6", "9"].includes(el)).length;
}

console.log(solution(3));
console.log(solution(29423));
