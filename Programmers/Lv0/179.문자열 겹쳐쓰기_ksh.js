const solution = (my_string, overwrite_string, s) =>
  my_string.substring(0, s) +
  overwrite_string +
  my_string.substring(overwrite_string.length + s);

console.log(solution("He11oWor1d", "lloWorl", 2));
console.log(solution("Program29b8UYP", "merS123", 7));
