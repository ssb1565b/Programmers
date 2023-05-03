// 방법1
// function solution(arr) {
//   const answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i]; j++) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

// 방법2
function solution(arr) {
  return arr.map((el) => Array(el).fill(el)).flat(); // flat() 함수는 중첩 배열을 단일 배열로 평면화
}

console.log(solution([5, 1, 4]));
console.log(solution([6, 6]));
console.log(solution([1]));
