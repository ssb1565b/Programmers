function solution(numlist, n) {
  return numlist
    .sort((a, b) => a - b)
    .map((value) => [value, Math.abs(n - value)])
    .sort((a, b) =>
      a[1] === b[1] ? (a[0] > b[0] ? b[0] - a[0] : a[0] - b[0]) : a[1] - b[1]
    )
    .flatMap((x) => x[0]);
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
