function solution(myStr) {
  const arr = myStr.split(/[a|b|c]/).filter((el) => el);
  return arr.length === 0 ? ["EMPTY"] : arr;
}

console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));
console.log(solution("cabab"));
