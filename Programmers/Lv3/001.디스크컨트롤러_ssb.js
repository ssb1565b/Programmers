const solution = (jobs) => {
  let answer = 0,
    j = 0,
    time = 0;
  jobs.sort((a, b) => {
    return a[0] - b[0];
  });

  const priorityQueue = [];
  while (j < jobs.length || priorityQueue.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      console.log("1", priorityQueue);
      priorityQueue.push(jobs[j++]);
      priorityQueue.sort((a, b) => {
        return a[1] - b[1];
      });

      continue;
    }
    if (priorityQueue.length !== 0) {
      console.log("2", priorityQueue);
      time += priorityQueue[0][1];
      answer += time - priorityQueue[0][0];
      priorityQueue.shift();
    }
  }
  return parseInt(answer / jobs.length);
};

console.log(
  solution([
    [1, 9],
    [0, 3],
    [2, 6],
  ])
);
