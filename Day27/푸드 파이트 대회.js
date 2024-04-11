function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(i.toString().repeat(Math.floor(food[i] / 2)));
  }

  let answer = arr.join("");

  return answer + "0" + [...answer].reverse().join("");
}
