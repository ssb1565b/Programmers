// 1번쨰 시도
const solution = (my_string, letter) => my_string.replaceAll(letter, "");

// 2번쨰 시도
const solution2 = (my_string, letter) => my_string.split(letter).join("");

console.log(solution("BCBdbe", "B"));
