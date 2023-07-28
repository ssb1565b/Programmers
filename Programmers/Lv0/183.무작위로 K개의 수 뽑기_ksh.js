function solution(arr, k) {
  var answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (answer.length === k) return answer;
    if (answer.indexOf(arr[i]) === -1) answer.push(arr[i]);
  }
  while (answer.length < k) {
    answer.push(-1);
  }
  return answer;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
