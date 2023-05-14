// function solution(a, b) {
//   const answer = [];
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);

//   for (let i = min; i <= max; i++) {
//     answer.push(i);
//   }
//   return answer.reduce((sum, el) => (sum += el), 0);
// }

const solution = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
