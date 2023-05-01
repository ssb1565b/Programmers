const solution = (num_list, n) => num_list.filter((_, index) => index % n === 0);

console.log(solution([4, 2, 6, 1, 7, 6], 2));
console.log(solution([4, 2, 6, 1, 7, 6], 4));
