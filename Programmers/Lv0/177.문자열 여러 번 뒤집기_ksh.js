function solution(my_string, queries) {
  for (let el of queries) {
    my_string =
      my_string.slice(0, el[0]) +
      [...my_string.slice(el[0], el[1] + 1)].reverse().join("") +
      my_string.slice(el[1] + 1);
  }
  return my_string;
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
