function solution(arr, flag) {
  let answer = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else {
      for (let k = 0; k < arr[i]; k++) {
        answer.pop();
      }
    }
  }
  return answer;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
