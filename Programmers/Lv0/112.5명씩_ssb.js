// 방법 1
const solution = (names) => {
  const division = [];
  const answer = [];
  const length = Math.ceil(names.length / 5);
  for (let i = 0; i < length; i++) {
    division.push(names.splice(0, 5));
    console.log(division);
    answer.push(division[i][0] || "");
  }
  return answer;
};

//방법 2
const solution2 = (names) =>
  names.filter(
    (_, idx) => !(idx % 5)
    // console.log(!(idx % 5), "/", idx % 5 === 0),
  );

// 방법 3
const solution3 = (names) => {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    console.log(i / 5); // 0,1 나옴 즉 answer 배열에 할당하려는것임
    answer[i / 5] = names[i];
  }
  return answer;
};

console.log(
  solution3([
    "nami",
    "ahri",
    "jayce",
    "garen",
    "ivern",
    "vex",
    "jinx",
    "nami",
    "ahri",
    "jayce",
  ])
);
