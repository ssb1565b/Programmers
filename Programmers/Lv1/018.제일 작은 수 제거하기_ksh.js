function solution(arr) {
  const minNumber = Math.min(...arr);
  const answer = arr.filter((el) => el !== minNumber);
  return answer.length ? answer : (answer[0] = [-1]);
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
