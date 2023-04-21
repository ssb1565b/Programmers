// 1 방법
const solution = (my_string) => {
  const arr = ["a", "e", "i", "o", "u"];
  let result = [...my_string].filter((string) => {
    return !arr.includes(string);
  });
  return result.join("");
};

// 2 방법
const regularExpression = (my_string) => my_string.replace(/[aeiou]/g, "");

console.log(solution("nice to meet you"));
console.log(regularExpression("nice to meet you"));
