function solution(sides) {
  const arr = [];
  const a = Math.min(...sides);
  const b = Math.max(...sides);

  for (let i = 0; i <= b; i += 1) {
    if (b < a + i) arr.push(i);
  }
  for (let i = b + 1; i < a + b; i += 1) {
    arr.push(i);
  }
  return arr.length;
}

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
