const road = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 3, 1],
  [2, 4, 4],
  [3, 4, 2],
];

const N = 4; // 마을 개수
const graph = new Array(N + 1).fill(null).map(() => []);

for (const r of road) {
  graph[r[0]].push([r[1], r[2]]);
  graph[r[1]].push([r[0], r[2]]);
}

console.log(graph);
