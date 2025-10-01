// 백준 14940 쉬운 최단거리 - Node.js (풀 네이밍, 표준입력)
const fs = require("fs");
const raw = fs.readFileSync(0, "utf8").trim().split("\n");

const [rowCount, columnCount] = raw[0].split(" ").map(Number);
const grid = raw.slice(1).map(line => line.split(" ").map(Number));

// 거리 배열: 기본 -1 (도달 불가), 벽(0)은 출력도 0으로 고정
const distance = Array.from({ length: rowCount }, () => Array(columnCount).fill(-1));

let startRow = -1;
let startColumn = -1;

// 시작점(2) 찾기 + 벽(0)은 distance를 0으로 세팅
for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    const cell = grid[rowIndex][columnIndex];
    if (cell === 2) {
      startRow = rowIndex;
      startColumn = columnIndex;
    } else if (cell === 0) {
      distance[rowIndex][columnIndex] = 0;
    }
  }
}

// 안전장치: 시작점이 없다면 그대로 출력(문제 조건상 보통 1개 존재)
if (startRow === -1 || startColumn === -1) {
  let out = "";
  for (let r = 0; r < rowCount; r++) out += distance[r].join(" ") + "\n";
  console.log(out.trim());
  process.exit(0);
}

// 상하좌우
const deltaRow = [-1, 1, 0, 0];
const deltaColumn = [0, 0, -1, 1];

function bfsFromTarget(startRow, startColumn) {
  const queue = [[startRow, startColumn]];
  let head = 0;

  distance[startRow][startColumn] = 0; // 목표 자기 자신은 0

  while (head < queue.length) {
    const [currentRow, currentColumn] = queue[head++];

    for (let dir = 0; dir < 4; dir++) {
      const nextRow = currentRow + deltaRow[dir];
      const nextColumn = currentColumn + deltaColumn[dir];

      // 범위 확인
      if (
        nextRow < 0 || nextRow >= rowCount ||
        nextColumn < 0 || nextColumn >= columnCount
      ) continue;

      // 갈 수 있는 땅(1)이고 아직 방문 전이면 거리 갱신
      if (grid[nextRow][nextColumn] === 1 && distance[nextRow][nextColumn] === -1) {
        distance[nextRow][nextColumn] = distance[currentRow][currentColumn] + 1;
        queue.push([nextRow, nextColumn]);
      }
    }
  }
}

bfsFromTarget(startRow, startColumn);

// 출력
let output = "";
for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
  output += distance[rowIndex].join(" ") + "\n";
}
console.log(output.trim());
