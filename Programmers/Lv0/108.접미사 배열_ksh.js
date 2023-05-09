function solution(my_string) {
  let str = "";
  const answer = [];
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer.push(my_string.substring(i, my_string.length));
  }
  return answer.sort();
}

console.log(solution("banana"));
console.log(solution("programmers"));
