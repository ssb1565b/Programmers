function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((el, idx) => [el, idx])
    .filter(([_, idx]) => attendance[idx])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
);
