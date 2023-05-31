const solution = (my_string) =>
  my_string.split(/[A-z]/).reduce((sum, el) => (sum += +el), 0);

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));
