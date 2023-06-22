function solution(n) {
  const arr = [];
  let i = 2;
  while (n >= 2) {
    if (n % i === 0) {
      arr.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(arr)];
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
