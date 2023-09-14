function solution(d, budget) {
  while (d.sort((a, b) => a - b).reduce((sum, i) => sum + i, 0) > budget)
    d.pop();
  return d.length;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
