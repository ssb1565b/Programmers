function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      const sum = numbers[i] + numbers[j];
      if (result.indexOf(sum) < 0) {
        result.push(sum);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
