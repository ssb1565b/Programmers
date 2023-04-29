// 방법1
const solution = (rny_string) => rny_string.replace(/m/g, "rn");

// 방법2
// const solution = (rny_string) => rny_string.replaceAll("m", "rn");

console.log(solution("masterpiece"));
console.log(solution("programmers"));
console.log(solution("jerry"));
console.log(solution("burn"));
