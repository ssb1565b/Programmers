// 방법 1
const bestSolution = (my_strings, parts) => {
  return parts.map(([s, e], idx) => my_strings[idx].slice(s, e + 1)).join("");
};

// 방법 2
const solution = (my_strings, parts) => {
  const newArr = my_strings.map((el, idx) => {
    //newRule = [...parts[idx], parts[idx][1] + 1];
    //newRule.splice(1, 1);
    //return el.substring(...newRule);
    // 이렇게 할 필요 없음 밑에 한줄로 정리
    return el.slice(parts[idx][0], parts[idx][1] + 1);
  });
  return newArr.join("");
};

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
