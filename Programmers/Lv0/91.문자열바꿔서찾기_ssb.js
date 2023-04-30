// 방법 1
const solution = (myString, pat) => {
  return [...myString]
    .map((el) => (el === "A" ? "B" : el === "B" ? "A" : ""))
    .join("")
    .includes(pat)
    ? 1
    : 0;
};

// 방법 2

const solution2 = (myString, pat) => {
  pat = pat.replaceAll("A", "X").replaceAll("B", "A").replaceAll("X", "B");
  console.log(myString.indexOf(pat));
  return myString.indexOf(pat) === -1 ? 0 : 1;
};

console.log(solution2("ABBAA", "AABB"));
