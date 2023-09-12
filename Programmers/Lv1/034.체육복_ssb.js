function solution(n, lost, reserve) {
  const students = {}; // 학생들의 체육복 상태
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  console.log("students", students);
  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
      console.log("앞번호 lost", students);
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
      console.log("뒷번호 lost", students);
    }
  }

  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }

  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [1, 4], [2, 3, 5]));
