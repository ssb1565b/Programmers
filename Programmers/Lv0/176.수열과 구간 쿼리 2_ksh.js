const solution = (arr, queries) =>
  queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .sort((a, b) => a - b)
        .filter((v) => v > k)[0] || -1
  );

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
