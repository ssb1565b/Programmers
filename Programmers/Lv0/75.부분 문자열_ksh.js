const solution = (str1, str2) => (str2.includes(str1) ? 1 : 0);

console.log(solution("abc", "aabcc"));
console.log(solution("tbt", "tbbttb"));
