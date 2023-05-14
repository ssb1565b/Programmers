function solution(todo_list, finished) {
  return todo_list.filter((_, index) => !finished[index]);
}

console.log(solution(["problemsolving", "practiceguitar", "swim", "studygraph"], [true, false, true, false]));
