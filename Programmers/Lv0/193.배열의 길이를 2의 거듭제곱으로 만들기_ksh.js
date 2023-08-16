function solution(arr) {
  let temp;
  let i = 0;

  while (true) {
    if (arr.length <= 2 ** i) {
      temp = 2 ** i;
      break;
    }
    i += 1;
  }

  const len = temp - arr.length;
  for (let i = 0; i < len; i += 1) {
    arr.push(0);
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
