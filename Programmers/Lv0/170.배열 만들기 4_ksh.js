function solution(arr) {
  const stk = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk.length && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    } else if (stk.length && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      i -= 1;
    }
  }
  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));
