// 방법 1
const solution = (my_string, index_list) => {
  return index_list.map((el) => my_string[el]).join("");
};

// 방법 2
const solution2 = (my_string, index_list) => {
  let arr = "";
  index_list.map((el) => (arr += [...my_string][el]));
  return arr;
};

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
