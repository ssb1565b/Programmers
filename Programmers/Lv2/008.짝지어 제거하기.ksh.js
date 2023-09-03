function solution(s) {
  const stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return !stack.length ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
