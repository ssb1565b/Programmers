function solution(arr, n) {
  if (arr.length % 2 === 1) {
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] += n;
    }
    return arr;
  }
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] += n;
  }
  return arr;
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
