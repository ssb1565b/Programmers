function solution(arr) {
  const temp = [];
  const answer = [];
  arr.map((el, idx) => (el === 2 ? temp.push(idx) : el));
  if (!temp.length) return [-1];
  for (let i = temp[0]; i <= temp[temp.length - 1]; i += 1) {
    answer.push(arr[i]);
  }
  return answer;
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
