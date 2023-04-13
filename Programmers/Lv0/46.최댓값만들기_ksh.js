function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const left = numbers[0] * numbers[1];
  const right = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return left > right ? left : right;
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
