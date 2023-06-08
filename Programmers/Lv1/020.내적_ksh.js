const solution = (a, b) => a.reduce((sum, _, i) => (sum += a[i] * b[i]), 0);

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
