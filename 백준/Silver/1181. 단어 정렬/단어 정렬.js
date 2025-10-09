const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const words = input.slice(1, 1 + N);
const unique = Array.from(new Set(words));

unique.sort((a, b) => {
  const lenDiff = a.length - b.length;
  if (lenDiff !== 0) return lenDiff;
  return a.localeCompare(b);
});

console.log(unique.join("\n"));
