function solution(numbers) {
  let res = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        res.push(numbers[i] + numbers[j] + numbers[k]);
      }
    }
  }
  let result = res.filter((re) => re === 0).length;
  return result;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
