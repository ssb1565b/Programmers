function solution(num_list) {
  let answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    while (num_list[i] !== 1) {
      if (num_list[i] % 2 === 1) {
        num_list[i] = (num_list[i] - 1) / 2;
        answer += 1;
      } else {
        num_list[i] = num_list[i] / 2;
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution([12, 4, 15, 1, 14]));
