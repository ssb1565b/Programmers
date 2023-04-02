function solution(my_string) {
  const numArr = my_string.split("").filter((el) => /[0-9]/.test(el));
  numArr.sort((a, b) => a - b);
  return numArr.map(Number);
}

console.log(solution("hi12392"));
console.log(solution("p2o4i8gj2"));
console.log(solution("abcde0"));
