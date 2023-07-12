function solution(arr1, arr2) {
  const answer = [];
  let inner = [];
  for (let i = 0; i < arr1.length; i += 1) {
    inner = [];
    for (let j = 0; j < arr1[i].length; j += 1) {
      inner.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(inner);
  }
  return 1;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]]));
