function solution(hp) {
  const 장군개미수 = Math.floor(hp / 5);
  const 병정개미수 = Math.floor((hp % 5) / 3);
  const 일개미수 = Math.floor((hp % 5) % 3);
  return 장군개미수 + 병정개미수 + 일개미수;
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
