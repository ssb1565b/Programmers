const solution = (my_string, letter) =>
  my_string
    .split("")
    .filter((char) => char !== letter)
    .join("");

console.log(solution("abcdef", "f"));
console.log(solution("BCBdbe", "B"));
