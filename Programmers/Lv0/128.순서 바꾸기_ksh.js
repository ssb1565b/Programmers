function solution(num_list, n) {
  const answer = num_list.splice(n);
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

console.log(solution([2, 1, 6], 1));
console.log(solution([5, 2, 1, 7, 5], 3));
