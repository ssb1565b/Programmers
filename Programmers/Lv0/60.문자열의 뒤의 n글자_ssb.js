// 방법 1
const solution = (my_string, n) =>
  [...my_string].reverse().slice(0, n).reverse().join("");

// 방법 2
const solution2 = (my_string, n) => [...my_string].slice(my_string.length - n);

console.log(solution2("ProgrammerS123", 11));
