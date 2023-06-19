function solution(s) {
  const arr = s.split(" ");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "Z" && arr[i + 1] !== "Z") sum += Number(arr[i]);
  }
  return sum;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
