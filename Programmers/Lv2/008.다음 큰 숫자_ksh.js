function solution(n) {
  let originN = n.toString(2).match(/1/g).length;
  while (n) {
    n++;
    let newN = n.toString(2).match(/1/g).length;
    if (originN === newN) {
      return n;
    }
  }
}

console.log(solution(78));
console.log(solution(15));
