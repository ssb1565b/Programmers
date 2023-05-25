function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((el) => el !== "");
}

console.log(solution("axbxcxdx"));
console.log(solution("dxccxbbbxaaaa"));
