function solution(arr) {
  let x = arr.length;
  let y = arr[0].length;
  let diff = Math.max(x, y) - Math.min(x, y);

  if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < diff; j += 1) {
        arr[i].push(0);
      }
    }
  }

  if (arr.length < arr[0].length) {
    for (let i = arr.length; i < arr[0].length; i += 1) {
      arr.push([]);
      for (let j = 0; j < arr[0].length; j += 1) {
        arr[i].push(0);
      }
    }
  }
  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);

console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
);
