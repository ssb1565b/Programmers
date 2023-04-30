const solution = (n) => {
  if (n % 2 === 1) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      console.log(i);
      sum += i;
    }
    return sum;
  } else {
    let multi = 0;
    for (let i = 2; i <= n; i += 2) {
      multi += i * i;
    }
    return multi;
  }
};

console.log(solution(7));
console.log(solution(10));
