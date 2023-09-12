const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      const pattern = patterns[j];
      if (answers[i] === pattern[i % pattern.length]) {
        scores[j]++;
      }
    }
  }

  const maxScore = Math.max(...scores);
  const answer = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      answer.push(i + 1);
    }
  }

  return answer;
};
const answers = [1, 3, 2, 4, 2];
console.log(solution(answers));

const check = () => {
  const patterns = [[1, 2, 3]];
  const answers = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      const pattern = patterns[j];
      console.log(
        "pattern[",
        i,
        "%",
        pattern.length,
        "] ===>",
        "pattern[",
        i % pattern.length,
        "]",
        pattern[i % pattern.length]
      );
      if (answers[i] === pattern[i % pattern.length]) {
        console.log("");
      }
    }
  }
};

console.log(check());
