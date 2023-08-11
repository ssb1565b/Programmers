function solution(sizes) {
  let big = 0;
  let small = 0;

  for (let len of sizes) {
    if (len[0] > len[1]) {
      if (big < len[0]) big = len[0];
      if (small < len[1]) small = len[1];
    } else {
      if (big < len[1]) big = len[1];
      if (small < len[0]) small = len[0];
    }
  }
  return big * small;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
