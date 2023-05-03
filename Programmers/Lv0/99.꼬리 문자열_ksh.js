const solution = (str_list, ex) => str_list.filter((el) => !el.includes(ex)).join("");

console.log(solution(["abc", "def", "ghi"], "ef"));
console.log(solution(["abc", "bbc", "cbc"], "c"));
