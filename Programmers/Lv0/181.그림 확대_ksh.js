function solution(picture, k) {
  const arr = [];
  for (let i = 0; i < picture.length; i += 1) {
    let str = "";
    for (let j = 0; j < picture[i].length; j += 1) {
      for (let l = 0; l < k; l += 1) {
        str += picture[i][j];
      }
    }
    arr.push(str);
  }

  return arr.reduce((acc, el) => {
    const arr2 = [];
    for (let i = 0; i < k; i += 1) {
      arr2.push(el);
    }
    return [...acc, ...arr2];
  }, []);
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);

console.log(solution(["x.x", ".x.", "x.x"], 3));
