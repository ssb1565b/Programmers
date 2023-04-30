const solution = (my_string, index_list) => index_list.map((el) => my_string[el]).join("");

console.log(solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
console.log(solution("zpiaz", [1, 2, 0, 0, 3]));
