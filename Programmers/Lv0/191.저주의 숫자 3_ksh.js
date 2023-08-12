function solution(n) {
  let arr = [];

  for (let i = 0; i < 100; i += 1) {
    if (i % 3 !== 0 && !i.toString().split("").includes("3")) {
      arr.push(i);
    }
  }
  return arr[n - 1];
}

console.log(solution(15));
console.log(solution(40));
