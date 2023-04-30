const solution = (strArr) => strArr.map((el, i) => (i % 2 === 1 ? el.toUpperCase() : el.toLowerCase()));

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
console.log(solution(["aBc", "AbC"]));
