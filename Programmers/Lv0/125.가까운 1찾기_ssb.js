function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}

// console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
// console.log(solution([1, 1, 1, 1, 0], 3));
