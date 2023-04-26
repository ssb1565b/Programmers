function solution(num_list) {
  const a = num_list.reduce((sum, el) => (sum *= el));
  const b = num_list.reduce((sum, el) => (sum += el)) ** 2;
  return a < b ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
