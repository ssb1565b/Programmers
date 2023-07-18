function solution(s) {
  const arr = [...s];
  let n = 0;

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] === "(" ? (n += 1) : (n -= 1);
    if (n < 0) break;
  }
  return n === 0 ? true : false;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
