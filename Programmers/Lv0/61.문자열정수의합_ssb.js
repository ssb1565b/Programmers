// 방법 1
const solution = (num_str) =>
  [...num_str].map(Number).reduce((acc, el) => acc + el, 0);

// 방법 2
const solution2 = (num_str) =>
  [...num_str].reduce((acc, el) => acc + Number(el), 0);

console.log(solution("123456789"));
console.log(solution2("123456789"));
