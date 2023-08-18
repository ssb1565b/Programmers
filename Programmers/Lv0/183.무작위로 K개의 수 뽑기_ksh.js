function solution(arr, k) {
  const answer = [];
  arr.forEach((el) => {
    if (!answer.find((v) => v === el)) {
      answer.push(el);
    }
  });
  while (answer.length < k) {
    answer.push(-1);
  }
  return answer.splice(0, k);
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
