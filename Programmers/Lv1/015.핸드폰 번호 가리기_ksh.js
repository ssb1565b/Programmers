function solution(phone_number) {
  //방법1
  // const privateNumberCount = phone_number.slice(0, -4).length;
  // let answer = "";
  // for (let i = 0; i < privateNumberCount; i++) {
  //   answer += "*";
  // }

  //방법2
  // return answer + phone_number.slice(-4);
  // return phone_number
  //   .split("")
  //   .fill("*", 0, phone_number.length - 4)
  //   .join("");

  //방법3
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
