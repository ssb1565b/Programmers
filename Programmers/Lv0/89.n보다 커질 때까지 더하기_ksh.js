function solution(numbers, n) {
  return numbers.reduce((sum, el) => (sum > n ? sum : (sum += el)), 0);
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
