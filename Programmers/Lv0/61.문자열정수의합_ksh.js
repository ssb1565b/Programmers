function solution(num_str) {
  const arr = num_str.split("").map(Number);
  return arr.reduce((sum, el) => (sum += el), 0);
}

console.log(solution("123456789"));
console.log(solution("1000000"));
