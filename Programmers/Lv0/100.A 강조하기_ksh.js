// 방법1
// function solution(myString) {
//   return [...myString].map((el) => (el === "a" ? el.toUpperCase() : el.toLowerCase())).join("");
// }

// 방법2
const solution = (myString) => myString.toLowerCase().replaceAll("a", "A");

console.log(solution("abstract algebra", "AbstrAct AlgebrA"));
console.log(solution("PrOgRaMmErS", "progrAmmers"));
