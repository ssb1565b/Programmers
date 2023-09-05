function solution(polynomial) {
  polynomial = polynomial.split(" ").filter((el) => el !== "+");
  let xNum = 0;
  let num = 0;
  polynomial.forEach((el) => {
    if (el.includes("x")) {
      const x = el.split("x");
      if (x[0] === "") xNum++;
      if (x[0] !== "") xNum += Number(x[0]);
    }

    if (!el.includes("x")) num += Number(el);
  });

  if (xNum !== 0 && num !== 0)
    return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  if (xNum !== 0 && num === 0) return xNum === 1 ? "x" : `${xNum}x`;
  if (xNum === 0 && num !== 0) return `${num}`;
  if (xNum === 0 && num === 0) return "0";
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
