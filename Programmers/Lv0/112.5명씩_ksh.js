const solution = (names) => names.filter((_, index) => index % 5 === 0);

console.log(solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]));
