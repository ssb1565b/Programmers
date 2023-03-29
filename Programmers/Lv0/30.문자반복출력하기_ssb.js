const solution = (my_string, n) =>
  [...my_string].map((el) => el.repeat(n)).join("");

console.log(solution("hello", 3));
