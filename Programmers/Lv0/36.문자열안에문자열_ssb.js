const solution = (str1, str2) => {
  const result = [...str1].filter((el) => str2.includes(el));
  return result ? 1 : 2;
};

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
// 실패
