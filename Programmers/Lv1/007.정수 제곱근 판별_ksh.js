const solution = (n) => (Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1);

console.log(solution(121));
console.log(solution(3));
