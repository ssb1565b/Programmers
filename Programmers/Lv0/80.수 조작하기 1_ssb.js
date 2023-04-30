const solution = (n, control) =>
  [...control]
    .map((el) => {
      return el === "w"
        ? (n += 1)
        : el === "s"
        ? (n -= 1)
        : el === "d"
        ? (n += 10)
        : (n -= 10);
    })
    .slice(-1)[0];

console.log(solution(0, "wsa"));
