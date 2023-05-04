function solution(num_list) {
  const odd = num_list.filter((el, index) => index % 2 === 0).reduce((sum, el) => (sum += el));
  const even = num_list.filter((el, index) => index % 2 === 1).reduce((sum, el) => (sum += el));
  return Math.max(odd, even);
}

console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution([-1, 2, 5, 6, 3]));
