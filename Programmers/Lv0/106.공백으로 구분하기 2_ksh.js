const solution = (my_string) => my_string.split(" ").filter((el) => el != "");

console.log(solution(" i    love  you"));
console.log(solution("    programmers  "));
