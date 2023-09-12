const solution = (num_list, n) => {
  // 방법 1
  // const front = num_list.slice(0, n);
  // const back = num_list.slice(n);
  // return back.concat(front);
  // 방법 2
  num_list.push(...num_list.splice(0, n));
  return num_list;
  // 여기서 return num_list.push(...num_list.splice(0, n)); 를 하면 안되는 이유는 PUSH 함수는 반환값이 새로 추가된 요소로 나오기 떄문
};
console.log(solution([2, 1, 6], 1));
console.log(solution([5, 2, 1, 7, 5], 3));
