function solution(arr) {
  const answer = [];
  arr.map((el) => (answer[answer.length - 1] !== el ? answer.push(el) : el));
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
