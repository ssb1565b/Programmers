// const solution = (n_str) => String(Number(n_str));

// 방법 2
const solution = (n_str) => n_str.replace(/^0+/, "");
// 정규표현식에서 +는 하나 이상의 라는의미임

console.log(solution("0010"));
