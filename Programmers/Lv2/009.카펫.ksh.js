function solution(brown, yellow) {
  let sum = brown / 2 + 2;

  for (let i = sum - 1; i >= sum / 2; i--) {
    let row = i;
    let column = sum - i;
    if (yellow === (row - 2) * (column - 2)) return [row, column];
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
