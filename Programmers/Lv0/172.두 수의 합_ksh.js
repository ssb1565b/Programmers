function solution(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);
  return (num1 + num2).toString();
}

console.log(solution("582", "734"));
console.log(solution("18446744073709551615", "287346502836570928366"));
console.log(solution("0", "0"));
