function solution(number) {
  return [...number].reduce((sum, el) => (sum += +el), 0) % 9;
}

console.log(solution("123"));
console.log(solution("78720646226947352489"));
