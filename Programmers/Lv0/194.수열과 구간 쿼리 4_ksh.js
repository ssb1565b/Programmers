function solution(arr, queries) {
  for (const [s, e, k] of queries) {
    for (let i = s; i <= e; i += 1) {
      if (i % k === 0) arr[i] += 1;
    }
  }
  return arr;
}

// function solution(arr, queries) {
//     for (let i = 0; i < queries.length; i += 1) {
//       for (let j = queries[i][0]; j <= queries[i][1]; j += 1) {
//         if (j % queries[i][2] === 0) arr[j] += 1;
//       }
//     }
//     return arr;
//   }

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);
