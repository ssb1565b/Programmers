function solution(my_string) {
  const arr = my_string.split("");

  const answer = arr.filter((el) => el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u").join("");
  return answer;
}

console.log(solution("bus"));
console.log(solution("nice to meet you"));
