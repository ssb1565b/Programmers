const solution = (n) => (Number.isInteger(Math.sqrt(n)) ? 1 : 2);

// JavaScript에서 정수인지 실수인 지 확인하는 법 검색해서 Number.isInteger() 메서드를 알게됨
// 정수면 true, 실수면 false 반환

console.log(solution(144));
console.log(solution(976));
