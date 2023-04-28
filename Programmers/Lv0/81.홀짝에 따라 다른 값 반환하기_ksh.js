function solution(n) {
  if (n % 2 === 0) {
    let sum = 0;
    for (var i = 2; i <= n; i += 2) {
      sum += i * i;
    }
    return sum;
  } else {
    let sum = 0;
    for (var i = 1; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  }
}

console.log(solution(7));
console.log(solution(10));
