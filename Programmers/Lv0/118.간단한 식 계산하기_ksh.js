function solution(binomial) {
  const [num1, operator, num2] = binomial.split(" ");
  return operator === "+" ? +num1 + +num2 : operator === "-" ? +num1 - +num2 : +num1 * +num2;
}

console.log(solution("43 + 12"));
console.log(solution("0 - 7777"));
console.log(solution("40000 * 40000"));
