const solution = (my_string) =>
  [...my_string]
    .map((el) => (/[A-Z]/.test(el) ? el.toLowerCase() : el.toUpperCase()))
    .join("");

console.log(solution("CDCcaccC"));
