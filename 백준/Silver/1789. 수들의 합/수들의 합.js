const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()

//N(N+1)/2≤ M
// N에 대하여 식을 정리 
// N=⌊8M+1−1​⌋/2

  const MaxN = (S)=>{
   return Math.floor((Math.sqrt(8 * S + 1) - 1) / 2);
  }

console.log(MaxN(input))
