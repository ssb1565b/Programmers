function solution(intStrs, k, s, l) {
  return intStrs.map((el) => +el.slice(s, s + l)).filter((el) => el > k);
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
