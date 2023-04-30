// 방법 1
const solution = (a, b) =>
  Number(b.toString() + a.toString()) > Number(a.toString() + b.toString())
    ? Number(b.toString() + a.toString())
    : Number(a.toString() + b.toString());

// 방법 2
const solution2 = (a, b) => {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
};
