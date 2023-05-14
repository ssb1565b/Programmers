function solution(a, b, c) {
  if (a === b && b === c) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  }

  if (a !== b && b !== c && c !== a) {
    return a + b + c;
  }

  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));
