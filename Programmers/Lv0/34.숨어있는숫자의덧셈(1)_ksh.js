const solution = (my_string) =>
  my_string
    .split("")
    .filter((el) => /[0-9]/.test(el))
    .map(Number)
    .reduce((num1, num2) => num1 + num2);

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));
