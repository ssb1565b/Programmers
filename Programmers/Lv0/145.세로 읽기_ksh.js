function solution(my_string, m, c) {
  let answer = "";

  while (my_string.length) {
    answer += my_string[c - 1];
    my_string = my_string.slice(m);
  }

  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
