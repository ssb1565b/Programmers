const solution = (str) =>
  str
    .split(" ")
    .map((word) =>
      [...word]
        .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");

console.log(solution("try hello world"));
