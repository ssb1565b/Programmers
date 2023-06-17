function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [index1, index2] = queries[i];
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
