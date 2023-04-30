// 방법 1
const solution = (numbers, n) => {
  return numbers.reduce((acc, sum) => (acc <= n ? acc + sum : acc), 0);
};
console.log(solution([34, 5, 71, 29, 100, 34], 123));

// 방법 2
const solution2 = (numbers, n) => {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (answer <= n) {
      answer += numbers[i];
    }
  }
  return answer;
};

console.log(solution2([34, 5, 71, 29, 100, 34], 123));
