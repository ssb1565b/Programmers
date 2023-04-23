const solution = (rsp) =>
  [...rsp].map((el) => (el === "2" ? "0" : el === "0" ? "5" : "2")).join("");

console.log(solution("2"));
