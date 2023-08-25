function solution(picture, k) {
  const answer = [];
  picture.forEach((el) => {
    const single = el
      .split("")
      .map((el) => el.repeat(k))
      .join("");
    for (let i = 0; i < k; i += 1) {
      answer.push(single);
    }
  });
  return answer;
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
