function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    if (arr1.reduce((sum, el) => (sum += el)) === arr2.reduce((sum, el) => (sum += el))) {
      return 0;
    } else if (arr1.reduce((sum, el) => (sum += el)) > arr2.reduce((sum, el) => (sum += el))) {
      return 1;
    } else return -1;
  }

  return arr1.length > arr2.length ? 1 : -1;
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
