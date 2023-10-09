const solution = (todo_list, finished) =>
  todo_list.filter((_, idx) => !finished[idx]);

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
