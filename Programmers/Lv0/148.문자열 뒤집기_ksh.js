function solution(my_string, s, e) {
  return (
    my_string.substr(0, s) +
    [...my_string.substr(s, e - s + 1)].reverse().join("") +
    my_string.substr(e + 1)
  );
}

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution("Stanley1yelnatS", 4, 10));
